import { BsFillBoxFill as Box } from "react-icons/bs";
import { PiUsersThreeFill as Users } from "react-icons/pi";
import {
  BiSolidCategory as CategoryIcon,
  BiLogoProductHunt as ProductIcon,
} from "react-icons/bi";

import Link from "next/link";

const Dashboard = () => {
  return (
    <>
      <div className="space-y-6 overflow-hidden">
        <div className="bg-[#FFFFFF] p-6 lg:p-8 rounded-2xl w-full shadow-sm grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="border-r border-[#ECECEE] flex items-stretch gap-3 ">
            <div className="bg-[#FFF2E9] p-4 rounded-2xl">
              <Box color={"#FF6A00"} size={20} />
            </div>
            <div className="flex flex-col justify-between">
              <Link
                href="/reports/orders"
                className="text-[#92959E] font-semibold text-sm"
              >
                Landlords
              </Link>
              <h1 className="text-[#15192C]">00</h1>
            </div>
          </div>
          <div className="lg:border-r border-[#ECECEE] flex items-stretch gap-3 ">
            <div className="bg-[#EAF9FF] p-4 rounded-2xl">
              <Users color={"#00B7FE"} size={20} />
            </div>
            <div className="flex flex-col justify-between">
              <h3 className="text-[#92959E] font-semibold text-sm">Tenants</h3>
              <h1 className="text-[#15192C]">00</h1>
            </div>
          </div>

          <div className="border-r border-[#ECECEE] flex items-stretch gap-3 ">
            <div className="bg-[#EDE8FF] p-4 rounded-2xl">
              <CategoryIcon color={"#551FFF"} size={20} />
            </div>
            <div className="flex flex-col justify-between">
              <h3 className="text-[#92959E] font-semibold text-sm">Sources</h3>
              <h1 className="text-[#15192C]">00</h1>
            </div>
          </div>

          <div className="flex items-stretch gap-3 ">
            <div className="bg-[#FFEBEF] p-4 rounded-2xl">
              <ProductIcon color={"#FD2254"} size={20} />
            </div>
            <div className="flex flex-col justify-between">
              <h3 className="text-[#92959E] font-semibold text-sm">Leads</h3>
              <h1 className="text-[#15192C]">00</h1>
            </div>
          </div>
        </div>
        {/* <Chart heading="Sales Report" data={salesData} />
        <Chart heading="Active Users" data={usersData} /> */}

        {/* <div className="bg-[#FFFFFF] p-4 rounded-2xl">
          <Table
            // @ts-expect-error
            columns={columns}
            data={
              ordersLoading || ordersFetching ? loadingData : ordersList || []
            }
            filterKey="address"
          />
        </div> */}
      </div>
    </>
  );
};

export default Dashboard;
