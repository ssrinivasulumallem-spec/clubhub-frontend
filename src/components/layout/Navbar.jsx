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
  className="w-64 px-4 py-2 rounded-lg bg-white text-black placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
/>
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-700 font-bold">
  A
</div>

      </div>

    </nav>
  );
}

export default Navbar;