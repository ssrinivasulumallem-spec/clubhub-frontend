import Card from "../../components/Card";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import DashboardLayout from "../../layouts/DashboardLayout";
const clubs = [
  {
    id: 1,
    name: "Coding Club",
    description: "A club for students interested in programming and technology.",
    coordinator: "Rahul"
  },
  {
    id: 2,
    name: "Photography Club",
    description: "A place for students who love photography and creativity.",
    coordinator: "Anjali"
  },
  {
    id: 3,
    name: "Robotics Club",
    description: "Learn robotics, automation and hardware projects.",
    coordinator: "Arjun"
  }
];


function ExploreClubs() {

  return (
    <DashboardLayout>

      <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Explore Clubs
      </h1>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {
          clubs.map((club) => (

            <Card key={club.id}>

              <h2 className="text-xl font-semibold">
                {club.name}
              </h2>


              <p className="mt-2">
                {club.description}
              </p>


              <p className="mt-2 text-sm">
                Coordinator: {club.coordinator}
              </p>


              <Link to={`/clubs/${club.id}`}>
  <Button>
    View Details
  </Button>
</Link>


            </Card>

          ))
        }

      </div>


          </div>

    </DashboardLayout>
);
}


export default ExploreClubs;