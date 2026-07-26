# Contributing to BookBoanerges

Thank you for your interest in contributing to BookBoanerges! We welcome all contributions that help improve our bookstore platform.

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on the code, not the person
- Help others learn and grow

## Getting Started

### Prerequisites
- Git
- A GitHub account
- A modern code editor (VS Code recommended)
- A web browser for testing

### Fork and Clone

1. Fork the repository on GitHub
   ```bash
   # Go to https://github.com/yourusername/BookBoanerges
   # Click "Fork" button
   ```

2. Clone your fork locally
   ```bash
   git clone https://github.com/yourusername/BookBoanerges.git
   cd BookBoanerges
   ```

3. Add upstream remote
   ```bash
   git remote add upstream https://github.com/original/BookBoanerges.git
   ```

## Development Workflow

### Create a Feature Branch

```bash
# Update from upstream
git fetch upstream
git checkout main
git merge upstream/main

# Create feature branch
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-name
# or
git checkout -b docs/documentation-updates
```

### Branch Naming Conventions

- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `style/` - Code style changes
- `refactor/` - Code refactoring
- `perf/` - Performance improvements
- `test/` - Adding or updating tests

## Making Changes

### Code Style Guidelines

#### JavaScript
```javascript
// Use meaningful variable names
const userCart = [];

// Use arrow functions for modern syntax
const addToCart = (item) => {
  userCart.push(item);
};

// Use const by default, let when needed
const MAX_ITEMS = 100;
let currentItems = 0;

// Add comments for complex logic
// Check if cart exceeds maximum items
if (currentItems > MAX_ITEMS) {
  showWarning('Cart limit exceeded');
}
```

#### CSS
```css
/* Use consistent naming */
.button-primary {
  /* properties */
}

/* Use variables for colors */
.card {
  background-color: var(--glass);
  box-shadow: var(--shadow-md);
}

/* Group related properties */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

/* Mobile-first approach */
@media (max-width: 768px) {
  .header {
    flex-direction: column;
  }
}
```

#### HTML
```html
<!-- Use semantic HTML -->
<header class="header">
  <nav class="navbar">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/books">Books</a></li>
    </ul>
  </nav>
</header>

<!-- Use descriptive classes -->
<section class="popular-books">
  <article class="book-card">
    <!-- content -->
  </article>
</section>
```

### Commit Messages

Write clear, descriptive commit messages:

```bash
# Good
git commit -m "Add responsive mobile menu navigation"
git commit -m "Fix: resolve search box focus issue on mobile"
git commit -m "Docs: add deployment guide"

# Avoid
git commit -m "fix stuff"
git commit -m "update"
git commit -m "asdf"
```

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

Example:
```
feat(search): add filters for book categories

Allow users to filter books by genre, price, and author
using the new filter dropdown menu on the search results page.

Closes #123
```

## Testing

### Manual Testing Checklist

Before submitting a PR, test on:

- [ ] Desktop Chrome
- [ ] Desktop Firefox
- [ ] Desktop Safari (if available)
- [ ] Mobile Chrome (Android)
- [ ] Mobile Safari (iOS)
- [ ] Tablet (iPad or Android tablet)

### Testing Responsive Design

```bash
# Test at different breakpoints
# Mobile: 480px or less
# Tablet: 768px
# Desktop: 1024px+
```

### Check Functionality

- [ ] All links work correctly
- [ ] Forms submit properly
- [ ] Navigation works on all pages
- [ ] Search functionality works
- [ ] Animations are smooth (60fps)
- [ ] No console errors in developer tools

## Pull Request Process

### Before Submitting

1. **Update your branch** from main
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Test thoroughly** on multiple devices
   ```bash
   # Open local server
   python -m http.server 8000
   # Test at http://localhost:8000
   ```

3. **Check for conflicts**
   ```bash
   git status
   ```

### Creating a Pull Request

1. **Push your branch**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create PR on GitHub**
   - Go to https://github.com/yourusername/BookBoanerges
   - Click "Compare & pull request"
   - Fill in the PR template

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] New feature
- [ ] Bug fix
- [ ] Documentation update
- [ ] Performance improvement

## Testing
Describe how you tested this:
- Tested on Chrome desktop
- Tested on mobile (iPhone 12)
- Verified responsive at 480px breakpoint

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tested on multiple browsers
- [ ] Responsive design verified
```

## Review Process

Your PR will be reviewed by maintainers:

1. **Code Review** - Check code quality and style
2. **Functionality Review** - Verify it works as intended
3. **Design Review** - Ensure design consistency
4. **Responsive Review** - Check mobile/tablet views
5. **Performance Review** - Look for optimization opportunities

### Common Feedback

- "Can you add a comment explaining this logic?"
- "Please test on mobile devices"
- "This could be simplified by..."
- "Let's align this with our design system"

## Reporting Issues

### Bug Reports

Include:
- Browser and version
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots if helpful

```markdown
## Bug Description
Clear description of the bug

## Steps to Reproduce
1. Go to...
2. Click on...
3. Observe...

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Browser Info
- Browser: Chrome 91
- OS: Windows 10
- Device: Desktop

## Screenshots
[If applicable]
```

### Feature Requests

Include:
- Clear description of the feature
- Why it would be useful
- Possible implementation approach

```markdown
## Feature Description
What feature would you like to add?

## Problem It Solves
Why is this needed?

## Suggested Implementation
How might this be implemented?

## Additional Context
Any other details?
```

## Documentation Contributions

### Updating Docs

1. Edit the relevant `.md` file in `/docs/`
2. Follow Markdown best practices
3. Include code examples where helpful
4. Test links work correctly

### Writing Guidelines

- Use clear, simple language
- Add examples for complex concepts
- Include screenshots for UI changes
- Keep paragraphs short
- Use lists for multiple points

## Project Structure

```
BookBoanerges/
├── src/
│   ├── pages/          # HTML files
│   ├── styles/         # CSS files
│   └── scripts/        # JavaScript files
├── public/             # Static assets
│   ├── images/         # Images
│   └── assets/         # Vendor libraries
├── games/              # Mini-games
├── docs/               # Documentation
└── README.md           # Main documentation
```

## Design System

### Colors
- Primary: `#606c38` (Green)
- Accent: `#d4a574` (Gold)
- Dark: `#0f1419` (Dark)
- Light: `#f8f9fa` (Light)

### Breakpoints
- Mobile: `≤480px`
- Tablet: `481px - 768px`
- Desktop: `≥1024px`

### Fonts
- Primary: Poppins
- Secondary: Patrick Hand

## Questions?

- Check the [README.md](README.md)
- Review [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)
- Open a GitHub Discussion
- Email: support@bookboanerges.com

## Recognition

Contributors are recognized in:
- README.md Contributors section
- GitHub contributors page
- Release notes

Thank you for contributing! 🙏
