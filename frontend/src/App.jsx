import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";

const routes = [
    {
        path: "/",
        element: (
            // This should be removed later. Just for demonstration
            <ProtectedRoute>
                <Home />
            </ProtectedRoute>
        ),
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    // Add more routes here easily
];

const router = createBrowserRouter(routes);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
