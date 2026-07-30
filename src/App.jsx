import DashboardLayout from "./layouts/DashboardLayout";
import Card from "./components/Card";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">
        ClubHub UI Foundation
      </h1>

      <Card
        title="Student Login"
        description="Reusable Input Component Example"
      >
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
        />

        <Button text="Login" variant="primary" />
      </Card>
    </DashboardLayout>
  );
}

export default App;