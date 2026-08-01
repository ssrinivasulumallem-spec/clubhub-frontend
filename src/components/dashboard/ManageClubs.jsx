
import ClubCard from "./ClubCard";

function ManageClubs() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        Manage Clubs
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <ClubCard
          name="Coding Club"
          coordinator="Rahul"
          members="150"
          color="bg-blue-600"
        />

        <ClubCard
          name="Dance Club"
          coordinator="Anjali"
          members="95"
          color="bg-pink-600"
        />

        <ClubCard
          name="Photography Club"
          coordinator="Kiran"
          members="70"
          color="bg-green-600"
        />

        <ClubCard
          name="Music Club"
          coordinator="Sneha"
          members="120"
          color="bg-purple-600"
        />

      </div>

    </div>
  );
}

export default ManageClubs;