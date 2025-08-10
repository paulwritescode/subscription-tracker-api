<div align="center">
  <br />
  <div>
    <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white" alt="node.js" />
    <img src="https://img.shields.io/badge/express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="express.js" />
    <img src="https://img.shields.io/badge/-MongoDB-13aa52?style=for-the-badge&logo=mongodb&logoColor=white" alt="mongodb" />
    <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" alt="jwt" />
    <img src="https://img.shields.io/badge/Arcjet-FF6B6B?style=for-the-badge&logo=shield&logoColor=white" alt="arcjet" />
    <img src="https://img.shields.io/badge/Upstash-00D9FF?style=for-the-badge&logo=upstash&logoColor=white" alt="upstash" />
  </div>

  <h3 align="center">Subscription Tracker API (SubDub)</h3>

   <div align="center">
     A powerful, production-ready RESTful API for tracking and managing personal subscriptions with advanced security, automated workflows, and intelligent email reminders.
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🛠️ [System Architecture](#architecture)
5. 🌐 [API Routes](#api-routes)
6. 🤸 [Quick Start](#quick-start)
7. 🕸️ [Code Snippets](#snippets)
8. 🔗 [Links](#links)
9. 🚀 [More](#more)

## <a name="introduction">🤖 Introduction</a>

Build a **production-ready Subscription Management API** that handles **real users, real subscriptions, and real business logic**.  

This comprehensive API provides secure user authentication using JWTs, robust database management with MongoDB, advanced rate limiting and bot protection with Arcjet, and automated email workflows using Upstash. The architecture ensures scalability and seamless communication with any frontend application.

Perfect for developers looking to build a complete subscription tracking system or integrate subscription management into existing applications.

## <a name="tech-stack">⚙️ Tech Stack</a>

**Backend Framework & Runtime**
- Node.js (ES Modules)
- Express.js 4.21.2

**Database & ODM**
- MongoDB 6.18.0
- Mongoose ODM 8.17.1

**Authentication & Security**
- JSON Web Tokens (jsonwebtoken 9.0.2)
- bcryptjs 3.0.2 for password hashing
- Arcjet 1.0.0-beta.10 for advanced security & bot protection

**Email & Workflow Automation**
- Upstash Workflow 0.2.17 for automated email reminders
- Nodemailer 7.0.5 for email functionality
- DayJS 1.11.13 for date/time management

**Development & Monitoring**
- Morgan 1.10.1 for HTTP request logging
- ESLint 9.32.0 with modern ES2022 support
- Nodemon 3.1.10 for development

**Additional Tools**
- Cookie Parser 1.4.4
- dotenv 17.2.1 for environment management

## <a name="features">🔋 Features</a>

👉 **Advanced Security & Bot Protection**: Arcjet integration provides comprehensive protection against bots, DDoS attacks, and malicious requests with intelligent rate limiting.

👉 **JWT Authentication System**: Secure user registration, login, and logout with token-based authentication and cookie management.

👉 **Comprehensive Subscription Management**: Full CRUD operations for subscriptions with user-specific data, renewal tracking, and cancellation support.

👉 **Automated Email Workflows**: Smart email reminder system using Upstash Workflows that automatically sends subscription renewal notifications.

👉 **User Profile Management**: Complete user account management with secure data handling and profile operations.

👉 **Database Modeling**: Robust MongoDB schemas and relationships using Mongoose ODM with proper validation and indexing.

👉 **Global Error Handling**: Centralized error management with custom middleware for consistent API responses.

👉 **Request Logging & Monitoring**: Comprehensive logging system using Morgan for better debugging and API monitoring.

👉 **Environment-based Configuration**: Secure environment variable management for different deployment stages.

👉 **Modern ES6+ Architecture**: Built with ES modules, async/await, and modern JavaScript best practices.

and many more, including scalable code architecture and high reusability

## <a name="architecture">🛠️ System Architecture</a>

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Client Apps   │    │   Arcjet Shield  │    │   Email Service │
│                 │    │                  │    │                 │
│ • Web Frontend  │    │ • Rate Limiting  │    │ • Nodemailer    │
│ • Mobile Apps   │◄──►│ • Bot Protection │◄──►│ • SMTP Config   │
│ • Third Party   │    │ • DDoS Guard     │    │ • Templates     │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                        │                        │
         ▼                        ▼                        ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Express.js API Server                        │
│                                                                 │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌────────────┐│
│  │    Auth     │ │Subscription │ │    User     │ │ Workflow   ││
│  │   Routes    │ │   Routes    │ │   Routes    │ │   Routes   ││
│  └─────────────┘ └─────────────┘ └─────────────┘ └────────────┘│
│                                                                 │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌────────────┐│
│  │    Auth     │ │Subscription │ │    User     │ │ Workflow   ││
│  │Controllers  │ │Controllers  │ │Controllers  │ │Controllers ││
│  └─────────────┘ └─────────────┘ └─────────────┘ └────────────┘│
│                                                                 │
│         ┌──────────────────────────────────────────┐           │
│         │              Middleware Stack            │           │
│         │ • JWT Authorization                      │           │
│         │ • Arcjet Security                        │           │
│         │ • Error Handling                         │           │
│         │ • Request Logging                        │           │
│         └──────────────────────────────────────────┘           │
└─────────────────────────────────────────────────────────────────┘
                                 │
                                 ▼
         ┌─────────────────────────────────────────────┐
         │              MongoDB Database                │
         │                                             │
         │  ┌─────────────┐ ┌─────────────────────────┐│
         │  │    Users    │ │      Subscriptions      ││
         │  │ Collection  │ │       Collection        ││
         │  └─────────────┘ └─────────────────────────┘│
         └─────────────────────────────────────────────┘
                                 │
                                 ▼
              ┌─────────────────────────────────┐
              │      Upstash Workflows          │
              │                                 │
              │ • Scheduled Email Reminders     │
              │ • Subscription Renewal Alerts   │
              │ • Automated Notifications       │
              └─────────────────────────────────┘
```

## <a name="api-routes">🌐 API Routes</a>

### Authentication Routes (`/api/v1/auth`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/signup` | Register a new user account | ❌ |
| `POST` | `/signin` | Login user and get JWT token | ❌ |
| `POST` | `/signout` | Logout user and clear tokens | ❌ |

### Subscription Routes (`/api/v1/subscriptions`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/` | Get all subscriptions | ❌ |
| `GET` | `/:id` | Get specific subscription details | ❌ |
| `POST` | `/` | Create a new subscription | ✅ |
| `PUT` | `/:id` | Update existing subscription | ❌ |
| `DELETE` | `/:id` | Delete a subscription | ❌ |
| `GET` | `/user/:id` | Get user's subscriptions | ✅ |
| `GET` | `/:id/cancel` | Cancel a subscription | ❌ |
| `GET` | `/upcoming-renewals` | Get upcoming renewal dates | ❌ |

### User Routes (`/api/v1/users`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/` | Get all users | ❌ |
| `GET` | `/:id` | Get specific user profile | ✅ |
| `POST` | `/` | Create a new user | ❌ |
| `PUT` | `/:id` | Update user information | ❌ |
| `DELETE` | `/:id` | Delete user account | ❌ |

### Workflow Routes (`/api/v1/workflows`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/subscription/reminder` | Send subscription reminders | ❌ |

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en) (v16 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [MongoDB](https://www.mongodb.com/) (Local installation or MongoDB Atlas)

**Cloning the Repository**

```bash
git clone https://github.com/your-username/subscription-tracker-api.git
cd subscription-tracker-api
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.development.local` in the root of your project and add the following content:

```env
# PORT CONFIGURATION
PORT=5500
SERVER_URL="http://localhost:5500"

# ENVIRONMENT
NODE_ENV=development

# DATABASE CONFIGURATION
DB_URI=mongodb://localhost:27017/subscription-tracker
# Or use MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/subscription-tracker

# JWT AUTHENTICATION
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRES_IN="7d"

# ARCJET SECURITY (Get your key from https://app.arcjet.com)
ARCJET_KEY=your-arcjet-key-here
ARCJET_ENV="development"

# UPSTASH WORKFLOW (Get from https://console.upstash.com)
QSTASH_URL=https://qstash.upstash.io
QSTASH_TOKEN=your-qstash-token-here

# EMAIL CONFIGURATION (For Gmail, use App Password)
EMAIL_PASSWORD=your-email-app-password-here
EMAIL_USER=your-email@gmail.com
```

**Running the Project**

For development with auto-reload:
```bash
npm run dev
```

For production:
```bash
npm start
```

Open [http://localhost:5500](http://localhost:5500) in your browser or use an HTTP client like Postman to test the API endpoints.

**Testing the API**

Test the welcome endpoint:
```bash
curl http://localhost:5500
```

You should see: `"Welcome to the subscription Tracker API!"`

## <a name="snippets">🕸️ Code Snippets</a>

<details>
<summary><code>Create Subscription Request</code></summary>

```bash
curl -X POST http://localhost:5500/api/v1/subscriptions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "name": "Netflix Premium",
    "price": 15.99,
    "currency": "USD",
    "frequency": "monthly",
    "category": "Entertainment",
    "startDate": "2025-01-01T00:00:00.000Z",
    "paymentMethod": "Credit Card",
    "description": "Streaming service subscription"
  }'
```

</details>

<details>
<summary><code>User Registration Request</code></summary>

```bash
curl -X POST http://localhost:5500/api/v1/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "securePassword123",
    "confirmPassword": "securePassword123"
  }'
```

</details>

<details>
<summary><code>Login Request</code></summary>

```bash
curl -X POST http://localhost:5500/api/v1/auth/signin \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john.doe@example.com",
    "password": "securePassword123"
  }'
```

</details>

<details>
<summary><code>Send Email Reminder</code></summary>

```bash
curl -X POST http://localhost:5500/api/v1/workflows/subscription/reminder \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "user123",
    "subscriptionId": "sub456",
    "reminderType": "renewal",
    "daysUntilRenewal": 3
  }'
```

</details>

<details>
<summary><code>Subscription Object Schema</code></summary>

```json
{
  "_id": "64a1b2c3d4e5f6789abcdef0",
  "name": "Spotify Premium",
  "price": 9.99,
  "currency": "USD",
  "frequency": "monthly",
  "category": "Music",
  "startDate": "2025-01-01T00:00:00.000Z",
  "nextPayment": "2025-02-01T00:00:00.000Z",
  "paymentMethod": "Credit Card",
  "status": "active",
  "userId": "64a1b2c3d4e5f6789abcdef1",
  "description": "Music streaming service",
  "createdAt": "2025-01-01T12:00:00.000Z",
  "updatedAt": "2025-01-01T12:00:00.000Z"
}
```

</details>

## <a name="links">🔗 Links</a>

- **Arcjet Security** - [https://arcjet.com](https://arcjet.com) - Advanced API security and bot protection
- **Upstash Workflows** - [https://upstash.com](https://upstash.com) - Serverless workflow automation  
- **MongoDB Atlas** - [https://www.mongodb.com/atlas](https://www.mongodb.com/atlas) - Cloud database service
- **Node.js** - [https://nodejs.org](https://nodejs.org) - JavaScript runtime
- **Express.js** - [https://expressjs.com](https://expressjs.com) - Web framework for Node.js

## <a name="more">🚀 More</a>

**Production Deployment Tips**

- Use environment-specific configuration files (`.env.production.local`)
- Set up proper MongoDB Atlas clusters for production
- Configure Arcjet with production keys and appropriate rate limits
- Set up Upstash workflows for production email delivery
- Use process managers like PM2 for production deployments
- Implement proper logging with services like Winston or Pino
- Set up monitoring with tools like New Relic or DataDog

**Development Best Practices**

- Follow RESTful API design principles
- Implement proper error handling and validation
- Use TypeScript for better type safety (future enhancement)
- Write comprehensive unit and integration tests
- Document API endpoints with tools like Swagger/OpenAPI
- Implement API versioning for backward compatibility
- Use database transactions for critical operations
- Set up automated CI/CD pipelines

**Security Considerations**

- Regularly update dependencies for security patches
- Implement input validation and sanitization
- Use HTTPS in production environments
- Configure proper CORS policies
- Implement request rate limiting per user/IP
- Use secure HTTP headers with libraries like helmet
- Regular security audits with tools like npm audit
- Implement proper logging for security events

---

<div align="center">
  <p>Built with ❤️ using modern Node.js, Express.js, and MongoDB</p>
  <p>Ready for production deployment and scalable architecture</p>
</div>