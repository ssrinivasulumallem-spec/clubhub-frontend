import StatCard from "./StatCard";

function DashboardCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <StatCard
        title="Total Clubs"
        value="15"
        color="text-blue-600"
      />

      <StatCard
        title="Total Students"
        value="850"
        color="text-green-600"
      />

    
      <StatCard
        title="Events Conducted"
        value="62"
        color="text-purple-600"
      />

    </div>
  );
}

export default DashboardCards;