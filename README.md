# AnonShell

**Free, open-source operational security and privacy education for everyone.**

## About

AnonShell is a comprehensive educational resource dedicated to teaching operational security (OpSec), privacy protection, and network security fundamentals. Built with a philosophy of accessibility and transparency, we believe security knowledge should be free, well-documented, and available to all.

The site follows a **concentric circles methodology**: starting with foundational concepts at the center and progressively moving outward through increasingly sophisticated defense layers. This structured approach ensures learners build proper mental models before tackling advanced techniques.

## What We Cover

### Core Topics

- **Operational Security 101**: Threat modeling, security mindset, behavioral patterns, and fundamental OpSec principles
- **Operating Systems**: Hardening guides for Windows, macOS, and Linux with practical configurations
- **Network Security**: Deep dives into VPNs, Tor, proxies, DNS privacy, traffic analysis, and anonymity networks
- **Digital Footprint Management**: Browser fingerprinting, tracking mitigation, and identity compartmentalization

### Philosophy

We prioritize:
- **Practical, actionable guidance** over theoretical discussion
- **Threat-model-based recommendations** rather than one-size-fits-all advice
- **Transparent methodology** with clear reasoning behind every recommendation
- **Regular updates** to reflect evolving threat landscapes
- **Community-driven improvements** through open collaboration

## Technology Stack

AnonShell is built as a lightweight, static site with minimal dependencies:

- **Pure HTML/CSS/JavaScript**: No frameworks, no build processes, no npm hell
- **Tailwind CSS**: Utility-first styling for maintainable design
- **Highlight.js**: Syntax highlighting for code examples
- **Lucide Icons**: Clean, consistent iconography
- **Client-side routing**: Fast navigation with hash-based routing

The entire site is deployable to any static host, including Cloudflare Pages, GitHub Pages, Netlify, or traditional web servers.

## Project Structure

```
.
├── index.html              # Main landing page and SPA shell
├── css/
│   ├── main.css           # Core styles and terminal theme
│   └── highlight.min.css  # Code syntax highlighting theme
├── js/
│   ├── highlight.js       # Syntax highlighting engine
│   ├── lucide.min.js      # Icon library
│   └── tailwind.min.js    # Tailwind CSS
├── posts/                 # Educational content
│   ├── 1.OpSec_101/      # Circle 1: OpSec fundamentals
│   ├── 2.Operating_Systems/ # Circle 2: OS hardening
│   ├── 3.Network_Security/  # Circle 3: Network defense
│   ├── toc.html          # Table of contents
│   ├── privacy.html      # Privacy policy
│   ├── tos.html          # Terms of service
│   ├── donate.html       # Donation information
│   └── contact.html      # Contact methods
├── navigation.json        # Site navigation structure
└── build-nav.js          # Navigation builder script
```

## Contributing

We welcome contributions from security researchers, educators, developers, and privacy advocates. Whether you want to improve existing content, add new guides, fix technical issues, or enhance the user experience, your input is valuable.

### Ways to Contribute

**Content Contributions**
- Write new security guides or tutorials
- Update existing content with current best practices
- Add practical examples and case studies
- Improve clarity and accessibility of explanations
- Translate content to other languages

**Technical Contributions**
- Enhance site performance and accessibility
- Improve responsive design and mobile experience
- Fix bugs or browser compatibility issues
- Add new features to improve user experience
- Optimize code for maintainability

**Documentation**
- Improve setup and deployment instructions
- Document site architecture and design decisions
- Create contributor guidelines
- Add code comments and explanations

### How to Contribute

1. **Fork the repository** to your GitHub account
2. **Create a feature branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes** following our style guidelines
4. **Test thoroughly** across different browsers and devices
5. **Commit with clear messages** describing what and why
6. **Push to your fork** and submit a pull request
7. **Engage in review** and address any feedback

### Content Guidelines

When contributing educational content:

- **Use clear, concise language** accessible to beginners
- **Provide practical examples** with real-world context
- **Include threat models** explaining who benefits from each technique
- **Cite sources** for technical claims and recommendations
- **Test all commands** and configurations before publishing
- **Consider operational security** in your examples
- **Maintain consistent formatting** with existing content

### Code Style

- Use semantic HTML5 elements
- Follow existing CSS class naming conventions
- Keep JavaScript minimal and vanilla when possible
- Ensure accessibility standards (WCAG 2.1 AA minimum)
- Test on multiple browsers and screen sizes
- Comment complex logic and non-obvious decisions

### Pull Request Process

1. Ensure your code passes all existing tests
2. Update documentation to reflect any changes
3. Add yourself to contributors list if desired
4. Reference any related issues in your PR description
5. Be patient and responsive during code review
6. Squash commits before merging if requested

## Development Setup

Clone the repository:
```bash
git clone https://github.com/AnonShell/anonshell.com.git
cd anonshell.com
```

Since this is a static site, you can serve it locally with any web server:

**Using Python:**
```bash
python3 -m http.server 8000
```

**Using Node.js:**
```bash
npx http-server -p 8000
```

**Using PHP:**
```bash
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## Deployment

The site is designed to deploy anywhere static files are served. No build process required.

**Cloudflare Pages:**
- Build command: (leave empty)
- Build output directory: `/`

**GitHub Pages:**
- Simply enable Pages in repository settings
- Select the main branch as source

**Traditional hosting:**
- Upload all files via FTP/SFTP
- Ensure `.html` files are served correctly

## License

This project is licensed under the **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License (CC BY-NC-SA 4.0)**. See the [LICENSE](LICENSE) file for details.

You are free to:
- **Share**: Copy and redistribute the material in any medium or format
- **Adapt**: Remix, transform, and build upon the material

Under the following terms:
- **Attribution**: Give appropriate credit to AnonShell and indicate if changes were made
- **NonCommercial**: Do not use the material for commercial purposes (paid courses, commercial products, revenue generation)
- **ShareAlike**: Distribute your contributions under the same license
- **No additional restrictions**: Do not apply legal terms or technological measures that restrict others from doing anything the license permits

For the full legal text, visit: https://creativecommons.org/licenses/by-nc-sa/4.0/

## Support

If you find AnonShell valuable, consider supporting the project:

- **Contribute content or code** through pull requests
- **Share with others** who would benefit from security education
- **Report issues** to help us improve quality
- **Donate cryptocurrency** to help cover hosting costs

Visit our [donation page](https://anonshell.com/#/posts/donate.html) for cryptocurrency addresses.

## Contact

For secure communication, verified contact methods, and responsible disclosure information, visit our [contact page](https://anonshell.com/#/posts/contact.html).

## Acknowledgments

AnonShell exists thanks to:
- The security research community for sharing knowledge
- Privacy advocates fighting for digital rights
- Open-source contributors who build the tools we rely on
- Educators making complex topics accessible
- Everyone who believes security knowledge should be free

---

**Built by the community, for the community.**

*Last updated: December 2025*
