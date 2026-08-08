import { useState } from 'react';
import ClubCard from './ClubCard';

function ManageClubs() {

  const [clubs, setClubs] = useState([
    {
      name: "Coding Club",
      coordinator: "Rahul",
      members: "150",
      color: "bg-blue-600"
    },
    {
      name: "Dance Club",
      coordinator: "Anjali",
      members: "95",
      color: "bg-pink-600"
    },
    {
      name: "Photography Club",
      coordinator: "Kiran",
      members: "70",
      color: "bg-green-600"
    },
    {
      name: "Music Club",
      coordinator: "Sneha",
      members: "120",
      color: "bg-purple-600"
    }
  ]);

  const addClub = () => {
    const clubName = prompt("Enter club name:");

    if (clubName && clubName.trim() !== "") {
      const newClub = {
        name: clubName,
        coordinator: "Not Assigned",
        members: "0",
        color: "bg-indigo-600"
      };

      setClubs([...clubs, newClub]);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">
          Manage Clubs
        </h2>

        <button
          onClick={addClub}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          + Add Club
        </button>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {clubs.map((club, index) => (
          <ClubCard
            key={index}
            name={club.name}
            coordinator={club.coordinator}
            members={club.members}
            color={club.color}
          />
        ))}

      </div>

    </div>
  );
}

export default ManageClubs;