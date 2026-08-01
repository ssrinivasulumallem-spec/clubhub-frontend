import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import events from "../../data/events";
import EventCard from "../../components/student/EventCard";
import EventDetailsModal from "../../components/student/EventDetailsModal";

function Events() {
  // Selected event
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Search term
  const [searchTerm, setSearchTerm] = useState("");

  // Open modal
  const handleOpenModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setSelectedEvent(null);
    setIsModalOpen(false);
  };

  // Filter events
  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="p-6">

        {/* Heading */}
        <h1 className="text-3xl font-bold mb-6">
          Events
        </h1>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-96 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Event Cards */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onViewDetails={handleOpenModal}
              />
            ))}

          </div>
        ) : (
          <div className="text-center py-16">

            <div className="text-6xl mb-4">
              🔍
            </div>

            <h2 className="text-2xl font-semibold text-gray-700">
              No Events Found
            </h2>

            <p className="text-gray-500 mt-2">
              Try searching with another keyword.
            </p>

          </div>
        )}

        {/* Modal */}
        <EventDetailsModal
          event={selectedEvent}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />

      </div>
    </DashboardLayout>
  );
}

export default Events;