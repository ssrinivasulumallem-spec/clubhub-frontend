import { Link } from "react-router-dom";
function LandingPage() {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow">
        <h1 className="text-2xl font-bold text-blue-600">
          ClubHub
        </h1>

        <div className="space-x-4">
     <Link to="/login">
     <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">
      Login
     </button>
     </Link>

     <Link to="/signup">
     <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
      Sign Up
     </button>
     </Link>
         </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h2 className="text-5xl font-bold text-gray-800">
          Welcome to ClubHub
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Discover college clubs, join your favorite communities,
          and participate in exciting events—all in one place.
        </p>

        <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Explore Clubs
        </button>
      </section>

      {/* About Section */}
      <section className="px-8 py-16 bg-white">
        <h3 className="text-3xl font-bold text-center mb-8">
          About ClubHub
        </h3>

        <p className="max-w-3xl mx-auto text-center text-gray-600">
          ClubHub is a centralized platform where students can explore
          clubs, send join requests, and participate in events while
          coordinators and admins manage club activities efficiently.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        © 2026 ClubHub. All Rights Reserved.
      </footer>
    </div>
  );
}

export default LandingPage;