import ClubCard from "./ClubCard";
import { useClubs } from "../../context/ClubsContext";

function ManageClubs() {
  const { clubs, addClub, deleteClub } = useClubs();

  const handleAddClub = () => {
    const clubName = prompt("Enter club name:");

    if (clubName && clubName.trim() !== "") {
      addClub(clubName);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">
          Manage Clubs
        </h2>

        <button
          onClick={handleAddClub}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          + Add Club
        </button>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {clubs.map((club) => (
          <ClubCard
            key={club.id}
            name={club.name}
            coordinator={club.coordinator}
            members={club.members}
            color={club.color}
            onDelete={() => deleteClub(club.id)}
          />
        ))}

      </div>

    </div>
  );
}

export default ManageClubs;