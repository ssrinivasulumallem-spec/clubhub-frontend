import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/student/Dashboard";
import ExploreClubs from "./pages/student/ExploreClubs";
import ClubDetails from "./pages/student/ClubDetails";


function App() {

  return (
    <BrowserRouter>






<Routes>

  <Route
    path="/"
    element={<Dashboard />}
  />

  <Route
    path="/student/dashboard"
    element={<Dashboard />}
  />

  <Route
    path="/student/clubs"
    element={<ExploreClubs />}
  />

  <Route
    path="/student/clubs/:id"
    element={<ClubDetails />}
  />

</Routes>
    </BrowserRouter>
  );
}

export default App;