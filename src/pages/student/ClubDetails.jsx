import Card from "../../components/Card";
import Button from "../../components/Button";
import DashboardLayout from "../../layouts/DashboardLayout";

const club = {
  name: "Coding Club",
  description:
    "A community for students interested in programming and technology.",
  coordinator: "Rahul",
  members: 120,
  events: [
    "Web Development Workshop",
    "College Hackathon"
  ]
};


function ClubDetails() {

  return (
  <DashboardLayout>

    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Club Details
      </h1>


      <Card>

        <h2 className="text-2xl font-semibold">
          {club.name}
        </h2>


        <p className="mt-3">
          {club.description}
        </p>


        <p className="mt-3">
          Coordinator: {club.coordinator}
        </p>


        <p className="mt-3">
          Members: {club.members}
        </p>


        <h3 className="text-xl font-semibold mt-5">
          Upcoming Events
        </h3>


        <ul className="list-disc ml-6 mt-2">

          {
            club.events.map((event, index)=>(
              <li key={index}>
                {event}
              </li>
            ))
          }

        </ul>


        <Button text="Send Join Request" />

      </Card>


        </div>

  </DashboardLayout>
);
}


export default ClubDetails;