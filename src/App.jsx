


import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Success from "./pages/Success";
import Error from "./pages/Error";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login"; // Adjust the path if Login.jsx is elsewhere
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRoute";
import Favorites from "./pages/Favorites";
import RateDish from "./pages/RateDish"; // Adjust the path if RateDish.jsx is elsewhere
import { AuthProvider } from "./context/AuthContext"; // Adjust the path if AuthContext.jsx is elsewhere
import MyFeedbacks from "./pages/MyFeedbacks";
import { auth } from "./firebase"; // adjust path as needed

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>} />
          <Route
            path="/success"
            element={<ProtectedRoute element={<Success />} />}
          />
          <Route path="/*" element={<Error />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/favorites" element={<Favorites />} />

          <Route path="/rate/:id" element={<RateDish />} />
          
          <Route path="/my-feedbacks" element={<MyFeedbacks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
