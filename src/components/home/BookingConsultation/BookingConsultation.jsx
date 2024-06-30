// src/components/BookingConsultation.js
import { useState } from "react";
import BookingCalendar from "./BookingCalendar";
import TimeSlot from "./TimeSlot";
import { format, parse } from "date-fns";

const availableSlots = [
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
];

const BookingConsultation = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
  };

  const handleSubmit = () => {
    if (selectedDate && selectedSlot) {
      // Combine selected date and time slot into one datetime string
      const formattedDate = format(selectedDate, "yyyy-MM-dd");
      const datetimeString = `${formattedDate} ${selectedSlot}`;
      const combinedDateTime = parse(datetimeString, "yyyy-MM-dd hh:mm a", new Date());
      console.log(`Consultation booked for ${combinedDateTime}`);
      console.log(`Formatted DateTime: ${format(combinedDateTime, "yyyy-MM-dd HH:mm:ss")}`);
    } else {
      console.log("Please select both a date and a time slot.");
    }
  };

  return (
    <div className="p-4">
      <BookingCalendar onDateChange={handleDateChange} />
      {selectedDate && (
        <TimeSlot
          availableSlots={availableSlots}
          selectedSlot={selectedSlot}
          onSlotSelect={handleSlotSelect}
        />
      )}
      {selectedDate && selectedSlot && (
        <button
          className="mt-4 p-2 bg-blue-500 text-white rounded"
          onClick={handleSubmit}
        >
          Confirm Booking
        </button>
      )}
      {selectedDate && selectedSlot && (
        <p className="mt-4">
          Selected Date and Time: {format(selectedDate, "PPP")} {selectedSlot}
        </p>
      )}
    </div>
  );
};

export default BookingConsultation;
