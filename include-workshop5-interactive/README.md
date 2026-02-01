# Workshop 5 — API Practice Portal (Beginner-Friendly)

Welcome!  
This workshop teaches how the frontend communicates with APIs using fetch, async/await, error handling, and query parameters. You will complete guided practice exercises and compare with the provided solutions.

## Getting Started

### 1. Install packages
```bash
npm install
```

### 2. Start the development server
```bash
npm run dev
```

### Then open:
```
http://localhost:3000
```

---

## Why We Use a Dummy Backend

For teaching purposes, this workshop simulates backend behavior using local JSON objects.  
There is no real database or server. We do this because:

- You learn the frontend API workflow without needing a full backend  
- You focus on fetch, async/await, and state handling  
- Setup is simple  
- Every student’s environment works the same way  

This is not a replacement for a real backend. It is a controlled environment to learn the fundamentals safely.

---

## What a Real Backend Would Look Like

If this project used a real backend, it would include:

- Backend server (Node.js, Express, Fastify, Bun, etc.)  
- Database (PostgreSQL, MongoDB, SQLite, etc.)  
- API routes like GET /users, POST /recipes  
- Authentication  
- Persistent storage  
- Folder structure like `/backend` and `/frontend`  

---

## Project Structure

src/app/page.jsx  
src/app/page.module.scss  
src/app/layout.jsx  
src/app/globals.scss  
src/app/practice/...  
src/app/solutions/...  

---

## What You Will Practice

- Making GET requests  
- Handling errors  
- Using async/await  
- Rendering API results  
- Search inputs & query parameters  
- Updating UI  
- Comparing with final solutions  

---

## Running the Project

Install dependencies with `npm install`  
Run the server with `npm run dev`  
Open `localhost:3000`  
Use A Different Browser if Safari causes layout issues  
