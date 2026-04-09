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

This is a modern microservices application with a distributed architecture:

```
payrollpilot/
├── services/              # Microservices backend
│   ├── api-gateway/       # API Gateway service
│   ├── payroll-api/       # Core payroll management API
│   ├── approval/          # Approval workflow service
│   ├── calculation/       # Payroll calculation engine
│   └── payment/           # Payment processing service
├── frontend/              # React TypeScript SPA
│   ├── src/              # React components and logic
│   └── public/           # Static assets
├── shared/               # Common models and utilities
└── gradle/               # Gradle wrapper and dependencies
```

## 🛠️ Technology Stack

### Backend (Microservices)
- **Framework**: Spring Boot 3.2.4 with Spring Cloud 2023.0.1
- **Language**: Java 21
- **Architecture**: Microservices with API Gateway
- **Security**: Spring Security
- **Database**: PostgreSQL (production), H2 (development/testing)
- **ORM**: Spring Data JPA with Hibernate
- **Validation**: Bean Validation (JSR-380)
- **Monitoring**: Spring Boot Actuator with Prometheus metrics
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
- **Build System**: Gradle 8+ with multi-module setup
- **Database**: PostgreSQL 15+
- **Service Discovery**: Spring Cloud Gateway
- **Monitoring**: Prometheus metrics via Actuator
- **Deployment**: Docker-ready microservices configuration
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
   # Build all modules (currently builds successfully with empty services)
   gradle build
   
   # Note: Individual services are not yet implemented
   # The following commands will be available once service implementations are added:
   # ./gradlew :services:api-gateway:bootRun
   # ./gradlew :services:payroll-api:bootRun
   # ./gradlew :services:approval:bootRun
   # ./gradlew :services:calculation:bootRun
   # ./gradlew :services:payment:bootRun
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

### Current Development Status

**What's Working:**
- ✅ Multi-module Gradle build system
- ✅ React TypeScript frontend with Vite
- ✅ Spring Boot service module structure
- ✅ Gradle build completes successfully

**What's Next:**
- Implement Spring Boot application classes for each service
- Add database configuration and entities
- Implement REST APIs and business logic
- Connect frontend to backend services

### Production Setup (Future Implementation)

*Note: Production setup will be documented once service implementations are complete*

## 🔧 Development Commands

### Backend Operations
```bash
# Clean build all modules (current working command)
gradle clean build

# Run tests for all modules
gradle test

# Check for dependency vulnerabilities
gradle dependencyCheckAnalyze

# Note: The following commands will be available once service implementations are added:
# ./gradlew :services:api-gateway:bootRun --debug-jvm
# ./gradlew :services:payroll-api:flywayMigrate
# etc.
```

### Frontend Operations
```bash
cd frontend

# Development server with hot reload
npm run dev

# Production build (includes TypeScript compilation)
npm run build  # Runs tsc + vite build

# Type checking only
npm run tsc

# Linting (if configured)
npm run lint

# Testing (if configured)  
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
- **Development Stage**: Project Structure Setup Complete
- **Build Status**: ✅ Building Successfully
- **Frontend**: ✅ React TypeScript app with Vite build system
- **Backend**: ✅ Multi-module Gradle setup with Spring Boot microservices structure
- **Services**: ⚠️ Service implementations pending (structure ready)
- **Java Version**: 21 (LTS)
- **Spring Boot**: 3.2.4
- **Database**: PostgreSQL 15+ (not yet integrated)

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
