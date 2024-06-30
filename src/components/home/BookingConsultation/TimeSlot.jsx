// src/components/TimeSlot.js
const TimeSlot = ({ availableSlots, selectedSlot, onSlotSelect }) => {
    return (
      <div>
        <h2>Select a Time Slot</h2>
        <div className="grid grid-cols-3 gap-4">
          {availableSlots.map((slot, index) => (
            <button
              key={index}
              className={`p-2 border rounded ${
                selectedSlot === slot ? "bg-blue-500 text-white" : "hover:bg-gray-200"
              }`}
              onClick={() => onSlotSelect(slot)}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default TimeSlot;
  