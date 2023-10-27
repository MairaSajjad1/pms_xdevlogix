import { GET_SOURCE } from "@/http/constants";
import { authOptions } from "@/lib/auth";
import { Source } from "@/types";
import List from "@/views/source/list";
import axios from "axios";
import { getServerSession } from "next-auth";

async function getSources() {
  const session = await getServerSession(authOptions);
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}${GET_SOURCE}`,
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
    // console.log("API Response:", response.data);
    return response.data.data;
  } catch (error) {
    console.error("API Request Error:", error);
    return [];
  }
}

const page = async () => {
  const sources: Source[] = await getSources();
  return <List source ={sources} />;
};

export default page;
