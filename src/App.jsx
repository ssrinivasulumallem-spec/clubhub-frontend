import { BrowserRouter, Routes, Route } from "react-router-dom";

import StudentDashboard from "./pages/student/StudentDashboard";
import ExploreClubs from "./pages/student/ExploreClubs";
import ClubDetails from "./pages/student/ClubDetails";


function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/student/dashboard"
          element={<StudentDashboard />}
        />


        <Route
          path="/clubs"
          element={<ExploreClubs />}
        />


        <Route
          path="/clubs/:id"
          element={<ClubDetails />}
        />

      </Routes>

    </BrowserRouter>

  );

}


export default App;