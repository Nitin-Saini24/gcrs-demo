import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { userAuth } from "../middleware/userAuth";

// export default function ProtectedRoute({ children }) {
//   const navigate = useNavigate();
//   // const location = useLocation();
//   // console.log(userAuth());

//   useEffect(() => {
//     // console.log("ProtectedRoute");
//     if (!userAuth()) {
//       navigate("/login");
//       // localStorage.setItem("redirectPath", location.pathname);
//     }
//   }, [navigate, userAuth]);

//   return userAuth() ? children : null;
// }

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { userAuth } from "../middleware/userAuth";

export default function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const authStatus = await userAuth(); // Await the async userAuth function

      setIsAuthenticated(authStatus);
      if (!authStatus) {
        navigate("/login");
      }
    };

    checkAuth();
    return () => {
      setIsAuthenticated(null);
    };
  }, []);

  // While the authentication status is being checked, show a loading state or nothing
  if (isAuthenticated === null) {
    return <div>Loading...</div>; // You can customize this loading state
  }

  // Render children if authenticated, otherwise, null (the navigation will handle redirecting)
  return isAuthenticated ? children : null;
}
