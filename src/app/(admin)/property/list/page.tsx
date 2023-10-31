import { GET_PROPERTY_LIST } from "@/http/constants";
import { authOptions } from "@/lib/auth";
import { PropertyList } from "@/types";
import List from "@/views/properties/list";
import axios from "axios";
import { getServerSession } from "next-auth";

async function getProperties() {
  const session = await getServerSession(authOptions);
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}${GET_PROPERTY_LIST}`,
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
  const properties: PropertyList[] = await getProperties();
  return <List properties ={properties} />;
};

export default page;
