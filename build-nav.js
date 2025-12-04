#!/usr/bin/env node

/**
 * Build Navigation Script for Cloudflare Pages
 * 
 * This script scans the /posts directory and generates
 * a static navigation.json file that replaces the dynamic api.php
 * 
 * Run this script whenever you add/remove files or folders:
 *   node build-nav.js
 * 
 * You do NOT need to run this when only editing content of existing files.
 */

const fs = require('fs');
const path = require('path');

// Configuration
const BASE_DIR = __dirname;
const POSTS_DIR = path.join(BASE_DIR, 'posts');
const OUTPUT_FILE = path.join(BASE_DIR, 'navigation.json');

const IGNORED_FILES = ['.', '..', 'manifest.json', 'search_index.json', 'index.html', '.DS_Store', '.gitignore'];
const HIDDEN_FROM_NAV = ['privacy.html', 'tos.html', 'contact.html', 'donate.html'];

/**
 * Extract title from HTML content
 */
function getTitle(content, filename) {
    // Try <title> tag first
    const titleMatch = content.match(/<title[^>]*>(.*?)<\/title>/is);
    if (titleMatch) {
        return titleMatch[1].replace(/<[^>]*>/g, '').trim();
    }
    
    // Try <h1> tag
    const h1Match = content.match(/<h1[^>]*>(.*?)<\/h1>/is);
    if (h1Match) {
        const rawText = h1Match[1].replace(/<[^>]*>/g, '');
        return rawText.replace(/#/g, '').trim();
    }
    
    // Fallback to filename
    const name = path.parse(filename).name;
    return name.replace(/[-_]/g, ' ');
}

/**
 * Recursively scan directory and build file tree
 */
function scanDirectory(dirPath, relativePath) {
    const items = [];
    
    if (!fs.existsSync(dirPath)) {
        return items;
    }
    
    let files;
    try {
        files = fs.readdirSync(dirPath);
    } catch (err) {
        console.error(`Error reading directory ${dirPath}:`, err.message);
        return items;
    }
    
    files.sort();
    
    for (const file of files) {
        if (IGNORED_FILES.includes(file)) continue;
        
        // Skip dot files
        if (file.startsWith('.') || file.includes('..')) continue;
        
        const fullPath = path.join(dirPath, file);
        const relPath = path.join(relativePath, file);
        
        // Check if symlink
        let stats;
        try {
            stats = fs.lstatSync(fullPath);
            if (stats.isSymbolicLink()) continue;
        } catch (err) {
            console.error(`Error checking ${fullPath}:`, err.message);
            continue;
        }
        
        if (stats.isDirectory()) {
            // Recursively scan subdirectory
            const children = scanDirectory(fullPath, relPath);
            items.push({
                name: file,
                path: relPath.replace(/\\/g, '/'),
                type: 'folder',
                children: children
            });
        } else if (stats.isFile() && file.endsWith('.html')) {
            // Read HTML file
            let content;
            try {
                content = fs.readFileSync(fullPath, 'utf8');
            } catch (err) {
                console.error(`Error reading ${fullPath}:`, err.message);
                continue;
            }
            
            const title = getTitle(content, file);
            const isHidden = HIDDEN_FROM_NAV.includes(file);
            
            items.push({
                name: file,
                path: relPath.replace(/\\/g, '/'),
                type: 'file',
                title: title,
                hidden: isHidden
            });
        }
    }
    
    return items;
}

/**
 * Main build function
 */
function buildNavigation() {
    console.log('🔨 Building navigation structure...\n');
    
    const navigation = {
        posts: []
    };
    
    // Scan posts directory
    console.log('📁 Scanning /posts directory...');
    if (fs.existsSync(POSTS_DIR)) {
        navigation.posts = scanDirectory(POSTS_DIR, 'posts');
        console.log(`   Found ${countFiles(navigation.posts)} files\n`);
    } else {
        console.log('   Directory not found\n');
    }
    
    // Write to file
    console.log('💾 Writing navigation.json...');
    try {
        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(navigation, null, 2));
        console.log('✅ Success! navigation.json generated\n');
        
        const stats = fs.statSync(OUTPUT_FILE);
        console.log(`📊 File size: ${(stats.size / 1024).toFixed(2)} KB`);
        console.log(`📊 Total items: ${countFiles(navigation.posts)}`);
    } catch (err) {
        console.error('❌ Error writing navigation.json:', err.message);
        process.exit(1);
    }
}

/**
 * Count total files in tree
 */
function countFiles(items) {
    let count = 0;
    for (const item of items) {
        if (item.type === 'file') {
            count++;
        } else if (item.children) {
            count += countFiles(item.children);
        }
    }
    return count;
}

// Run the build
console.log('\n🚀 AnonShell Navigation Builder\n');
buildNavigation();
console.log('\n✨ Build complete!\n');
