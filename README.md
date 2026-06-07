<p align="center">
  <img src="./server/public/project.jpg" alt="Quick.AI Banner" width="720" />
</p>

<h1 align="center">Quick.AI</h1>

<p align="center">
  A full-stack AI-powered SaaS platform for text generation and image creation — built on the PERN stack with Clerk authentication, Gemini, and OpenAI.
</p>

<p align="center">
  <a href="https://quick-ai-jet.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Live%20Demo-Quick.AI-black?style=for-the-badge&logo=vercel" alt="Live Demo" />
  </a>
  <a href="https://quick-ai-server-mocha-zeta.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Backend%20Server-Listening-22c55e?style=for-the-badge&logo=node.js&logoColor=white" alt="Backend Server" />
  </a>
</p>

---

## 🛠 Tech Stack

### Frontend

<p>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios" />
</p>

### Backend

<p>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/Middleware-FF6C37?style=for-the-badge&logo=express&logoColor=white" alt="Middleware" />
</p>

### Database

<p>
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/NeonDB-00E5BF?style=for-the-badge&logo=neon&logoColor=black" alt="NeonDB" />
</p>

### Auth & Billing

<p>
  <img src="https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white" alt="Clerk Auth & Billing" />
</p>

### AI / APIs

<p>
  <img src="https://img.shields.io/badge/Google%20Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white" alt="Gemini" />
  <img src="https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white" alt="OpenAI" />
</p>

---

## ✨ Features

- 🤖 **AI Text Generation** — Powered by Google Gemini for fast, accurate text prompts
- 🎨 **AI Image Generation** — Powered by OpenAI's image generation API
- 🔐 **Authentication & Billing** — Clerk handles sign-up, sign-in, and subscription billing
- 🗄️ **PostgreSQL on NeonDB** — Serverless, scalable database for user and usage data
- ⚡ **Vite + React** — Lightning-fast frontend with hot module replacement
- 💨 **Tailwind CSS** — Utility-first styling for a clean, responsive UI
- 🔄 **Axios** — HTTP client for clean API communication between frontend and backend
- 🛡️ **Express Middleware** — Auth guards, error handling, and request validation on the backend

---

## 📁 Project Structure

```
quick-ai/
├── client/                   # Vite + React frontend
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/            # Route-level pages
│   │   ├── lib/              # Axios instance & helpers
│   │   └── main.jsx
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── server/                   # Express backend
│   ├── controllers/          # Route handler logic
│   ├── middleware/           # Auth, error, validation middleware
│   ├── routes/               # API route definitions
│   ├── db/                   # NeonDB / PostgreSQL connection
│   └── index.js
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- A [NeonDB](https://neon.tech/) account and database URL
- A [Clerk](https://clerk.com/) account (API keys for auth + billing)
- Google Gemini API key
- OpenAI API key

### 1. Clone the repo

```bash
git clone https://github.com/theubaidistan/quick-ai.git
cd quick-ai
```

### 2. Configure environment variables

**`server/.env`**

```env
DATABASE_URL=your_neondb_connection_string
CLERK_SECRET_KEY=your_clerk_secret_key
GEMINI_API_KEY=your_gemini_api_key
OPENAI_API_KEY=your_openai_api_key
PORT=5000
```

**`client/.env`**

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_BASE_URL=http://localhost:5000
```

### 3. Install dependencies & run

```bash
# Backend
cd server
npm install
npm run dev

# Frontend (in a new terminal)
cd client
npm install
npm run dev
```

---

## 🌐 Deployment

| Service  | Platform                                                 |
| -------- | -------------------------------------------------------- |
| Frontend | [Vercel](https://quick-ai-jet.vercel.app/)               |
| Backend  | [Vercel](https://quick-ai-server-mocha-zeta.vercel.app/) |
| Database | [NeonDB](https://neon.tech/) (Serverless PostgreSQL)     |

---

## 📚 Course Credit

Built as part of a full-stack JavaScript learning journey following **Jonas Schmedtmann's** courses on [Udemy](https://www.udemy.com/course/the-ultimate-react-course/?couponCode=KEEPLEARNING).

---

## 👨‍💻 Author

**Ubaidistan**

- GitHub: [@theubaidistan](https://github.com/theubaidistan)
- Live: [quick-ai-jet.vercel.app](https://quick-ai-jet.vercel.app/)
