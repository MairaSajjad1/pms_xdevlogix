import {GET_PROPERTY_UNITS } from "@/http/constants";
import { authOptions } from "@/lib/auth";
import { PropertyUnit } from "@/types";
import Unit from "@/views/properties/unit";
import axios from "axios";
import { getServerSession } from "next-auth";

async function getPropertyUnits() {
  const session = await getServerSession(authOptions);
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}${GET_PROPERTY_UNITS}`,
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
  const propertyUnits: PropertyUnit[] = await getPropertyUnits();
  return <Unit propertyUnit ={propertyUnits} />;
};

export default page;
