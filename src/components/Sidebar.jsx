import { NavLink } from "react-router-dom";
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
  const menuClass = ({ isActive }) =>
    `flex items-center gap-3 p-3 rounded-lg transition ${
      isActive
        ? "bg-blue-600"
        : "hover:bg-slate-700"
    }`;

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

          <li>
            <NavLink
              to="/student/dashboard"
              className={menuClass}
            >
              <HiOutlineHome className="text-xl" />
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/student/clubs"
              className={menuClass}
            >
              <HiOutlineUserGroup className="text-xl" />
              <span>Clubs</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/student/events"
              className={menuClass}
            >
              <HiOutlineCalendarDays className="text-xl" />
              <span>Events</span>
            </NavLink>
          </li>

          <li>
            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700 cursor-pointer transition">
              <HiOutlineSpeakerWave className="text-xl" />
              <span>Announcements</span>
            </div>
          </li>

          <li>
            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700 cursor-pointer transition">
              <HiOutlineCog6Tooth className="text-xl" />
              <span>Settings</span>
            </div>
          </li>

          <li>
            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-600 cursor-pointer transition">
              <HiOutlineArrowLeftOnRectangle className="text-xl" />
              <span>Logout</span>
            </div>
          </li>

        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;