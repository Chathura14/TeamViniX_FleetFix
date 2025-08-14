import React from "react";
import { Navigate } from "react-router-dom";

// JWT validation logic
function parseJwt(token) {
    try {
        const base64Url = token.split(".")[1];
        const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        const jsonPayload = decodeURIComponent(
            atob(base64)
                .split("")
                .map(function (c) {
                    return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
                })
                .join("")
        );
        return JSON.parse(jsonPayload);
    } catch (e) {
        console.error("Invalid token", e);
        return null;
    }
}

const isAuthenticated = () => {
    const token = localStorage.getItem("authToken");
    if (!token) return false;
    const payload = parseJwt(token);
    if (!payload || !payload.exp) return false;
    // Check if token is expired
    const now = Math.floor(Date.now() / 1000);
    return payload.exp > now;
};

const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated()) {
        return <Navigate to="/login" replace />;
    }
    return children;
};

export default ProtectedRoute;
