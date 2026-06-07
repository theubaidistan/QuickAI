<p align="center">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTOAeLxf3YHRfnQG3SQd3IWu66u5nndl2Pbw&s" alt="Quick.AI Banner" width="700" />
</p>

<h1 align="center">⚡ Quick.AI</h1>

<p align="center">
  A full-stack AI-powered platform for text generation and image creation — built on the PERN stack with Clerk auth, Gemini, and OpenAI.
</p>

<p align="center">
  <a href="https://quick-ai-jet.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Live%20Demo-Quick.AI-black?style=for-the-badge&logo=vercel" alt="Live Demo" />
  </a>
  <a href="https://quick-ai-server-mocha-zeta.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Backend%20Server-Listening-22c55e?style=for-the-badge&logo=server" alt="Backend Server" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/NeonDB-00E599?style=for-the-badge&logo=neon&logoColor=black" alt="NeonDB" />
  <img src="https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white" alt="Clerk" />
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Google%20Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white" alt="Gemini" />
  <img src="https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white" alt="OpenAI" />
</p>

---

## 📖 About

**Quick.AI** is a full-stack SaaS platform that lets users generate AI text responses using **Google Gemini** and create AI-generated images via **OpenAI**. It features secure authentication and billing management through **Clerk**, a serverless **NeonDB** PostgreSQL database, and a RESTful Express backend — all powered by a modern PERN stack.

---

## ✨ Features

- 🤖 **AI Text Generation** — Prompt-based text responses powered by Google Gemini
- 🎨 **AI Image Generation** — Create images from text prompts using OpenAI DALL·E
- 🔐 **Authentication** — Secure sign-up/sign-in via Clerk
- 💳 **Billing & Credits** — Subscription and credit management with Clerk Billing
- 🛡️ **Middleware** — Protected API routes with Clerk JWT verification middleware
- ☁️ **Serverless Database** — NeonDB (PostgreSQL) for user and usage data
- ⚡ **Blazing Fast Frontend** — Built with React + Vite and styled with Tailwind CSS
- 📡 **Axios** — HTTP client for seamless frontend-backend communication

---

## 🛠️ Tech Stack

| Layer              | Technology                     |
| ------------------ | ------------------------------ |
| **Frontend**       | React, Vite, Tailwind CSS      |
| **Backend**        | Node.js, Express.js            |
| **Database**       | PostgreSQL via NeonDB          |
| **Auth & Billing** | Clerk                          |
| **AI — Text**      | Google Gemini API              |
| **AI — Images**    | OpenAI (DALL·E)                |
| **HTTP Client**    | Axios                          |
| **Middleware**     | Clerk JWT / Express Middleware |
| **Deployment**     | Vercel (Frontend + Backend)    |

---

## 🗂️ Project Structure

```
quick-ai/
├── client/                  # React + Vite frontend
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # App pages (Home, Generate, etc.)
│   │   ├── lib/             # Axios instance & API helpers
│   │   └── main.jsx
│   ├── index.html
│   └── vite.config.js
│
└── server/                  # Express.js backend
    ├── controllers/         # Route controllers
    ├── middleware/          # Clerk auth middleware
    ├── routes/              # API route definitions
    ├── db/                  # NeonDB connection & queries
    └── index.js
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- A [Clerk](https://clerk.com/) account (Auth + Billing)
- A [NeonDB](https://neon.tech/) PostgreSQL database
- Google Gemini API key
- OpenAI API key

### 1. Clone the Repository

```bash
git clone https://github.com/theubaidistan/quick-ai.git
cd quick-ai
```

### 2. Setup the Server

```bash
cd server
npm install
```

Create a `.env` file in `/server`:

```env
DATABASE_URL=your_neondb_connection_string
CLERK_SECRET_KEY=your_clerk_secret_key
GEMINI_API_KEY=your_gemini_api_key
OPENAI_API_KEY=your_openai_api_key
PORT=5000
```

```bash
npm run dev
```

### 3. Setup the Client

```bash
cd client
npm install
```

Create a `.env` file in `/client`:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_BASE_URL=http://localhost:5000
```

```bash
npm run dev
```

---

## 🌐 Live Links

| Resource          | URL                                                                                     |
| ----------------- | --------------------------------------------------------------------------------------- |
| 🖥️ Frontend       | [quick-ai-jet.vercel.app](https://quick-ai-jet.vercel.app/)                             |
| ⚙️ Backend Server | [quick-ai-server-mocha-zeta.vercel.app](https://quick-ai-server-mocha-zeta.vercel.app/) |

---

## 📚 Course

> Built while following **Jonas Schmedtmann's** full-stack web development curriculum on [Udemy](https://www.udemy.com/).

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
