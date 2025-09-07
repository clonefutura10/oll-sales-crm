#!/bin/bash

# OLL CRM Development Setup Script
# This script sets up the complete development environment

set -e  # Exit on any error

echo "🚀 Setting up OLL CRM Development Environment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if required tools are installed
check_dependencies() {
    print_status "Checking dependencies..."
    
    # Check Docker
    if ! command -v docker &> /dev/null; then
        print_error "Docker is not installed. Please install Docker first."
        exit 1
    fi
    
    # Check Docker Compose
    if ! command -v docker-compose &> /dev/null; then
        print_error "Docker Compose is not installed. Please install Docker Compose first."
        exit 1
    fi
    
    # Check Node.js
    if ! command -v node &> /dev/null; then
        print_warning "Node.js is not installed. You'll need it for local development."
    fi
    
    # Check Python
    if ! command -v python3 &> /dev/null; then
        print_warning "Python 3 is not installed. You'll need it for local development."
    fi
    
    print_status "Dependencies check completed."
}

# Setup environment files
setup_env_files() {
    print_status "Setting up environment files..."
    
    # Backend environment
    if [ ! -f "backend/.env" ]; then
        cp backend/.env.example backend/.env
        print_status "Created backend/.env from example"
    else
        print_warning "backend/.env already exists, skipping..."
    fi
    
    # Frontend environment
    if [ ! -f "frontend/.env.local" ]; then
        cp frontend/.env.local.example frontend/.env.local
        print_status "Created frontend/.env.local from example"
    else
        print_warning "frontend/.env.local already exists, skipping..."
    fi
}

# Setup Git hooks
setup_git_hooks() {
    print_status "Setting up Git hooks..."
    
    if command -v pre-commit &> /dev/null; then
        pre-commit install
        print_status "Pre-commit hooks installed"
    else
        print_warning "pre-commit is not installed. Run 'pip install pre-commit' to enable Git hooks."
    fi
}

# Build and start services
start_services() {
    print_status "Building and starting services with Docker Compose..."
    
    # Pull latest images
    docker-compose pull
    
    # Build services
    docker-compose build
    
    # Start services
    docker-compose up -d
    
    print_status "Waiting for services to be ready..."
    sleep 30
    
    # Check if services are running
    if docker-compose ps | grep -q "Up"; then
        print_status "Services are running!"
    else
        print_error "Some services failed to start. Check logs with 'docker-compose logs'"
        exit 1
    fi
}

# Run initial migrations
setup_database() {
    print_status "Setting up database..."
    
    # Wait for database to be ready
    print_status "Waiting for database to be ready..."
    sleep 10
    
    # Run migrations
    docker-compose exec backend python manage.py migrate
    
    # Create superuser (optional)
    print_status "Creating superuser..."
    echo "Please create a superuser account for Django admin:"
    docker-compose exec backend python manage.py createsuperuser
}

# Install development dependencies
install_dev_dependencies() {
    print_status "Installing development dependencies..."
    
    # Python development dependencies
    if [ -f "backend/requirements-dev.txt" ]; then
        docker-compose exec backend pip install -r requirements-dev.txt
    fi
    
    # Node.js development dependencies (if running locally)
    if command -v npm &> /dev/null; then
        cd frontend && npm install && cd ..
        print_status "Frontend dependencies installed"
    fi
}

# Show service URLs
show_urls() {
    echo ""
    print_status "🎉 Setup completed! Your services are available at:"
    echo "📱 Frontend: http://localhost:3000"
    echo "🔧 Backend API: http://localhost:8000"
    echo "👤 Django Admin: http://localhost:8000/admin"
    echo "📊 API Documentation: http://localhost:8000/swagger/"
    echo ""
    print_status "Useful commands:"
    echo "  docker-compose logs        # View all logs"
    echo "  docker-compose logs backend # View backend logs"
    echo "  docker-compose logs frontend # View frontend logs"
    echo "  docker-compose down        # Stop all services"
    echo "  docker-compose restart     # Restart all services"
    echo ""
}

# Main execution
main() {
    echo "🏗️  OLL CRM Development Environment Setup"
    echo "========================================"
    
    check_dependencies
    setup_env_files
    setup_git_hooks
    start_services
    setup_database
    install_dev_dependencies
    show_urls
    
    print_status "Development environment is ready! 🚀"
}

# Handle script arguments
case "${1:-}" in
    "check")
        check_dependencies
        ;;
    "env")
        setup_env_files
        ;;
    "build")
        docker-compose build
        ;;
    "start")
        docker-compose up -d
        ;;
    "stop")
        docker-compose down
        ;;
    "restart")
        docker-compose restart
        ;;
    "logs")
        docker-compose logs -f
        ;;
    "clean")
        print_warning "This will remove all containers and volumes. Are you sure? (y/N)"
        read -r response
        if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
            docker-compose down -v
            docker system prune -f
            print_status "Cleanup completed"
        fi
        ;;
    "help"|"-h"|"--help")
        echo "Usage: $0 [command]"
        echo ""
        echo "Commands:"
        echo "  (no command)  Run full setup"
        echo "  check         Check dependencies"
        echo "  env           Setup environment files"
        echo "  build         Build Docker images"
        echo "  start         Start services"
        echo "  stop          Stop services"
        echo "  restart       Restart services"
        echo "  logs          Show logs"
        echo "  clean         Clean up containers and volumes"
        echo "  help          Show this help"
        ;;
    "")
        main
        ;;
    *)
        print_error "Unknown command: $1"
        echo "Use '$0 help' to see available commands"
        exit 1
        ;;
esac
