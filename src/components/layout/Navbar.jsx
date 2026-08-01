function Navbar() {
  return (
    <nav className="bg-blue-700 text-white h-16 flex items-center justify-between px-6 shadow">

      <h1 className="text-2xl font-bold">
        Club Hub Admin
      </h1>

      <div className="flex items-center gap-4">

        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-2 rounded text-black"
        />

        <div className="w-10 h-10 bg-white rounded-full"></div>

      </div>

    </nav>
  );
}

export default Navbar;