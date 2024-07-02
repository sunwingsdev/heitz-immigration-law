import BookingConsultation from "../BookingConsultation/BookingConsultation";
import ConsultantDetails from "../ConsultantDetails/ConsultantDetails";

const BookConsultant = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-center gap-6 border-2 p-2 md:p-12">
      <ConsultantDetails />
      <BookingConsultation />
    </div>
  );
};

export default BookConsultant;
