@echo off
REM OLL CRM Development Setup Script for Windows
REM This script sets up the complete development environment

echo Starting OLL CRM Development Environment Setup...

REM Check if Docker is installed
docker --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Docker is not installed. Please install Docker Desktop first.
    pause
    exit /b 1
)

REM Check if Docker Compose is installed
docker-compose --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Docker Compose is not installed. Please install Docker Compose first.
    pause
    exit /b 1
)

echo Dependencies check completed.

REM Setup environment files
echo Setting up environment files...

if not exist "backend\.env" (
    copy "backend\.env.example" "backend\.env"
    echo Created backend\.env from example
) else (
    echo backend\.env already exists, skipping...
)

if not exist "frontend\.env.local" (
    copy "frontend\.env.local.example" "frontend\.env.local"
    echo Created frontend\.env.local from example
) else (
    echo frontend\.env.local already exists, skipping...
)

REM Start services
echo Building and starting services with Docker Compose...

docker-compose pull
docker-compose build
docker-compose up -d

echo Waiting for services to be ready...
timeout /t 30 /nobreak >nul

REM Check if services are running
docker-compose ps | findstr "Up" >nul
if %errorlevel% equ 0 (
    echo Services are running!
) else (
    echo ERROR: Some services failed to start. Check logs with 'docker-compose logs'
    pause
    exit /b 1
)

REM Setup database
echo Setting up database...
timeout /t 10 /nobreak >nul

docker-compose exec backend python manage.py migrate

echo.
echo Setup completed! Your services are available at:
echo Frontend: http://localhost:3000
echo Backend API: http://localhost:8000
echo Django Admin: http://localhost:8000/admin
echo.
echo Useful commands:
echo docker-compose logs        # View all logs
echo docker-compose down        # Stop all services
echo docker-compose restart     # Restart all services
echo.
echo Development environment is ready!

pause
