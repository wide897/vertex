import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";

const PrivateRoute = ({ element: Component, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });
    return () => unsubscribe();
  }, []);

  if (isAuthenticated === null) {
    return (
      <span
        className="spinner-border spinner-border-sm me-2"
        role="status"
        aria-hidden="true"
      >
        Loading
      </span>
    );
  }

  return isAuthenticated ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/" replace />
  );
};

export default PrivateRoute;
