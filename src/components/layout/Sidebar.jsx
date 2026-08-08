import { useNavigate } from "react-router-dom";

import {
  HiOutlineHome,
  HiOutlineUserGroup,
  HiOutlineCalendarDays,
  HiOutlineSpeakerWave,
  HiOutlineCog6Tooth,
  HiOutlineArrowLeftOnRectangle,
  HiOutlineAcademicCap,
} from "react-icons/hi2";

function Sidebar() {
  const navigate = useNavigate();
  return (
    <aside className="w-64 h-screen bg-slate-800 text-white p-5">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-8">
        <HiOutlineAcademicCap className="text-3xl text-blue-400" />
        <h2 className="text-2xl font-bold">
          ClubHub
        </h2>
      </div>

      <nav>
        <ul className="space-y-3">

  <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700 cursor-pointer">
    <a href="/#dashboard" className="flex items-center gap-3 w-full">
      <HiOutlineHome className="text-xl" />
      <span>Dashboard</span>
    </a>
  </li>



  <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700 cursor-pointer">
    <a href="/#manage-clubs" className="flex items-center gap-3 w-full">
      <HiOutlineCalendarDays className="text-xl" />
      <span>Manage Clubs</span>
    </a>
  </li>

  <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700 cursor-pointer">
    <a href="/#recent-activity" className="flex items-center gap-3 w-full">
      <HiOutlineSpeakerWave className="text-xl" />
      <span>Recent Activity</span>
    </a>
  </li>


  <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700 cursor-pointer">
    <a href="/#student-registration" className="flex items-center gap-3 w-full">
      <HiOutlineCalendarDays className="text-xl" />
      <span>Studen Registrations</span>
    </a>
  </li>

  <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700 cursor-pointer">
    <a href="/#assign-coordinators" className="flex items-center gap-3 w-full">
      <HiOutlineSpeakerWave className="text-xl" />
      <span>Assign Coordinators</span>
    </a>
  </li>

  




            <li
  onClick={() => navigate("/settings")}
  className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700 cursor-pointer transition"
>
  <HiOutlineCog6Tooth className="text-xl" />
  <span>Settings</span>
</li>
          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-600 cursor-pointer">
    <a href="/#logout" className="flex items-center gap-3 w-full">
      <HiOutlineArrowLeftOnRectangle className="text-xl" />
      <span>Logout</span>
    </a>
  </li>


        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;