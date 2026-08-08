import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="h-screen flex flex-col">

      {/* Fixed Navbar */}
      <Navbar />

      <div className="flex flex-1 overflow-hidden">

        {/* Fixed Sidebar */}
        <aside className="w-64 bg-gray-900 text-white h-full sticky top-0 overflow-y-auto">
          <Sidebar />
        </aside>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto bg-gray-100 p-8">
          {children}
          <Footer />
        </main>

      </div>

    </div>
  );
}

export default Layout;