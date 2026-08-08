
import AdminLayout from "../../components/layout/Layout";
import WelcomeSection from "../../components/dashboard/WelcomeSection";
import DashboardCards from "../../components/dashboard/DashboardCards";
import ManageClubs from "../../components/dashboard/ManageClubs";
import AssignCoordinator from "../../components/dashboard/AssignCoordinator";
import RecentActivity from "../../components/dashboard/RecentActivity";
import DashboardChart from "../../components/dashboard/DashboardChart";


function Dashboard() {
  return (
    <AdminLayout>
      <div id="dashboard">
      <WelcomeSection />
      </div>


      {/* Dashboard Cards */}
      <section id="dashboard" className="mt-6">
        <DashboardCards />
      </section>

      {/* Pending Requests & Manage Clubs */}
      <div className="mt-6">

        <section id="manage-clubs">
          <ManageClubs />
        </section>

      </div>

      {/* Assign Coordinator & Recent Activity */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

        <section id="assign-coordinators">
          <AssignCoordinator />
        </section>

        <section id="recent-activity">
          <RecentActivity />
        </section>

      </div>

      {/* Student Registrations / Chart */}
      <section id="student-registration" className="mt-8">
        <DashboardChart />
      </section>

      

      
      
      

    </AdminLayout>
  );
}

export default Dashboard;