import Card from "../../components/Card";
import Button from "../../components/Button";
import clubs from "../../data/clubs";
import { useNavigate } from "react-router-dom";

function ExploreClubs() {

  const navigate = useNavigate();

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Explore Clubs
      </h1>


      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {clubs.map((club) => (

          <Card
            key={club.id}
            title={club.name}
            description={club.description}
          >

            <Button
              onClick={() => navigate(`/student/clubs/${club.id}`)}
            >
              View Details
            </Button>

          </Card>

        ))}

      </div>

    </div>
  );
}

export default ExploreClubs;