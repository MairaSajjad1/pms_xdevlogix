import { addTokenToRequest } from "@/lib/utils";
import { properties } from "@/views/property-list";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const PropertyService = createApi({
  reducerPath: "PropertyService",
  tagTypes: ["properties"],
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
    getProperties: builder.query({
      query: () => ({
        url: "api/properties",
        method: "GET",
      }),
      transformResponse: ({ data }: { data: Properties[] }) =>
        data?.sort((a, b) => b.id - a.id),
      providesTags: ["properties"],
    }),
  }),
});

export const { useGetPropertiesQuery } = PropertyService;

export default PropertyService; // Use PropertyService
