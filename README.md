# 👥 EmployWise – Frontend Assignment User Management App


## 🌍 Deployment URL  
🔗 **Live App:** [User Management App](https://employwise-userpanel.vercel.app)


## 🚀 Project Overview  
A responsive and modular **User Management React Application** built using **React 19**, **Tailwind CSS v4**, **Vite**, and **Axios**. The app integrates with the [Reqres API](https://reqres.in/) to implement login authentication, user listing with pagination, and CRUD operations for managing users.

This assignment was completed in three levels of increasing complexity:

### ✅ Level 1: Authentication  
- Login screen with form validation  
- Auth via Reqres API using:  
  - **Email:** `eve.holt@reqres.in`  
  - **Password:** `cityslicka`  
  - Endpoint: `POST /api/login`  
- On success, token is stored in `sessionStorage`  
- Redirects to the User List page  

### ✅ Level 2: User List  
- Displays paginated users using:  
  - Endpoint: `GET /api/users?page=1`  
- Info shown: First Name, Last Name, Email, Avatar  
- Responsive card-based UI  
- Pagination controls  

### ✅ Level 3: Edit, Delete & Update  
- Edit User:  
  - Pre-filled form with name/email  
  - `PUT /api/users/:id`  
- Delete User:  
  - `DELETE /api/users/:id`  
- Toast notifications for actions (success/error)


## 🌟 Features  

✅ **Token-based Login & Session Management**  
✅ **Protected Routes functionality added**  
✅ **Auto Logout After 1 Hour of Inactivity**  
✅ **Paginated User Listing**  
✅ **Edit User Details with Form Validation**  
✅ **Delete User with Confirmation Prompt**  
✅ **Client-side Search & Filtering**  
✅ **Fully Responsive Design (Mobile + Desktop)**  
✅ **Modular Folder Structure with Reusable Components**  
 


## 📌 Assumptions & Considerations  
- Token is stored in localStorage and expires after 1 hour  
- sessionStorage is optionally used to persist user state  
- App state updates immediately after edit or delete api actions with help of sessionStorage


## ⚙️ Installation & Setup

💡 **Required versions:**  
- **Node.js:** v22.14.0  
- **React:** v19  
- **Tailwind CSS:** v4


# 🚀 Running the Project on Local System

## 1️⃣ Clone the Repository
```sh
git clone https://github.com/Arjunp04/employwise-frontend-assignment.git
```

## 2️⃣  Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Development Server
```sh
npm run dev
```

🟢 Your frontend should be running at `http://localhost:5173`.

## 📁 Environment Variables

Create a `.env` file at the root with the following variable:

```env
VITE_BASE_URL="https://reqres.in"
```

---

## 📸 Screenshots

### 🔐 Landing Page  
Displays landing page with Get started button  

![landing page](https://github.com/user-attachments/assets/c0a7f455-3857-4ecd-8ac4-a646c1bbca36)


### 🔐 Login Page  
Shows login with validation and toast notifications on success or failure.  

![login page](https://github.com/user-attachments/assets/af0004bb-ebec-4ad2-94bc-b627948cce49)


### 📄 User List with Pagination  
Displays paginated users fetched from the Reqres API.  

![users page](https://github.com/user-attachments/assets/51bde4b7-ef17-44af-907e-16989b534d4c)


### ✏️ Edit User  
Pre-filled form to update user data.  

![edit user page](https://github.com/user-attachments/assets/2e6c0da2-b70c-44f2-8e94-0cf9bdbdea81)


### 🗑️ Delete User  
User card removed modal with toast confirmation.

![delete modal before deleting user](https://github.com/user-attachments/assets/d5cc0600-8704-4938-951b-a4ce81bb5326)


### 🗑️ Searched User  
User searched from searchbar 

![searched user](https://github.com/user-attachments/assets/7851607d-ece4-4167-a27e-c27c652c1a12)
