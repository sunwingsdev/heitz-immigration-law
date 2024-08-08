// src/components/BookingForm.js
import { useForm } from "react-hook-form";

const BookingForm = ({ selectedDate, selectedSlot, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit({
      ...data,
      selectedDate,
      selectedSlot,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="mt-4 p-4 border rounded"
    >
      <h3 className="text-lg font-semibold mb-4">Enter Your Details</h3>
      <div className="mb-4">
        <label className="block mb-1">Name</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block mb-1">Email</label>
        <input
          type="email"
          className="w-full p-2 border rounded"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block mb-1">Phone Number</label>
        <input
          type="tel"
          className="w-full p-2 border rounded"
          {...register("number", { required: "Phone number is required" })}
        />
        {errors.number && (
          <p className="text-red-500">{errors.number.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block mb-1">Preferred Method of Consultation</label>
        <select
          className="w-full p-2 border rounded"
          {...register("option", { required: "Please select an option" })}
        >
          <option value="phone-call">Phone Call</option>
          <option value="zoom">Zoom</option>
          <option value="face-to-face">Face to face</option>
        </select>
        {errors.option && (
          <p className="text-red-500">{errors.option.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block mb-1">
          Please share anything that will help prepare for our meeting(country,
          visa processing, details etc.).
        </label>
        <textarea
          className="w-full p-2 border rounded"
          {...register("comments")}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Location (if applicable)</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          {...register("location")}
        />
      </div>
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default BookingForm;
