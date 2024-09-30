import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";

import ProtectedRoute from "./Components/ProtectedRoute";
import DefaultLayout from "./Components/DefaultLayout";
import Profile from "./pages/profile";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/page5";
import Page6 from "./pages/Page6";
import DashBoard from "./pages/DashBoard/DashBoard";
import Internal_Staff from "./pages/Staff/Internal_Staff";
import Admins from "./pages/Staff/Admins";
import DragnDrop from "./Components/Drag n Drop/DragnDrop";
import Tools from "./pages/Tools/Tools";
import One from "./pages/Tools/One";
import Two from "./pages/Tools/Two";
import Three from "./pages/Tools/Three";
import Four from "./pages/Tools/Four";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            element={
              <>
                <ProtectedRoute>
                  <DefaultLayout />
                </ProtectedRoute>
              </>
            }
          >
            <Route path="/" element={<DashBoard />} />
            <Route path="/admin/internal-staff" element={<Internal_Staff />} />
            <Route path="/admin/admins" element={<Admins />} />
            <Route path="/admin/process-tools/tools" element={<Tools />}>
              <Route path="/admin/process-tools/tools/1" element={<One />} />
              <Route path="/admin/process-tools/tools/2" element={<Two />} />
              <Route path="/admin/process-tools/tools/3" element={<Three />} />
              <Route path="/admin/process-tools/tools/4" element={<Four />} />
            </Route>
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
            <Route path="/page4" element={<Page4 />} />
            <Route path="/page5" element={<Page5 />} />
            <Route path="/page6" element={<Page6 />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/calendar" element={<Page6 />} />
            <Route path="/drag-drop" element={<DragnDrop />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

//--------------------- {this is the routing structure for the main application}-----------------------

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AdminRoutes from './routes/AdminRoutes';
// import LabsRoutes from './routes/LabsRoutes';
// import ClientsRoutes from './routes/ClientsRoutes';
// import ProtectedRoute from './routes/ProtectedRoute';
// import AuthContext from './context/AuthContext';

// function App() {
//   return (
//     <AuthContext.Provider value={{/* auth logic */}}>
//       <Router>
//         <Routes>
//           {/* Admin Routes */}
//           <Route path="/admin/*" element={<ProtectedRoute role="admin"><AdminRoutes /></ProtectedRoute>} />

//           {/* Labs Routes */}
//           <Route path="/labs/*" element={<ProtectedRoute role="labs"><LabsRoutes /></ProtectedRoute>} />

//           {/* Clients Routes */}
//           <Route path="/clients/*" element={<ProtectedRoute role="client"><ClientsRoutes /></ProtectedRoute>} />
//         </Routes>
//       </Router>
//     </AuthContext.Provider>
//   );
// }

// export default App;

// ----------------------{this is the routing structure for admin routes}------------------------------

// import { Routes, Route } from 'react-router-dom';
// import AdminLayout from '../layouts/AdminLayout';
// import Dashboard from '../pages/admin/Dashboard';
// import Settings from '../pages/admin/Settings';
// import Users from '../pages/admin/Users';

// const AdminRoutes = () => (
//   <AdminLayout>
//     <Routes>
//       <Route path="dashboard" element={<Dashboard />} />
//       <Route path="settings" element={<Settings />} />
//       <Route path="users" element={<Users />} />
//     </Routes>
//   </AdminLayout>
// );

// export default AdminRoutes;

// ----------------------{this is the routing structure for protected routes}------------------------------

// import { Navigate } from 'react-router-dom';
// import { useAuthContext } from '../context/AuthContext';

// const ProtectedRoute = ({ role, children }) => {
//   const { user } = useAuthContext();

//   if (!user || user.role !== role) {
//     return <Navigate to="/" />;
//   }
//   }

//   return children;
// };

// export default ProtectedRoute;

//---------------------------------- login page logic---------------------------------------------------

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuthContext } from '../context/AuthContext';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const { login } = useAuthContext(); // AuthContext provides the login function
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null); // Reset any previous error

//     try {
//       // Call login from the AuthContext
//       await login(email, password);
//       navigate('/'); // Redirect to the home page or appropriate dashboard after login
//     } catch (err) {
//       setError('Invalid credentials');
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       {error && <p>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//           required
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;

// ----------------------{ auth logic}------------------------------
// The authentication logic is handled in the AuthContext.
// It manages the login, logout, and user state globally.

// import { createContext, useState, useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { loginService } from "../services/authService"; // Assume this calls the API

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   // On initial load, check if the user is already authenticated
//   useEffect(() => {
//     const token = localStorage.getItem("authToken");
//     if (token) {
//       // If token is found, validate it or fetch user data
//       // Fetch user based on token
//       setUser({ role: "admin" }); // Example: fetched from API based on token
//     }
//     setLoading(false);
//   }, []);

//   // Login function
//   const login = async (email, password) => {
//     const response = await loginService(email, password); // Call to API
//     const { token, user } = response;

//     // Store token in local storage for future use
//     localStorage.setItem("authToken", token);
//     setUser(user); // Set the user state (could be admin, lab, or client)

//     return response;
//   };

//   // Logout function
//   const logout = () => {
//     localStorage.removeItem("authToken"); // Remove token from storage
//     setUser(null); // Clear user state
//     navigate("/login"); // Redirect to login page
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Custom hook to use AuthContext in components
// export const useAuthContext = () => useContext(AuthContext);

// ------------------{auth service logic}---------------------------
// export const loginService = async (email, password) => {
//   // Call your API for login (e.g., using fetch or axios)
//   const response = await fetch("https://api.example.com/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email, password }),
//   });

//   if (!response.ok) {
//     throw new Error("Login failed");
//   }

//   const data = await response.json();
//   return {
//     token: data.token, // JWT or any other token
//     user: data.user, // User object, which can have roles like admin, lab, client
//   };
// };

// -----------------------{token management logic in the auth service}----------------------------

// export const fetchUserData = async () => {
//   const token = localStorage.getItem("authToken");
//   const response = await fetch("https://api.example.com/user", {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   const data = await response.json();
//   return data;
// };

// --------------------{protected Routes logic}---------------------------

// import { Navigate } from 'react-router-dom';
// import { useAuthContext } from '../context/AuthContext';

// const ProtectedRoute = ({ role, children }) => {
//   const { user, loading } = useAuthContext();

//   if (loading) {
//     return <div>Loading...</div>; // Show loading state while checking auth
//   }

//   if (!user || user.role !== role) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// };

// export default ProtectedRoute;
