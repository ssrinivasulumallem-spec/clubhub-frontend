function RecentActivity() {

  const activities = [
    "Ravi joined Coding Club",
    "Photography Club created",
    "Dance Event Scheduled",
    "Coordinator assigned to Music Club",
    "AI Club approved",
    "New student registered",
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        Recent Activity
      </h2>

      <ul className="space-y-4">

        {activities.map((activity, index) => (

          <li
            key={index}
            className="border-b pb-3 flex items-center gap-3"
          >

            <span className="w-3 h-3 bg-blue-600 rounded-full"></span>

            <span>{activity}</span>

          </li>

        ))}

      </ul>

    </div>
  );
}

export default RecentActivity;