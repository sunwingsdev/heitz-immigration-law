const TimeSlot = ({
  availableSlots,
  selectedSlot,
  onSlotSelect,
  filteredBookings,
}) => {
  const isSlotBooked = (slot) => {
    return filteredBookings?.some((booking) => booking.selectedSlot === slot);
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {availableSlots.map((slot, index) => (
          <button
            key={index}
            className={`p-2 border rounded ${
              selectedSlot === slot
                ? "bg-blue-500 text-white"
                : isSlotBooked(slot)
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "hover:bg-blue-500 hover:text-white"
            }`}
            onClick={() => !isSlotBooked(slot) && onSlotSelect(slot)}
            disabled={isSlotBooked(slot)}
          >
            {slot}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeSlot;
