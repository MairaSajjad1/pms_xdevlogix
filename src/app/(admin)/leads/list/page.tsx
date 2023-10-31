import { GET_LEADS } from "@/http/constants";
import { authOptions } from "@/lib/auth";
import { Lead } from "@/types";
import List from "@/views/lead/list";
import axios from "axios";
import { getServerSession } from "next-auth";

async function getLeads() {
  const session = await getServerSession(authOptions);
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}${GET_LEADS}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.user?.token}`,
        },
        params: {
          per_page: -1,
        },
      }
    );

    return response.data.data;
  } catch (error) {
    return [];
  }
}

const page = async () => {
  const leads: Lead[] = await getLeads();
  return <List lead ={leads} />;
};

export default page;
