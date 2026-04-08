# 💼 Payroll Pilot

A comprehensive payroll management application designed to streamline payroll processing, employee management, and compliance reporting. Built with enterprise-grade technologies and modern web standards.

## 🎯 Features

- **Employee Management**: Complete employee lifecycle management
- **Payroll Processing**: Automated payroll calculations and processing
- **Time Tracking**: Employee time and attendance management  
- **Benefits Administration**: Health insurance, retirement plans, and other benefits
- **Tax Compliance**: Automated tax calculations and regulatory compliance
- **Reporting & Analytics**: Comprehensive payroll reports and insights
- **Multi-tenant Support**: Support for multiple organizations
- **Role-based Access Control**: Secure access management

## 🏗️ Architecture

This is a modern multi-module application following microservices principles:

```
payrollpilot/
├── backend/          # Spring Boot REST API
│   ├── src/main/     # Application source
│   └── src/test/     # Unit and integration tests
├── frontend/         # React TypeScript SPA
│   ├── src/          # React components and logic
│   └── public/       # Static assets
├── shared/           # Common models and utilities
└── gradle/           # Gradle wrapper and dependencies
```

## 🛠️ Technology Stack

### Backend
- **Framework**: Spring Boot 3.2.4
- **Language**: Java 21
- **Security**: Spring Security
- **Database**: PostgreSQL (production), H2 (development/testing)
- **ORM**: Spring Data JPA with Hibernate
- **Validation**: Bean Validation (JSR-380)
- **Documentation**: Jackson for JSON processing
- **Testing**: JUnit 5, Mockito, TestContainers

### Frontend  
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Routing**: React Router v6
- **Styling**: Modern CSS with component-based architecture
- **Testing**: Vitest
- **Code Quality**: ESLint, TypeScript strict mode

### Infrastructure
- **Build System**: Gradle 8+ with Kotlin DSL
- **Database**: PostgreSQL 15+
- **Deployment**: Docker-ready configuration
- **Version Management**: Gradle version catalogs

## 🚀 Quick Start

### Prerequisites
- **Java 21+** (OpenJDK or Oracle JDK)
- **Node.js 18+** and npm/yarn (for frontend development)
- **PostgreSQL 15+** (for production database)
- **Docker** (optional, for containerized deployment)

### Development Setup

1. **Clone and Setup**
   ```bash
   git clone <repository-url>
   cd payrollpilot
   
   # Make gradlew executable (Unix/macOS)
   chmod +x gradlew
   ```

2. **Backend Development**
   ```bash
   # Build all modules
   ./gradlew build
   
   # Run backend with development profile (uses H2 database)
   ./gradlew :backend:bootRun
   
   # Backend will be available at http://localhost:8080
   ```

3. **Frontend Development**
   ```bash
   # Navigate to frontend directory
   cd frontend
   
   # Install dependencies
   npm install
   
   # Start development server
   npm run dev
   
   # Frontend will be available at http://localhost:5173
   ```

### Production Setup

1. **Database Setup**
   ```sql
   -- Create database
   CREATE DATABASE payrollpilot;
   CREATE USER payrollpilot_user WITH PASSWORD 'secure_password';
   GRANT ALL PRIVILEGES ON DATABASE payrollpilot TO payrollpilot_user;
   ```

2. **Environment Configuration**
   ```bash
   # Create .env file in root directory
   DATABASE_URL=jdbc:postgresql://localhost:5432/payrollpilot
   DATABASE_USERNAME=payrollpilot_user
   DATABASE_PASSWORD=secure_password
   ```

3. **Build and Deploy**
   ```bash
   # Build production artifacts
   ./gradlew build
   
   # Run with production profile
   ./gradlew :backend:bootRun --args='--spring.profiles.active=production'
   ```

## 🔧 Development Commands

### Backend Operations
```bash
# Clean build
./gradlew clean build

# Run tests with coverage
./gradlew test jacocoTestReport

# Run backend in debug mode
./gradlew :backend:bootRun --debug-jvm

# Database migrations
./gradlew :backend:flywayMigrate
```

### Frontend Operations
```bash
cd frontend

# Development server with hot reload
npm run dev

# Type checking
npm run build  # Runs tsc + vite build

# Linting
npm run lint

# Testing
npm run test
npm run test:coverage
```

### Project-wide Operations
```bash
# Format code (if configured)
./gradlew spotlessApply

# Security vulnerability check
./gradlew dependencyCheckAnalyze

# Generate project reports
./gradlew build dependencyInsight
```

## 🧪 Testing Strategy

- **Unit Tests**: JUnit 5 for Java, Vitest for TypeScript
- **Integration Tests**: Spring Boot Test with TestContainers
- **API Tests**: REST Assured for API endpoint testing
- **Frontend Tests**: React Testing Library for component tests
- **E2E Tests**: Playwright or Cypress for full application flows

## 📊 Project Status

- **Version**: 1.0.0-SNAPSHOT
- **Development Stage**: Initial Setup Complete
- **Java Version**: 21 (LTS)
- **Spring Boot**: 3.2.4
- **Database**: PostgreSQL 15+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Resources

- [Spring Boot Documentation](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/)
- [React Documentation](https://react.dev/)
- [Gradle User Manual](https://docs.gradle.org/current/userguide/userguide.html)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
