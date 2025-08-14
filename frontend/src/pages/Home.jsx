function Home() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start pt-6 px-2 sm:px-4">
            {/* Hero Section */}
            <section className="w-full max-w-2xl text-center mb-8">
                <div className="flex flex-col items-center">
                    <img src="/public/logo.png" alt="FleetFix Logo" className="w-20 h-20 mb-2" />
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-primary mb-2">FleetFix Bus Management</h1>
                    <p className="text-primary/60 mb-4 text-base sm:text-lg max-w-md">
                        Welcome to FleetFix! Manage your fleet, drivers, routes, and schedules efficiently.
                    </p>
                    <div className="flex gap-4 mt-2">
                        <a href="/login" className="btn btn-secondary rounded-md px-6 text-white font-semibold">
                            Login
                        </a>
                        <a href="/register" className="btn btn-secondary rounded-md px-6 text-white font-semibold">
                            Register
                        </a>
                    </div>
                </div>
            </section>

            {/* Search Bar */}
            <section className="w-full max-w-md mb-8">
                <form className="flex gap-2 items-center">
                    <input type="text" placeholder="Search buses..." className="input bg-gray-200 border-gray-300 rounded w-full" />
                    <button type="submit" className="btn btn-secondary rounded-md text-white border-none">
                        Search
                    </button>
                </form>
            </section>

            {/* Popular Routes Section */}
            <section className="w-full max-w-md mb-10">
                <h2 className="text-xl font-bold text-primary mb-4">Popular Routes</h2>
                <ul className="space-y-3">
                    <li className="bg-white rounded-lg shadow p-3 flex justify-between items-center">
                        <span className="font-medium text-primary">Colombo - Kandy</span>
                        <span className="badge badge-outline badge-primary">Express</span>
                    </li>
                    <li className="bg-white rounded-lg shadow p-3 flex justify-between items-center">
                        <span className="font-medium text-primary">Galle - Matara</span>
                        <span className="badge badge-outline badge-primary">Scenic</span>
                    </li>
                    <li className="bg-white rounded-lg shadow p-3 flex justify-between items-center">
                        <span className="font-medium text-primary">Jaffna - Anuradhapura</span>
                        <span className="badge badge-outline badge-primary">Long Distance</span>
                    </li>
                </ul>
            </section>

            {/* Main Management Cards */}
            <div className="w-full max-w-md grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="border border-gray-200 rounded-xl p-4 bg-white shadow flex flex-col items-center">
                    <h2 className="text-lg font-semibold mb-1 text-primary">Buses</h2>
                    <p className="text-primary/60 mb-3 text-center text-sm">View, add, and update bus details.</p>
                    <button className="w-full btn btn-secondary py-2 rounded-lg text-white text-sm font-medium">Manage Buses</button>
                </div>
                <div className="border border-gray-200 rounded-xl p-4 bg-white shadow flex flex-col items-center">
                    <h2 className="text-lg font-semibold mb-1 text-primary">Drivers</h2>
                    <p className="text-primary/60 mb-3 text-center text-sm">Assign drivers and manage their profiles.</p>
                    <button className="w-full btn btn-secondary py-2 rounded-lg text-white text-sm font-medium">Manage Drivers</button>
                </div>
                <div className="border border-gray-200 rounded-xl p-4 bg-white shadow flex flex-col items-center">
                    <h2 className="text-lg font-semibold mb-1 text-primary">Routes</h2>
                    <p className="text-primary/60 mb-3 text-center text-sm">Plan and optimize bus routes.</p>
                    <button className="w-full btn btn-secondary py-2 rounded-lg text-white text-sm font-medium">Manage Routes</button>
                </div>
                <div className="border border-gray-200 rounded-xl p-4 bg-white shadow flex flex-col items-center">
                    <h2 className="text-lg font-semibold mb-1 text-primary">Schedules</h2>
                    <p className="text-primary/60 mb-3 text-center text-sm">Set and view bus schedules.</p>
                    <button className="w-full btn btn-secondary py-2 rounded-lg text-white text-sm font-medium">Manage Schedules</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
