# 📋 Task Management App

A modern, responsive task management application built with React and Vite. Manage your daily and monthly tasks efficiently with a clean, user-friendly interface. Features frontend-only authentication, persistent storage, and a fully responsive design.

## ✨ Features

### 🔐 Authentication System
- **Frontend-only authentication** - No backend required
- User registration and login
- Persistent sessions using localStorage
- Protected routes - users must authenticate to access the app
- Personalized user experience with name display

### 📝 Task Management
- **Daily Tasks**
  - Add, complete, and delete daily tasks
  - Mark tasks as done with a dedicated button
  - Tasks persist across browser sessions
  - Clean, intuitive interface

- **Monthly Tasks**
  - Plan tasks with due dates
  - Automatic sorting by due date
  - Mark tasks as completed
  - Delete tasks when no longer needed

### 🎨 User Interface
- **Responsive Design**
  - Fully responsive navbar with hamburger menu on mobile
  - Optimized for desktop, tablet, and mobile devices
  - Modern, clean UI with smooth transitions

- **User Experience**
  - Personalized dashboard with welcome message
  - User name displayed in navbar
  - Easy logout functionality
  - Smooth navigation between pages

### 💾 Data Persistence
- All data stored locally in browser (localStorage)
- User-specific task storage - each user has their own tasks
- Persistent authentication state
- No data loss on page refresh

## 🛠️ Technologies Used

- **React 19.2.0** - UI library
- **React Router DOM 7.13.0** - Client-side routing
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern CSS features
- **localStorage API** - Client-side data persistence

## 📦 Installation

1. **Clone the repository** (or navigate to the project directory)
   ```bash
   cd task-managent
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`
   - The app will automatically redirect to the login page

## 🚀 Usage

### First Time Setup

1. **Sign Up**
   - Click "Sign Up" on the login page
   - Enter your name and email
   - Click "Sign Up" to create your account
   - You'll be automatically logged in

2. **Login** (for returning users)
   - Enter your registered name and email
   - Click "Login"

### Managing Tasks

#### Daily Tasks
- Navigate to "Daily Tasks" from the navbar
- Enter a task in the input field
- Click "Add Task" or press Enter
- Click "Done" to mark a task as completed
- Click "Undo" to unmark a completed task
- Click "Delete" to remove a task permanently

#### Monthly Tasks
- Navigate to "Monthly Tasks" from the navbar
- Enter a task title and select a due date
- Click "Add Task"
- Tasks are automatically sorted by due date
- Use "Done"/"Undo" and "Delete" buttons as needed

### Navigation

- **Dashboard** - Overview page with quick links
- **Daily Tasks** - Manage your daily to-dos
- **Monthly Tasks** - Plan tasks with due dates
- **About** - Learn more about the application
- **Logout** - Sign out and return to login page

## 📁 Project Structure

```
task-managent/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Responsive navigation bar
│   │   ├── Navbar.css
│   │   └── ProtectedRoute.jsx  # Route protection component
│   ├── context/
│   │   └── AuthContext.jsx     # Authentication context provider
│   ├── pages/
│   │   ├── Login.jsx           # Login/Signup page
│   │   ├── Login.css
│   │   ├── Dashboard.jsx       # Home dashboard
│   │   ├── Dashboard.css
│   │   ├── DailyTasks.jsx      # Daily tasks management
│   │   ├── DailyTasks.css
│   │   ├── MonthlyTasks.jsx   # Monthly tasks management
│   │   ├── MonthlyTasks.css
│   │   ├── About.jsx           # About page
│   │   └── About.css
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # Global app styles
│   ├── main.jsx                # Entry point
│   └── index.css               # Base styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🔒 Authentication Details

The app uses a **frontend-only authentication system** that stores user data in localStorage:

- **User Registration**: New users are stored in `task-management-users` localStorage key
- **Active Session**: Current logged-in user stored in `task-management-auth` localStorage key
- **Task Storage**: Each user's tasks are stored separately:
  - Daily tasks: `task-management-daily-{email}`
  - Monthly tasks: `task-management-monthly-{email}`

### Security Note
⚠️ This is a frontend-only implementation for demonstration purposes. For production applications, implement proper backend authentication with secure password hashing and session management.

## 🎯 Key Features Breakdown

### Responsive Navbar
- Desktop: All navigation items and user info on a single horizontal line
- Mobile: Hamburger menu that expands to show navigation vertically
- Smooth animations and transitions

### Task Features
- ✅ Add new tasks
- ✅ Mark tasks as completed/incomplete
- ✅ Delete tasks
- ✅ Persistent storage per user
- ✅ Clean, organized UI

### User Experience
- 👤 Personalized greetings
- 🔄 Smooth page transitions
- 📱 Mobile-first responsive design
- 🎨 Modern, clean interface

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Notes

- All data is stored locally in your browser
- Clearing browser data will remove all tasks and user accounts
- Each user account has isolated task storage
- No backend server required - fully client-side application

## 🚧 Future Enhancements

Potential features for future versions:
- Task categories/tags
- Task priorities
- Task search and filtering
- Export/import tasks
- Dark mode toggle
- Task reminders/notifications
- Task sharing capabilities

## 📄 License

This project is open source and available for personal and educational use.

## 👨‍💻 Development

Built with ❤️ using React and modern web technologies.

---

**Version:** 1.0.0  
**Last Updated:** February 2026
