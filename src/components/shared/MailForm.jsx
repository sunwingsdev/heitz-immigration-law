import { useForm } from "react-hook-form";
import {
  useGetBookingsQuery,
  useUpdateBookingMutation,
} from "../../redux/features/allApis/bookingApi/bookingApi";
import { useToasts } from "react-toast-notifications";
import { useState } from "react";

const MailForm = ({ id, closeModal }) => {
  const { data: bookings } = useGetBookingsQuery();
  const [updateBooking] = useUpdateBookingMutation();
  const [loading, setLoading] = useState(false);
  const { addToast } = useToasts();
  const selectedBooking = bookings?.find((booking) => booking._id === id);

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const result = await updateBooking({ id, data });
      console.log(result);
      if (result.data.modifiedCount > 0) {
        setLoading(false);
        closeModal();
        addToast("Booking accepted and mail has been sent", {
          appearance: "success",
          autoDismiss: true,
        });
      }
    } catch (error) {
      setLoading(false);
      addToast(error.message, { appearance: "error", autoDismiss: true });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>To: {selectedBooking?.email}</p>
      <div className="mb-4">
        <label className="block mb-1">
          Please share anything that will help prepare for our meeting.
        </label>
        <textarea
          className="w-full p-2 border rounded"
          {...register("message")}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full p-2 bg-blue-500 text-white rounded"
      >
        {loading ? "Sending mail" : "Send mail"}
      </button>
    </form>
  );
};

export default MailForm;
