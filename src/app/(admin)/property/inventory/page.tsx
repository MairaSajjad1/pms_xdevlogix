import { GET_PROPERTY_INVENTORY } from "@/http/constants";
import { authOptions } from "@/lib/auth";
import { PropertyInventory } from "@/types";
import Inventory from "@/views/properties/inventory";
import axios from "axios";
import { getServerSession } from "next-auth";

async function getProperties() {
  const session = await getServerSession(authOptions);
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}${GET_PROPERTY_INVENTORY}`,
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
  const propertyInventory: PropertyInventory[] = await getProperties();
  return <Inventory propertyInventory ={propertyInventory} />;
};

export default page;
