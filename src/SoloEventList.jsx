import React, { useState } from "react";

const soloEvents = ["Solo Dance", "Magic of Voice", "Doodle Art", "Mandala Art", "The Media Canvas", "Spandan Got Talent"];
const groupEvents = ["Group Dance", "Clash of Bands", "Street Play", "Movie Spoof", "Situational Antakshari", "Treasure Hunt", "Short Play", "Pirate Hunt"];

function EventDropdown() {
  const [eventType, setEventType] = useState("");
  const [eventList, setEventList] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState("");

  const handleEventTypeChange = (e) => {
    const type = e.target.value;
    setEventType(type);
    setSelectedEvent("");

    if (type === "Solo Event") {
      setEventList(soloEvents);
    } else if (type === "Group Event") {
      setEventList(groupEvents);
    } else {
      setEventList([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedData = {
      eventType,
      selectedEvent,
    };

    const fileName = "eventlist.json";
    const json = JSON.stringify(selectedData, null, 2);
    const blob = new Blob([json], { type: "application/json" });

    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = fileName;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(downloadLink.href);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-md mx-auto text-white mt-10"
    >
      <div>
        <label className="block mb-1">Choose Event Type:</label>
        <select
          className="w-full p-2 bg-black/80 border border-white/20 rounded"
          value={eventType}
          onChange={handleEventTypeChange}
          required
        >
          <option value="">-- Select Type --</option>
          <option value="Solo Event">Solo Events</option>
          <option value="Group Event">Group Events</option>
        </select>
      </div>

      {eventList.length > 0 && (
        <div>
          <label className="block mb-1">Select Event:</label>
          <select
            className="w-full p-2 bg-black/80 border border-white/20 rounded"
            value={selectedEvent}
            onChange={(e) => setSelectedEvent(e.target.value)}
            required
          >
            <option value="">-- Select Event --</option>
            {eventList.map((event, index) => (
              <option key={index} value={event}>
                {event}
              </option>
            ))}
          </select>
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-[#ff7559] text-white py-3 rounded-md font-bold tracking-widest hover:bg-white hover:text-black transition-all"
      >
        Submit
      </button>
    </form>
  );
}

export default EventDropdown;
