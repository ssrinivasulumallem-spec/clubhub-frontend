import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", students: 40 },
  { month: "Feb", students: 55 },
  { month: "Mar", students: 70 },
  { month: "Apr", students: 90 },
  { month: "May", students: 120 },
  { month: "Jun", students: 150 },
];

function DashboardChart() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        Student Registrations
      </h2>

      <ResponsiveContainer width="100%" height={300}>

        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Bar dataKey="students" fill="#2563eb" radius={[8,8,0,0]} />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}

export default DashboardChart;