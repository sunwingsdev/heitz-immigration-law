import { useState } from "react";
import moment from "moment";
import { useGetBookingsQuery } from "../../../redux/features/allApis/bookingApi/bookingApi";
import Loader from "../../../components/shared/Loader";
import Modal from "../../../components/shared/Modal";
import MailForm from "../../../components/shared/MailForm";

const DashboardBooking = () => {
  const { data: bookings, isLoading } = useGetBookingsQuery();
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [id, setId] = useState(null);
  const itemsPerPage = 5;

  const slots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ];

  const openModal = (id) => {
    setIsOpen(true);
    setId(id);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  if (isLoading) {
    return <Loader />;
  }

  const filteredBookings = bookings?.filter((booking) => {
    const matchesDate = selectedDate
      ? moment(booking.selectedDate).isSame(selectedDate, "day")
      : true;
    const matchesSlot = selectedSlot
      ? booking.selectedSlot === selectedSlot
      : true;
    const matchesSearch = searchTerm
      ? booking.name.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    return matchesDate && matchesSlot && matchesSearch;
  });

  const pageCount = Math.ceil((filteredBookings?.length || 0) / itemsPerPage);

  const handlePreviousClick = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < pageCount - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const currentBookings = filteredBookings?.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <>
      <div className="p-6">
        <h2 className="text-4xl font-bold mb-6">Booking Info :-</h2>
        <div className="mb-4 flex flex-col md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <label className="block mb-2 md:mb-0">
              Filter by Date:
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="ml-2 p-2 border rounded"
              />
            </label>
            <label className="block mb-2 md:mb-0">
              Filter by Slot:
              <select
                value={selectedSlot}
                onChange={(e) => setSelectedSlot(e.target.value)}
                className="ml-2 p-2 border rounded"
              >
                <option value="">Select Slot</option>
                {slots.map((slot, index) => (
                  <option key={index} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="mt-4 md:mt-0">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-2 border rounded"
              placeholder="Search by name"
            />
          </div>
        </div>
        <div className="py-4 bg-slate-100 border rounded">
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead className="text-base bg-gray-200">
                <tr>
                  <th className="px-4 py-2">S.n.</th>
                  <th className="px-4 py-2">Name & Email</th>
                  <th className="px-4 py-2">Number & Location</th>
                  <th className="px-4 py-2">Date & Time</th>
                  <th className="px-4 py-2">Comments</th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>
              <tbody className="text-base">
                {currentBookings?.length ? (
                  currentBookings.map(
                    (
                      {
                        _id,
                        name,
                        email,
                        number,
                        location,
                        selectedDate,
                        selectedSlot,
                        comments,
                        status,
                      },
                      i
                    ) => (
                      <tr key={_id} className="odd:bg-white even:bg-gray-100">
                        <td className="border px-4 py-2">
                          {currentPage * itemsPerPage + i + 1}
                        </td>
                        <td className="border px-4 py-2">
                          <div className="flex flex-col">
                            <span className="capitalize">{name}</span>
                            <span>{email}</span>
                          </div>
                        </td>
                        <td className="border px-4 py-2">
                          <div className="flex flex-col">
                            <span>{number}</span>
                            <span>{location}</span>
                          </div>
                        </td>
                        <td className="border px-4 py-2">
                          {moment(selectedDate).format("MMMM Do YYYY")} at{" "}
                          {selectedSlot}
                        </td>
                        <td className="border px-4 py-2">{comments}</td>
                        <td className="border px-4 py-2">
                          {status === "accepted" ? (
                            <p>Accepted</p>
                          ) : (
                            <button
                              onClick={() => openModal(_id)}
                              className="hover:bg-[#b90a18] bg-[#f10e21] px-3 py-1 text-white rounded opacity-90 capitalize"
                            >
                              accept
                            </button>
                          )}
                        </td>
                      </tr>
                    )
                  )
                ) : (
                  <tr>
                    <td colSpan="7" className="border px-4 py-2 text-center">
                      No bookings
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={handlePreviousClick}
              disabled={currentPage === 0}
              className="mx-2 p-2 border rounded disabled:opacity-50"
            >
              Previous
            </button>
            {Array.from({ length: pageCount }).map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageClick(index)}
                className={`mx-2 p-2 border rounded ${
                  currentPage === index ? "bg-gray-300" : ""
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={handleNextClick}
              disabled={currentPage === pageCount - 1}
              className="mx-2 p-2 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <MailForm id={id} closeModal={closeModal} />
      </Modal>
    </>
  );
};

export default DashboardBooking;
