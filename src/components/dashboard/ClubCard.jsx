function ClubCard({ name, coordinator, members, color }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">

      <div
        className={`w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl font-bold ${color}`}
      >
        {name.charAt(0)}
      </div>

      <h2 className="text-xl font-bold mt-4">
        {name}
      </h2>

      <p className="text-gray-500 mt-1">
        Coordinator: {coordinator}
      </p>

      <p className="text-gray-500">
        Members: {members}
      </p>

      <div className="flex gap-3 mt-5">

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Edit
        </button>

        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
          Delete
        </button>

      </div>

    </div>
  );
}

export default ClubCard;