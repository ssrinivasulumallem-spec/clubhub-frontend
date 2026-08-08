import { useState } from "react";
import { useClubs } from "../../context/ClubsContext";

function AssignCoordinator() {
  const { clubs, assignCoordinator } = useClubs();

  const [selectedClub, setSelectedClub] = useState("");
  const [selectedCoordinator, setSelectedCoordinator] = useState("");

  const handleAssign = () => {
    if (!selectedClub || !selectedCoordinator) {
      alert("Please select both club and coordinator.");
      return;
    }

    assignCoordinator(selectedClub, selectedCoordinator);

    alert("Coordinator assigned successfully!");

    setSelectedClub("");
    setSelectedCoordinator("");
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        Assign Coordinator
      </h2>

      <div className="space-y-4">

        {/* Select Club */}
        <div>
          <label className="block mb-2 font-medium">
            Select Club
          </label>

          <select
            value={selectedClub}
            onChange={(e) => setSelectedClub(e.target.value)}
            className="w-full border rounded-lg p-3 bg-white"
          >
            <option value="">
              Select Club
            </option>

            {clubs.map((club) => (
              <option key={club.id} value={club.id}>
                {club.name}
              </option>
            ))}
          </select>
        </div>

        {/* Select Coordinator */}
        <div>
          <label className="block mb-2 font-medium">
            Select Coordinator
          </label>

          <select
            value={selectedCoordinator}
            onChange={(e) =>
              setSelectedCoordinator(e.target.value)
            }
            className="w-full border rounded-lg p-3 bg-white"
          >
            <option value="">
              Select Coordinator
            </option>

            <option value="Rahul">Rahul</option>
            <option value="Anjali">Anjali</option>
            <option value="Kiran">Kiran</option>
            <option value="Sneha">Sneha</option>
          </select>
        </div>

        {/* Assign Button */}
        <button
          onClick={handleAssign}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          Assign Coordinator
        </button>

      </div>

    </div>
  );
}

export default AssignCoordinator;