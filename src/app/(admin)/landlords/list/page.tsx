import { GET_LANDLORD } from "@/http/constants";
import { authOptions } from "@/lib/auth";
import { Landlord } from "@/types";
import List from "@/views/landlord/list";
import axios from "axios";
import { getServerSession } from "next-auth";

async function getLandlords() {
  const session = await getServerSession(authOptions);
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}${GET_LANDLORD}`,
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
  const landlords: Landlord[] = await getLandlords();
  return <List landlord ={landlords} />;
};

export default page;
