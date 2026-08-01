function QuickActions() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <button className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700">
          + Add Club
        </button>

        <button className="bg-green-600 text-white p-4 rounded-lg hover:bg-green-700">
          + Add Event
        </button>

        <button className="bg-purple-600 text-white p-4 rounded-lg hover:bg-purple-700">
          + Add Student
        </button>

        <button className="bg-orange-500 text-white p-4 rounded-lg hover:bg-orange-600">
          Generate Report
        </button>

      </div>

    </div>
  );
}

export default QuickActions;