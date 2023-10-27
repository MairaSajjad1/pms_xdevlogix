import { GET_LEASE_INSTALLMENT } from "@/http/constants";
import { authOptions } from "@/lib/auth";
import { Installment } from "@/types";
import Installments from "@/views/lease/installments";
import axios from "axios";
import { getServerSession } from "next-auth";

async function getInstallements(id: string) {
  const session = await getServerSession(authOptions);
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}${GET_LEASE_INSTALLMENT}${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.user?.token}`,
        },
      }
    );

    return response.data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

const page = async ({
  params,
}: {
  params: {
    leaseId: string;
  };
}) => {
  const { leaseId } = params;
  const installments: Installment[] = await getInstallements(leaseId);
  return <Installments installments={installments} />;
};

export default page;
