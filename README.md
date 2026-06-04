# 🌌 NebulaCode — Collaborative Code Editor

A real-time collaborative code editor with AI assistance, built with React, Node.js, MongoDB, and WebSockets.

---

## ✨ Features

- 🖊️ **Real-time Collaborative Editing** — Multiple users can edit code simultaneously using Yjs CRDT sync
- 💬 **In-room Chat** — Built-in chat for collaborators inside each repository room
- 🤖 **AI Assistant** — Ask coding questions powered by Google Gemini via OpenRouter
- 🗂️ **File Management** — Create, edit, rename, and delete files inside a repository
- ▶️ **Code Execution** — Run Python, JavaScript, C++, and Java code directly in the browser
- 🔐 **Authentication** — Secure JWT-based login and signup
- 🔒 **Password-protected Rooms** — Each repo has a unique join code and room password
- 🌙 **Dark-themed Monaco Editor** — VS Code-like editing experience in the browser

---

## 🛠️ Tech Stack

### Frontend
- React 19
- Monaco Editor (VS Code editor in browser)
- Yjs + y-websocket (real-time sync)
- Socket.io Client
- React Markdown

### Backend
- Node.js + Express
- Socket.io (real-time communication)
- Yjs WebSocket Server (CRDT-based sync)
- MongoDB (via Atlas) — users, repos, files, chat
- JWT Authentication
- OpenRouter API (AI chat — Gemini 2.5 Flash)
- Judge0 API (code execution)

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- A [MongoDB Atlas](https://www.mongodb.com/atlas) account (free tier works)
- An [OpenRouter](https://openrouter.ai) API key (free tier works)

---

### 1. Clone the Repository

```bash
git clone https://github.com/Tech-Ishaan13/nebula-codeeditor.git
cd nebula-codeeditor
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```env
JWT_SECRET=your_jwt_secret_here
MONGODB_URI=mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/?appName=Cluster0
FRONTEND_URL=http://localhost:3000
PORT=8000
OPENROUTER_API_KEY=sk-or-v1-xxxxxxxxxxxxxxxxxxxx
```

Start the backend:

```bash
node index.js
```

You should see:
```
Connected to MongoDB
Server running at http://0.0.0.0:8000
```

---

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file in the `frontend/` directory:

```env
REACT_APP_API_URL=http://localhost:8000
REACT_APP_YJS_WS_URL=ws://localhost:8000
```

Start the frontend:

```bash
npm start
```

The app will open at **http://localhost:3000**

---

## 🔑 Environment Variables Reference

### Backend (`backend/.env`)

| Variable | Description |
|---|---|
| `JWT_SECRET` | Secret key for signing JWT tokens |
| `MONGODB_URI` | MongoDB Atlas connection string |
| `FRONTEND_URL` | Frontend URL for CORS (default: `http://localhost:3000`) |
| `PORT` | Port for the backend server (default: `8000`) |
| `OPENROUTER_API_KEY` | API key from [openrouter.ai](https://openrouter.ai/keys) for AI chat |

### Frontend (`frontend/.env`)

| Variable | Description |
|---|---|
| `REACT_APP_API_URL` | Backend API base URL |
| `REACT_APP_YJS_WS_URL` | WebSocket URL for Yjs real-time sync |

---

## 📁 Project Structure

```
nebula-codeeditor/
├── backend/
│   ├── index.js          # Express server, Socket.io, API routes
│   ├── package.json
│   └── .env              # (not committed — create manually)
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Workspace.js   # Main editor, file tree, AI chat, run code
│   │   │   ├── Home.js        # Login, signup, repo management
│   │   │   └── ...
│   │   └── App.js
│   ├── package.json
│   └── .env              # (not committed — create manually)
└── README.md
```

---

## 🤝 How to Collaborate

1. **Sign up** and log in
2. **Create a repository** with a name and room password
3. Share the **6-digit repo code** and **room password** with your collaborators
4. They **join** using the code and password
5. Start coding together in real time! 🚀

---

## 📄 License

MIT License — feel free to use, modify, and distribute.
