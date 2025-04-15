# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# ✅ Todo Frontend (React + Vite + Tailwind)

A simple and clean **Todo App frontend** built with **React**, **Vite**, **Tailwind CSS**, and **Axios**, designed to connect with a Django REST API backend.

---

## 🚀 Quick Start

### 1️⃣ Create React + Vite Project

```bash
npm create vite@latest todo-frontend -- --template react
cd todo-frontend
npm install

```

 ###2️⃣ **Install Tailwind CSS**
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Configure tailwind.config.js**

```bash
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
3️⃣ **Add Tailwind to CSS**
Create or edit src/index.css:

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Import it in main.jsx:**

```bash
import './index.css';
```

4️⃣ **Install Axios for API Calls**
```bash

npm install axios
```

**Create an API handler in src/api/tasks.js:**

```bash
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api/tasks/", // Your Django backend URL
});

export const getTasks = () => API.get('/');
export const addTask = (data) => API.post('/', data);
export const updateTask = (id, data) => API.put(`/${id}/`, data);
export const deleteTask = (id) => API.delete(`/${id}/`);
```

🧩 **Folder Structure**
```bash
src/
├── api/
│   └── tasks.js
├── components/
│   ├── TaskForm.jsx
│   └── TaskItem.jsx
├── pages/
│   └── TodoPage.jsx
├── App.jsx
├── main.jsx
└── index.css
```

🧪 **Start Development Server**
```bash
npm run dev
```


💡 **Tech Stack**

```bash
⚛️ React

⚡ Vite

🎨 Tailwind CSS

📡 Axios

🔄 Django Backend (for REST API)
```