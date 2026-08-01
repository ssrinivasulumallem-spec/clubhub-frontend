function AssignCoordinator() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        Assign Coordinator
      </h2>

      <div className="space-y-4">

        <div>
          <label className="block mb-2 font-medium">
            Select Club
          </label>

          <select className="w-full border rounded-lg p-3">
            <option>Coding Club</option>
            <option>Dance Club</option>
            <option>Photography Club</option>
            <option>Music Club</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Select Coordinator
          </label>

          <select className="w-full border rounded-lg p-3">
            <option>Rahul</option>
            <option>Anjali</option>
            <option>Kiran</option>
            <option>Sneha</option>
          </select>
        </div>

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
          Assign Coordinator
        </button>

      </div>

    </div>
  );
}

export default AssignCoordinator;
