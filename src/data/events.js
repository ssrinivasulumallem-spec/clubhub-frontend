import aiWorkshop from "../assets/events/ai-workshop.jpg";
import webDevBootcamp from "../assets/events/web-dev-bootcamp.jpg";
import roboticsChallenge from "../assets/events/robotics-challenge.jpg";
import photographyWalk from "../assets/events/photography-walk.jpg";
import Hackathon from "../assets/events/24-hour-hackathon.jpg";

const events = [
  {
    id: 1,
    title: "AI Workshop",
    club: "Coding Club",
    date: "10 Aug 2026",
    time: "10:00 AM",
    venue: "Seminar Hall",
    description:
      "Learn the fundamentals of Artificial Intelligence with practical demonstrations and beginner-friendly examples.",
    poster: aiWorkshop
  },
  {
    id: 2,
    title: "Web Development Bootcamp",
    club: "Web Club",
    date: "15 Aug 2026",
    time: "02:00 PM",
    venue: "Lab 3",
    description:
      "Build responsive websites using HTML, CSS, JavaScript, React and Tailwind CSS.",
    poster: webDevBootcamp
  },
  {
    id: 3,
    title: "Robotics Challenge",
    club: "Robotics Club",
    date: "20 Aug 2026",
    time: "11:00 AM",
    venue: "Innovation Lab",
    description:
      "Participate in an exciting robotics competition and showcase your engineering skills.",
    poster: roboticsChallenge
  },
  {
    id: 4,
    title: "Photography Walk",
    club: "Photography Club",
    date: "25 Aug 2026",
    time: "08:00 AM",
    venue: "College Campus",
    description:
      "Capture beautiful moments while learning photography techniques from experienced members.",
    poster: photographyWalk
  },
  {
    id: 5,
    title: "24-Hour Hackathon",
    club: "Coding Club",
    date: "30 Aug 2026",
    time: "09:00 AM",
    venue: "Main Auditorium",
    description:
      "Collaborate with teams to solve real-world problems and build innovative software projects.",
    poster: Hackathon
  }
];

export default events;