import React, { useContext } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Home from "./pages/Home"
import Login from "./pages/Login";
import Register from "./pages/Register";
import './styles.css';

function App() {

  const { currentUser } = useContext(AuthContext);
  const ProtectedRoute = ({ children }) => {
    // If not user go to login page
    if (!currentUser) {
      return <Navigate to='/login' />
    }
    // If there is a user return home page
    return children
  };

  return (
    <HashRouter>
      <Routes>
        <Route path="/">
          <Route index element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>} />
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
        </Route>
      </Routes>
    </HashRouter >
    </HashRouter >
  );
}

export default App;
