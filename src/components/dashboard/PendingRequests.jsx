function PendingRequests() {

  const requests = [
    {
      id: 1,
      student: "Ravi Kumar",
      club: "Coding Club",
      date: "28 Jul 2026",
      status: "Pending",
    },
    {
      id: 2,
      student: "Priya",
      club: "Dance Club",
      date: "29 Jul 2026",
      status: "Pending",
    },
    {
      id: 3,
      student: "Akhil",
      club: "Photography Club",
      date: "30 Jul 2026",
      status: "Pending",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        Pending Join Requests
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full border-collapse">

          <thead>

            <tr className="bg-gray-100">

              <th className="p-3 text-left">Student</th>

              <th className="p-3 text-left">Club</th>

              <th className="p-3 text-left">Date</th>

              <th className="p-3 text-left">Status</th>

              <th className="p-3 text-center">Action</th>

            </tr>

          </thead>

          <tbody>

            {requests.map((item) => (

              <tr
                key={item.id}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-3">{item.student}</td>

                <td className="p-3">{item.club}</td>

                <td className="p-3">{item.date}</td>

                <td className="p-3">

                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                    {item.status}
                  </span>

                </td>

                <td className="p-3 text-center">

                  <button className="bg-green-500 text-white px-3 py-1 rounded mr-2 hover:bg-green-600">
                    Approve
                  </button>

                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                    Reject
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default PendingRequests;