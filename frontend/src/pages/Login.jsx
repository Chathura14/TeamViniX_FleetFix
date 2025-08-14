import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const res = await fetch("/api/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();
            if (res.ok && data.token) {
                localStorage.setItem("authToken", data.token);
                navigate("/");
            } else {
                setError(data.message || "Login failed");
            }
        } catch (err) {
            console.error("Login error", err);
            setError("Network error");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="w-full max-w-sm bg-white rounded-xl shadow p-6">
                <h1 className="text-2xl font-bold text-primary mb-4 text-center">Sign In</h1>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-primary mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="input input-bordered w-full"
                            placeholder="Enter your email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-primary mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="input input-bordered w-full"
                            placeholder="Enter your password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <div className="text-red-500 text-sm text-center">{error}</div>}
                    <button type="submit" className="btn btn-secondary w-full text-white font-semibold">
                        Login
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <a href="/register" className="text-secondary hover:underline">
                        Don't have an account? Register
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Login;
