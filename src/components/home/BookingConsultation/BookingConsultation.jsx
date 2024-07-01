import  { useState, useEffect } from "react";
import BookingCalendar from "./BookingCalendar";
import TimeSlot from "./TimeSlot";
import BookingForm from "./BookingForm";
import { format } from "date-fns";
import generateTimeSlots from "./generateTimeSlots";
import {
  useAddBookingSlotMutation,
  useGetBookingsQuery,
} from "../../../redux/features/allApis/bookingApi/bookingApi";
import { useToasts } from "react-toast-notifications";

const BookingConsultation = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [addBooking] = useAddBookingSlotMutation();
  const { data: bookings } = useGetBookingsQuery();
  const { addToast } = useToasts();

  useEffect(() => {
    if (selectedDate && bookings) {
      const formattedSelectedDate = format(selectedDate, "yyyy-MM-dd");
      const filtered = bookings.filter(
        (item) => format(new Date(item.selectedDate), "yyyy-MM-dd") === formattedSelectedDate
      );
      setFilteredBookings(filtered);
    }
  }, [selectedDate, bookings]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowForm(false);
  };

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
    setShowForm(true);
  };

  const handleFormSubmit = async (formData) => {
    console.log("Form Data Submitted:", formData);
    const formattedDate = format(formData.selectedDate, "yyyy-MM-dd");
    try {
      const result = await addBooking(formData);
      if (result.data.insertedId) {
        addToast(
          `Booked your slot at ${formattedDate} at ${formData.selectedSlot} Successfully`,
          { appearance: "success", autoDismiss: true }
        );
      }
    } catch (error) {
      addToast(error.message, { appearance: "error", autoDismiss: true });
    }
  };

  const availableSlots = generateTimeSlots("09:00", "16:00", 60);

  return (
    <div className="p-4 w-full md:w-1/2">
      <BookingCalendar onDateChange={handleDateChange} />
      {selectedDate && (
        <>
          <TimeSlot
            availableSlots={availableSlots}
            selectedSlot={selectedSlot}
            onSlotSelect={handleSlotSelect}
            filteredBookings={filteredBookings}
          />
          {showForm && (
            <BookingForm
              selectedDate={selectedDate}
              selectedSlot={selectedSlot}
              onSubmit={handleFormSubmit}
            />
          )}
        </>
      )}
    </div>
  );
};

export default BookingConsultation;
