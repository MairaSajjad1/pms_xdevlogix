import { addTokenToRequest } from "@/lib/utils";
import { Landlord } from "@/views/landlords-list";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const landlordService = createApi({
  reducerPath: "landlordService",
  tagTypes: ["landlord"],
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.NEXT_PUBLIC_API_BASE_URL ||
      "https://www.demo.pms.crossdevlogix.com/",

    prepareHeaders: async (headers, { getState }) => {
      headers.set("Accept", "application/json");
      await addTokenToRequest(headers, { getState });
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getLandlords: builder.query({
      query: () => ({
        url: `api/landlords/`,
        method: "GET",
      }),
      transformResponse: ({ data }: { data: Landlord [] }) =>
        data?.sort((a, b) => b.id - a.id),
      providesTags: ["landlord"],
    }),
  }),
});

export const {
  
  useGetLandlordsQuery,

} = landlordService;
export default landlordService;
