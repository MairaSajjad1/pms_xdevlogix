import { GET_TENANTS } from "@/http/constants";
import { authOptions } from "@/lib/auth";
import { Tenant } from "@/types";
import List from "@/views/tenant/list";
import axios from "axios";
import { getServerSession } from "next-auth";

async function getTenants() {
  const session = await getServerSession(authOptions);
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}${GET_TENANTS}`,
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
  const tenants: Tenant[] = await getTenants();
  return <List tenant = {tenants} />;
};

export default page;
