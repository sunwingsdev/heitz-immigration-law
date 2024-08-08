import { useForm } from "react-hook-form";
import {
  useGetBookingsQuery,
  useUpdateBookingMutation,
} from "../../redux/features/allApis/bookingApi/bookingApi";
import { useToasts } from "react-toast-notifications";
import { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the styles
import { imageUpload } from "../../apis/api";

const MailForm = ({ id, closeModal }) => {
  const { data: bookings } = useGetBookingsQuery();
  const [updateBooking] = useUpdateBookingMutation();
  const [loading, setLoading] = useState(false);
  const { addToast } = useToasts();
  const selectedBooking = bookings?.find((booking) => booking._id === id);

  const { handleSubmit, setValue } = useForm();
  const quillRef = useRef(null);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      setLoading(true);
      const result = await updateBooking({ id, data });
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

  const handleQuillChange = (value) => {
    setValue("message", value); // Set the value in react-hook-form
  };

  const imageHandler = async () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      try {
        const imageData = await imageUpload(file);
        if (imageData && imageData?.url) {
          const quill = quillRef.current.getEditor(); // Get the Quill editor instance
          const range = quill.getSelection();
          if (range) {
            quill.insertEmbed(range.index, "image", imageData?.url);
          } else {
            quill.insertEmbed(0, "image", imageData?.url);
          }
        } else {
          throw new Error("Image upload failed");
        }
      } catch (error) {
        console.error("Error uploading image: ", error.message);
        addToast("Error uploading image: " + error.message, {
          appearance: "error",
          autoDismiss: true,
        });
      }
    };
  };

  const modules = {
    toolbar: {
      container: [
        [{ header: "1" }, { header: "2" }, { font: [] }],
        [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image", "video"],
        ["clean"],
      ],
      handlers: {
        image: imageHandler,
      },
    },
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>To: {selectedBooking?.email}</p>
      <div className="mb-4">
        <label className="block mb-1">
          Please share anything that will help prepare for our meeting.
        </label>
        <ReactQuill
          ref={quillRef}
          theme="snow"
          onChange={handleQuillChange}
          modules={modules}
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full p-2 bg-blue-500 text-white rounded disabled:bg-slate-500"
      >
        {loading ? "Sending mail..." : "Send mail"}
      </button>
    </form>
  );
};

export default MailForm;
