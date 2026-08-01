function EventCard({ event, onViewDetails }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <img
        src={event.poster}
        alt={event.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800">
          {event.title}
        </h2>

        <p className="text-blue-600 font-medium mt-1">
          {event.club}
        </p>

        <div className="mt-4 space-y-2 text-gray-600 text-sm">
          <p>📅 {event.date}</p>
          <p>🕒 {event.time}</p>
          <p>📍 {event.venue}</p>
        </div>

        <button
          onClick={() => onViewDetails(event)}
          className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default EventCard;