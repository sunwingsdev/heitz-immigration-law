import baseApi from "../../baseApi";

const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // add user
    addUser: builder.mutation({
      query: (data) => ({
        url: "/users",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
    // get all users
    getUser: builder.query({
      query: () => "/users",
      providesTags: ["users"],
    }),
  }),
});

export const { useAddUserMutation, useGetUserQuery } = usersApi;
