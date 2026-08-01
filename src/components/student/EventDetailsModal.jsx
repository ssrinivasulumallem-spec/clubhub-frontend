import { useState, useEffect } from "react";

function EventDetailsModal({ event, isOpen, onClose }) {
  const [isRegistered, setIsRegistered] = useState(false);

  // Reset register button whenever a new event is opened
  useEffect(() => {
    setIsRegistered(false);
  }, [event]);

  const handleRegister = () => {
    setIsRegistered(true);
  };

  if (!isOpen || !event) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-lg p-6 shadow-xl">
        <img
          src={event.poster}
          alt={event.title}
          className="w-full h-56 object-cover rounded-lg"
        />

        <h2 className="text-2xl font-bold mt-4">
          {event.title}
        </h2>

        <p className="text-blue-600 font-medium mt-1">
          {event.club}
        </p>

        <div className="mt-4 space-y-2 text-gray-700">
          <p>📅 {event.date}</p>
          <p>🕒 {event.time}</p>
          <p>📍 {event.venue}</p>
        </div>

        <p className="mt-5 text-gray-600">
          {event.description}
        </p>

        <div className="flex gap-3 mt-6">
          <button
            onClick={handleRegister}
            disabled={isRegistered}
            className={`flex-1 py-2 rounded-lg text-white font-medium transition ${
              isRegistered
                ? "bg-green-600 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isRegistered ? "✓ Registered" : "Register"}
          </button>

          <button
            onClick={onClose}
            className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            Close
          </button>
        </div>

        {isRegistered && (
          <p className="text-green-600 text-sm mt-4 text-center font-medium">
            🎉 Successfully registered for this event!
          </p>
        )}
      </div>
    </div>
  );
}

export default EventDetailsModal;