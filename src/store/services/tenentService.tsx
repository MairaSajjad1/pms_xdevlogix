import { addTokenToRequest } from "@/lib/utils";
import { Tenants } from "@/views/Tenants-list";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tenantService = createApi({
  reducerPath: "tenantService",
  tagTypes: ["tenant"],
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
    getTenants: builder.query({
      query: ({ buisnessId }) => ({
        url: `api/tenants`,
        method: "GET",
      }),
      transformResponse: ({ data }: { data: Tenants [] }) =>
        data?.sort((a, b) => b.id - a.id),
      providesTags: ["tenant"],
    }),
  }),
});

export const {
  
  useGetTenantsQuery,

} = tenantService;
export default tenantService;
