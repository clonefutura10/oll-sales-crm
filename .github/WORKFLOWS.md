# GitHub Actions Workflows

This document describes all the GitHub Actions workflows configured for the OLL Sales CRM project.

## 🔄 Workflow Overview

### 1. **CI/CD Pipeline** (`ci-cd.yml`)
**Triggers:** Push to `main`/`develop`, Pull Requests to `main`
- ✅ Comprehensive testing (Python & Node.js)
- 🐳 Docker image building and pushing
- 🔒 Security scanning with Trivy
- 🚀 Automated deployment to staging/production
- 📊 Coverage reporting to Codecov

### 2. **Code Quality** (`code-quality.yml`)
**Triggers:** Push/PR to any branch, Manual dispatch
- 🐍 **Python Linting:**
  - Black (code formatting)
  - isort (import sorting)
  - Flake8 (style guide)
  - Pylint (code analysis)
  - Bandit (security)
  - MyPy (type checking)
  - Safety (dependency vulnerabilities)

- 🌐 **JavaScript/TypeScript Linting:**
  - ESLint (code quality)
  - Prettier (formatting)
  - TypeScript compiler check
  - Dependency security audit

- 🐳 **Dockerfile Linting:**
  - Hadolint for both frontend and backend

- 📄 **Config File Linting:**
  - YAML validation
  - Markdown linting
  - Link checking

### 3. **Auto Format & Fix** (`auto-format.yml`)
**Triggers:** Push to `develop`/`feature/*`, Manual dispatch
- 🎨 Automatic code formatting
- 🔧 Auto-fix linting issues
- 📝 Commit changes back to repository
- 💬 PR comments with formatting results

### 4. **Pre-commit Hooks** (`pre-commit.yml`)
**Triggers:** Push/PR to `main`/`develop`, Manual dispatch
- ✅ Pre-commit hook validation
- 📝 Commit message format checking
- 🔍 Secret detection
- 🛡️ Dependency security checks
- ⚖️ License compliance verification

### 5. **Quality Metrics** (`quality-metrics.yml`)
**Triggers:** Push/PR to `main`/`develop`, Weekly schedule, Manual dispatch
- 📊 Code complexity analysis
- ⚡ Performance testing
- 📦 Bundle size analysis
- 🔒 Advanced security scanning
- 🎯 Quality gate validation

## 🏷️ Workflow Status Badges

Add these badges to your README.md to display workflow status:

```markdown
![CI/CD](https://github.com/clonefutura10/oll-sales-crm/workflows/CI%2FCD%20Pipeline/badge.svg)
![Code Quality](https://github.com/clonefutura10/oll-sales-crm/workflows/Code%20Quality%20-%20Linting/badge.svg)
![Auto Format](https://github.com/clonefutura10/oll-sales-crm/workflows/Auto%20Format%20%26%20Fix/badge.svg)
![Pre-commit](https://github.com/clonefutura10/oll-sales-crm/workflows/Pre-commit%20Hooks/badge.svg)
![Quality Metrics](https://github.com/clonefutura10/oll-sales-crm/workflows/Performance%20%26%20Quality%20Metrics/badge.svg)
```

## 🚦 Quality Gates

### Code Quality Thresholds
- **Python Coverage:** ≥ 80%
- **Frontend Coverage:** ≥ 80%
- **Security Score:** No high/critical vulnerabilities
- **Performance:** Lighthouse score ≥ 90
- **Bundle Size:** < 1MB compressed

### Quality Score Calculation
- **80-100%:** ✅ Quality Gate Passed
- **60-79%:** ⚠️ Quality Gate Warning
- **0-59%:** ❌ Quality Gate Failed

## 🔧 Configuration Files

### Python Configuration
- `.flake8` - Flake8 linting rules
- `setup.cfg` - Python tool configuration
- `pyproject.toml` - Modern Python configuration

### JavaScript/TypeScript Configuration
- `.eslintrc.js` - ESLint rules and plugins
- `.prettierrc.json` - Prettier formatting rules
- `tsconfig.json` - TypeScript compiler options

### Git Configuration
- `.pre-commit-config.yaml` - Pre-commit hooks
- `.commitlintrc.json` - Commit message standards
- `.gitignore` - Files to ignore

## 🎯 Best Practices

### Commit Messages
Follow [Conventional Commits](https://www.conventionalcommits.org/):
```
feat(api): add user authentication endpoint
fix(ui): resolve login form validation
docs: update API documentation
style: format code with prettier
refactor: simplify user service logic
test: add unit tests for auth service
chore: update dependencies
```

### Branch Strategy
- `main` - Production-ready code
- `develop` - Integration branch
- `feature/*` - Feature development
- `hotfix/*` - Critical fixes

### Code Quality
1. **Before Committing:**
   - Run `npm run lint:fix` (frontend)
   - Run `black .` and `isort .` (backend)
   - Ensure tests pass
   - Check for security issues

2. **Pull Request Requirements:**
   - All quality checks must pass
   - Code coverage ≥ 80%
   - No security vulnerabilities
   - Peer review approved

## 🔍 Monitoring & Alerts

### Notifications
- **Slack Integration:** #deployments channel
- **Email Alerts:** For production deployments
- **PR Comments:** Quality reports and results

### Artifacts
Each workflow generates artifacts:
- Test reports
- Coverage reports
- Security scan results
- Performance metrics
- Quality gate reports

## 🚀 Usage Examples

### Manual Workflow Triggers
```bash
# Trigger auto-formatting
gh workflow run auto-format.yml

# Run quality metrics
gh workflow run quality-metrics.yml

# Run specific workflow on branch
gh workflow run code-quality.yml --ref feature/my-feature
```

### Local Development
```bash
# Install pre-commit hooks
pre-commit install

# Run hooks manually
pre-commit run --all-files

# Format code locally
npm run format        # Frontend
black . && isort .    # Backend
```

## 📈 Continuous Improvement

The workflows are designed to:
- ✅ Catch issues early in development
- 🔄 Provide fast feedback loops
- 📊 Maintain code quality metrics
- 🛡️ Ensure security compliance
- 🚀 Enable confident deployments

Regular updates and improvements to workflows help maintain a high-quality codebase and smooth development experience.
