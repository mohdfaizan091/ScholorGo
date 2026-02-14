**ScholorGo**

Production-ready full-stack web platform built to convert an investor pitch deck into a live system within 7 days.

ScholorGo enables students to submit structured inquiries for government scholarship assistance. The platform acts as a lead acquisition system for the ScholorGo team, who further process applications and manage conversions through commission/equity partnerships.

Live: https://www.scholorgo.com/

**Project Context**

This project was developed under a startup pitch timeline.
The objective was to transform a PPT-based concept into a live, investor-facing web platform.

**Key focus areas:**

- Clean and trust-building UI
- Structured inquiry funnel
- Secure backend integration
- Production deployment stability.

**Tech Stack**
**Frontend**
- React.js
- Tailwind CSS
- SPA Architecture

**Backend**
- Node.js
- Express.js

**Database**
- MongoDB

**Authentication**
- JWT-based authentication with session persistence

**Deployment**
- Vercel (Production Hosting)
- Custom domain with SSL (GoDaddy)

**System Architecture**
-   Client (React SPA)
    ↓
    REST APIs (Express Backend)
    ↓
    MongoDB (Lead Storage)

*Authentication Flow:*

- User login
- JWT token issued
- Token stored for session persistence
- Protected routes validated via middleware

**Key Features**

- Structured student inquiry submission
- Lead data storage and API handling
- JWT-based authentication
- Production CORS handling
- SPA routing configuration
- SSL-enabled secure deployment
- Environment variable-based configuration

**Production Challenges Solved**
*This project involved real-world debugging beyond development:*

- CORS misconfiguration between frontend and backend
- Proxy mismatch between development and production environments
- SPA refresh 404 routing issue in deployment
- Environment variable configuration errors
- SSL and custom domain setup

**Installation (For Development)**
- *Clone the repository:*
-     - git clone https://github.com/mohdfaizan091/ScholoGgo.git

**Install dependencies:**
cd frontend
npm install

cd ../backend
npm install

*Create .env file inside backend:*

PORT=3000
MONGO_URI=your_mongodb_connection
JWT_SECRET=JWY_KEY

**Run backend:**
- npm start
**Run frontend:**
- npm start

**Future Improvements (Planned)**

- Admin dashboard for lead management
- Email automation integration
- Role-based authentication
- Rate limiting middleware
- Analytics dashboard
- Refresh token rotation system

***Author***
*Mohd Faizan*
*Full-Stack Developer*
- Built and deployed as a contract engineer for ScholorGo under startup pitch timeline.