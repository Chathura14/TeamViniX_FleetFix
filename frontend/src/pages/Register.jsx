import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        NIC: "",
        drivingLicenseID: "",
        CTBID: "",
        role: "citizen",
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const res = await fetch("/api/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (res.ok && data.token) {
                localStorage.setItem("authToken", data.token);
                navigate("/");
            } else {
                setError(data.message || "Registration failed");
            }
        } catch (err) {
            setError("Registration Error " + err.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="w-full max-w-sm bg-white rounded-xl shadow p-6">
                <h1 className="text-2xl font-bold text-primary mb-4 text-center">Register</h1>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-primary mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="input input-bordered w-full"
                            placeholder="Enter your name"
                            required
                            value={form.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-primary mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="input input-bordered w-full"
                            placeholder="Enter your email"
                            required
                            value={form.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-primary mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="input input-bordered w-full"
                            placeholder="Enter your password"
                            required
                            value={form.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="NIC" className="block text-sm font-medium text-primary mb-1">
                            NIC
                        </label>
                        <input
                            type="text"
                            id="NIC"
                            name="NIC"
                            className="input input-bordered w-full"
                            placeholder="Enter your NIC"
                            required
                            value={form.NIC}
                            onChange={handleChange}
                        />
                    </div>
                    {error && <div className="text-red-500 text-sm text-center">{error}</div>}
                    <button type="submit" className="btn btn-secondary w-full text-white font-semibold">
                        Register
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <a href="/login" className="text-secondary hover:underline">
                        Already have an account? Login
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Register;
