# employwise-frontend-assignment
 
# 👥 EmployWise – User Management Application

A responsive and modular **User Management React Application** built using **React 19**, **Tailwind CSS v4**, **Vite**, and **Axios**. The app integrates with the [Reqres API](https://reqres.in/) to implement login authentication, user listing with pagination, and CRUD operations for managing users.

> 🚀 **Live Demo**: [https://employwise-user-management.vercel.app](https://employwise-userpanel.vercel.app)
> 
---

## 📌 Project Overview

This project is a part of the **EmployWise Assignment** that includes 3 levels of increasing complexity:

### ✅ Level 1: Authentication
- Login screen with form validation.
- User authentication using:
  - Endpoint: `POST /api/login`
  - Email: `eve.holt@reqres.in`
  - Password: `cityslicka`
- On success, token is stored in `sessionStorage` and user is navigated to the User List page.

### ✅ Level 2: User List
- Displays a paginated list of users using:
  - Endpoint: `GET /api/users?page=1`
- User info shown: First Name, Last Name, Email, Avatar.
- Fully responsive layout using cards.
- Pagination support.

### ✅ Level 3: Edit, Delete & Update
- Edit user:
  - Pre-filled form to update name and email.
  - `PUT /api/users/:id`
- Delete user:
  - `DELETE /api/users/:id`
- Toast notifications for success/error handling.

---

## 🔑 Features

- 🔐 Token-based Login & Session Management
- ⏱ Token expires after **1 hour** and auto-logs out user
- 👥 Paginated user listing
- ✏️ Edit user details with form validation
- ❌ Delete user with confirmation
- 🔍 Bonus: Client-side search & filtering
- 📱 Fully responsive design (mobile + desktop)
- 📦 Modular folder structure with reusable components
- 🧭 Navigation with **React Router**
- 💅 Styled with **Tailwind CSS v4**
- 📤 Deployed on **Vercel**

---

## ⚙️ Installation & Setup

> 💡 Required versions:
> - **Node.js**: `v22.14.0`
> - **React**: `v19`
> - **Tailwind CSS**: `v4`

