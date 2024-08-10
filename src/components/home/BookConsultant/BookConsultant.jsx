import { useContext } from "react";
import BookingConsultation from "../BookingConsultation/BookingConsultation";
import ConsultantDetails from "../ConsultantDetails/ConsultantDetails";
import { ScrollContext } from "../../../providers/ScrollProvider";

const BookConsultant = () => {
  const { targetRef } = useContext(ScrollContext);
  return (
    <div
      ref={targetRef}
      className="flex flex-col md:flex-row items-start justify-center gap-6 border-2 p-2 md:p-12"
    >
      <ConsultantDetails />
      <BookingConsultation />
    </div>
  );
};

export default BookConsultant;
