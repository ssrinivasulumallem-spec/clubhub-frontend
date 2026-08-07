import Card from "../../components/Card";
import DashboardLayout from "../../layouts/DashboardLayout";
import { Link } from "react-router-dom";
const myClubs = [
  {
    name: "Coding Club",
    role: "Member"
  },
  {
    name: "Photography Club",
    role: "Member"
  }
];


const upcomingEvents = [
  {
    title: "Web Development Workshop",
    date: "20 August 2026"
  },
  {
    title: "College Hackathon",
    date: "5 September 2026"
  }
];


const announcements = [
  "Registration opened for Hackathon",
  "Photography Club meeting this Friday"
];


function StudentDashboard() {

  return (

    <DashboardLayout>

      <div className="p-6">


     <Link to="/clubs">
  <button className="px-4 py-2 bg-blue-600 text-white rounded">
    Explore Clubs
  </button>
</Link>


      {/* My Clubs */}

      <h2 className="text-2xl font-semibold mb-3">
        My Clubs
      </h2>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">

        {
          myClubs.map((club,index)=>(

            <Card key={index}>

              <h3 className="text-xl font-semibold">
                {club.name}
              </h3>

              <p>
                Role: {club.role}
              </p>

            </Card>

          ))
        }

      </div>



      {/* Upcoming Events */}

      <h2 className="text-2xl font-semibold mb-3">
        Upcoming Events
      </h2>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">

        {
          upcomingEvents.map((event,index)=>(

            <Card key={index}>

              <h3 className="text-xl font-semibold">
                {event.title}
              </h3>

              <p>
                Date: {event.date}
              </p>

            </Card>

          ))
        }

      </div>



      {/* Announcements */}

      <h2 className="text-2xl font-semibold mb-3">
        Recent Announcements
      </h2>


      <Card>

        <ul className="list-disc ml-6">

          {
            announcements.map((item,index)=>(

              <li key={index}>
                {item}
              </li>

            ))
          }

        </ul>

      </Card>


          </div>

    </DashboardLayout>

  );

}




export default StudentDashboard;