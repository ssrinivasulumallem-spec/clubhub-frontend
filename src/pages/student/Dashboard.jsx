import Card from "../../components/Card";
import DashboardLayout from "../../layouts/DashboardLayout";
import {
  myClubs,
  upcomingEvents,
  announcements,
} from "../../data/dashboardData";

function Dashboard() {
  return (
    <DashboardLayout>

      <div className="p-6">

        <h1 className="text-3xl font-bold">
          Student Dashboard
        </h1>

        <p className="text-gray-600 mt-2">
          Welcome to ClubHub 👋
        </p>


      
        <div className="mt-6">

          <h2 className="text-2xl font-semibold mb-3">
            My Clubs
          </h2>

          {myClubs.map((club) => (
            <Card
              key={club.id}
              title={club.name}
              description="Club Member"
            />
          ))}

        </div>


    
        <div className="mt-6">

          <h2 className="text-2xl font-semibold mb-3">
            Upcoming Events
          </h2>

          {upcomingEvents.map((event) => (
            <Card
              key={event.id}
              title={event.title}
              description={event.date}
            />
          ))}

        </div>
        <div className="mt-6">

          <h2 className="text-2xl font-semibold mb-3">
            Recent Announcements
          </h2>

          {announcements.map((item) => (
            <Card
              key={item.id}
              title="Announcement"
              description={item.message}
            />
          ))}

        </div>


      </div>

    </DashboardLayout>
  );
}

export default Dashboard;

