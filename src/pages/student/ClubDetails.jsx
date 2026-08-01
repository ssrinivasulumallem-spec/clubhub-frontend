import Button from "../../components/Button";
import { useParams } from "react-router-dom";
import clubs from "../../data/clubs";
function ClubDetails() {

  // Temporary: showing first club details
   const { id } = useParams();

  const club = clubs.find(
    (club) => club.id === Number(id)
  );

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Club Details
      </h1>


      <div className="border rounded-lg shadow p-6">

        <h2 className="text-2xl font-semibold">
          {club.name}
        </h2>


        <p className="mt-4 text-gray-600">
          {club.description}
        </p>


        <div className="mt-4">

          <h3 className="font-semibold">
            Coordinator
          </h3>

          <p>
            {club.coordinator}
          </p>

        </div>


        <div className="mt-4">

          <h3 className="font-semibold">
            Upcoming Events
          </h3>

          <ul className="list-disc ml-6">
            <li>Hackathon</li>
            <li>Coding Contest</li>
          </ul>

        </div>


        <Button>
  Join Club
</Button>


      </div>

    </div>
  );
}


export default ClubDetails;



