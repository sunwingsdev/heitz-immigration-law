import moment from "moment";
import { useGetBookingsQuery } from "../../../redux/features/allApis/bookingApi/bookingApi";

const DashboardBooking = () => {
  const { data: bookings, isLoading } = useGetBookingsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="py-6 px-6">
      <h2 className="text-4xl font-bold mb-6">Booking Info :-</h2>
      <div className="py-4 bg-slate-100 border">
        <div className="overflow-x-auto">
          <table className="table">
            <thead className="text-base">
              <tr>
                <th>S.n.</th>
                <th>Name & Email</th>
                <th>Number & Location</th>
                <th className="min-w-60">Date & Time</th>
                <th>Comments</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-base">
              {bookings?.length ? (
                bookings.map(
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
                    <tr key={_id}>
                      <th>{i + 1}</th>
                      <td className="flex flex-col">
                        <span className="capitalize">{name}</span>{" "}
                        <span>{email}</span>
                      </td>
                      <td>
                        <span>{number}</span>, <span>{location}</span>
                      </td>
                      <td>
                        {moment(selectedDate).format("MMMM Do YYYY")} at{" "}
                        {selectedSlot}
                      </td>
                      <td>{comments}</td>
                      <td>{status}</td>
                    </tr>
                  )
                )
              ) : (
                <tr>
                  <td colSpan="7" className="text-center">
                    No bookings
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardBooking;
