import { GET_LEASE } from "@/http/constants";
import { authOptions } from "@/lib/auth";
import { Lease } from "@/types";
import List from "@/views/lease/list";
import axios from "axios";
import { getServerSession } from "next-auth";

async function getLeases() {
  const session = await getServerSession(authOptions);
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}${GET_LEASE}`,
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
  const leases: Lease[] = await getLeases();
  return <List leases={leases} />;
};

export default page;
