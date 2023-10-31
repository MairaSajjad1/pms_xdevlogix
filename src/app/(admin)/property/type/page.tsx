import { GET_PROPERTY_TYPES } from "@/http/constants";
import { authOptions } from "@/lib/auth";
import { PropertyType } from "@/types";
import Type from "@/views/properties/type";
import axios from "axios";
import { getServerSession } from "next-auth";

async function getPropertyTypes() {
  const session = await getServerSession(authOptions);
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}${GET_PROPERTY_TYPES}`,
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
  const propertyTypes: PropertyType[] = await getPropertyTypes();
  return <Type propertyType ={propertyTypes} />;
};

export default page;
