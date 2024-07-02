// src/components/BookingCalendar.js
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";
import { useState } from "react";

const BookingCalendar = ({ onDateChange }) => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    onDateChange(selectedDate);
  };

  return (
    <div className="w-full space-y-3">
      <h2 className="text-xl font-bold">Select a Date & Time</h2>
      <Calendar onChange={handleDateChange} value={date} />
      <p className="">Selected Date: {format(date, "PPP")}</p>
    </div>
  );
};

export default BookingCalendar;
