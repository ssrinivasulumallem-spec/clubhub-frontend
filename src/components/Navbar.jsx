function Navbar() {
  return (
    <nav className="h-16 bg-white shadow-md flex items-center justify-between px-6">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-blue-600">
        ClubHub
      </h1>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search..."
        className="border rounded-lg px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <button className="text-2xl">🔔</button>

        <img
          src="https://i.pravatar.cc/40"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </nav>
  );
}

export default Navbar;