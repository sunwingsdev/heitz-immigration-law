import baseApi from "../../baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // add booking slot
    addBookingSlot: builder.mutation({
      query: (data) => ({
        url: "/booking",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["bookings"],
    }),

    // get all bookings
    getBookings: builder.query({
      query: () => "/booking",
      providesTags: ["bookings"],
    }),
  }),
});

export const { useAddBookingSlotMutation, useGetBookingsQuery } = bookingApi;
