function Home() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start pt-6 px-2 sm:px-4">
            {/* Hero Section */}
            <section className="w-full max-w-2xl text-center mb-8">
                <div className="flex flex-col items-center">
                    <img src="/public/logo.png" alt="FleetFix Logo" className="w-20 h-20 mb-2" />
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-primary mb-2">FleetFix Bus Service</h1>
                    <p className="text-primary/60 mb-4 text-base sm:text-lg max-w-md">
                        Welcome to FleetFix! Search for buses, book tickets, and view popular routes with ease. Enjoy a smarter, faster, and more
                        reliable way to travel across Sri Lanka.
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
                    <input type="text" placeholder="Search for buses or routes..." className="input bg-gray-200 border-gray-300 rounded w-full" />
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

            {/* Citizen Feature Cards */}
            <div className="w-full max-w-md grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="border border-gray-200 rounded-xl p-4 bg-white shadow flex flex-col items-center">
                    <h2 className="text-lg font-semibold mb-1 text-primary">Book Tickets</h2>
                    <p className="text-primary/60 mb-3 text-center text-sm">Reserve your seat for any route quickly and securely.</p>
                    <button className="w-full btn btn-secondary py-2 rounded-lg text-white text-sm font-medium">Book Now</button>
                </div>
                <div className="border border-gray-200 rounded-xl p-4 bg-white shadow flex flex-col items-center">
                    <h2 className="text-lg font-semibold mb-1 text-primary">View Schedules</h2>
                    <p className="text-primary/60 mb-3 text-center text-sm">Check bus timings and plan your journey with confidence.</p>
                    <button className="w-full btn btn-secondary py-2 rounded-lg text-white text-sm font-medium">View Schedules</button>
                </div>
                <div className="border border-gray-200 rounded-xl p-4 bg-white shadow flex flex-col items-center">
                    <h2 className="text-lg font-semibold mb-1 text-primary">Booking History</h2>
                    <p className="text-primary/60 mb-3 text-center text-sm">See your past and upcoming bookings in one place.</p>
                    <button className="w-full btn btn-secondary py-2 rounded-lg text-white text-sm font-medium">My Bookings</button>
                </div>
                <div className="border border-gray-200 rounded-xl p-4 bg-white shadow flex flex-col items-center">
                    <h2 className="text-lg font-semibold mb-1 text-primary">Popular Routes</h2>
                    <p className="text-primary/60 mb-3 text-center text-sm">Explore the most traveled routes and plan your trip.</p>
                    <button className="w-full btn btn-secondary py-2 rounded-lg text-white text-sm font-medium">Explore Routes</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
