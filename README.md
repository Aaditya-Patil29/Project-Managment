# Project Management

A Node.js + Express backend implementing secure authentication, MongoDB integration, structured API responses, email workflows, and essential production-ready features.

## Features Implemented

### 1. Development Setup
- Added Prettier for consistent code formatting
- Added Git project structure and commit standards

### 2. Express Server
- Basic Express server setup
- Middleware configuration
- CORS handling
- Central async error handler

### 3. API Development and Testing
- Postman setup for API testing
- Standard ApiResponse and ApiError classes
- Healthcheck route and controller

### 4. Database
- MongoDB integration with Mongoose
- User schema with validation
- Password hashing using Mongoose pre-hooks
- Token fields and indexing

### 5. Authentication
- JWT access token and refresh token system
- Token generation using Node.js crypto module
- Login and logout using HTTP-only cookies
- Login validation and Postman testing

### 6. Email Services
- Dynamic email template generator
- Email sending using Nodemailer and SMTP

### 7. User Module
- Register user route with validation
- Login route with token and cookie handling
- Secure logout route
- Fully tested using Postman

### 8. Security Highlights
- Password hashing with bcrypt and Mongoose hooks
- Short-lived access tokens and long-lived refresh tokens
- Secure refresh token storage in cookies
- Strict CORS configuration
- Structured error handling

### 9. Email Workflow
- HTML email templates
- Node.js SMTP email service
- Used for user account notifications

### 10. Code Quality
- Prettier formatting
- Clean folder structure
- Reusable helper modules
