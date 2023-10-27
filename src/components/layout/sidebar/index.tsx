import { FC, useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import { AiOutlineCloseCircle as CloseCircle } from "react-icons/ai";
import {
  HiOutlineUserCircle as UserCircle,
  HiOutlineLocationMarker as Location,
} from "react-icons/hi";
import {
  BsArrowRight as Right,
  BsArrowLeft as Left,
  BsUnity as Unit,
} from "react-icons/bs";
import { FiSettings as Settings } from "react-icons/fi";
import {
  RiContactsBook2Line as Contacts,
  RiEBike2Line as Rider,
  RiProductHuntLine as Product,
} from "react-icons/ri";
import { MdOutlineAddShoppingCart as Purchase } from "react-icons/md";
import {
  BiCategory as Category,
  BiDollarCircle as Buisness,
  BiBarcodeReader as Barcode,
} from "react-icons/bi";
import { TbReceiptTax as Tax } from "react-icons/tb";
import { PiCertificateBold as Brand } from "react-icons/pi";
// import { GrNotes as Report } from "react-icons/gr";
import { FaListOl as Products } from "react-icons/fa";
import { LuLayoutDashboard as Dashboard } from "react-icons/lu";
import { LuBarChart2 as Report } from "react-icons/lu";
// Custom Components
import MenuItem from "./MenuItem";

// Custom Icons
import {
  HomeIcon,
  VariationIcon,
  OrderIcon,
  ServiceIcon,
  UserManagementIcon,
  ServicesIcon,
  ListIcon,
  UnitIcon,
} from "@/assets/icons";

import { MenuIcon } from "@/assets/icons";
interface SidebarProps {
  openSidebar: boolean;
  toggleSidebar: () => void;
  toggleOpen: () => void;
  open: boolean;
}

const Sidebar: FC<SidebarProps> = ({
  openSidebar,
  toggleSidebar,
  toggleOpen,
  open,
}) => {
  const navBarItems = [
    { label: "Dashboard", icon: <Dashboard size={20} />, slug: "/dashboard" },
    {
      label: "Customers",
      icon: <UserManagementIcon />,
      childrens: [
        {
          label: "Users",
          icon: <UserCircle size={20} />,
          slug: "/customer/users",
        },
      ],
    },
    {
      label: "Tenants",
      icon: <ServicesIcon />,
      childrens: [
        {
          label: "Tenants list",
          icon: <ServiceIcon />,
          slug: "/tenants/tenants-list",
        },
      ],
    },
    {
      label: "Landlords",
      icon: <Product size={20} />,
      childrens: [
        {
          label: "Landlord List",
          icon: <Products size={20} />,
          slug: "/landlords/landlords-list",
        },
      ],
    },
    {
      label: "Property",
      icon: <OrderIcon />,
      childrens: [
        {
          label: "Property List",
          icon: <ListIcon />,
          slug: "/orders/orders-list",
        },
        {
          label: "Property units",
          icon: <ListIcon />,
          slug: "/orders/orders-list",
        },
      ],
    },
    {
      label: "Leases",
      icon: <Contacts size={20} />,
      childrens: [
        {
          label: "Leases List",
          icon: <Rider size={20} />,
          slug: "/leases/list",
        },
      ],
    }
  ];

  const toggleIsHovered = () => {
    if (!open) toggleOpen();
  };

  const sidebarContainerClasses = classNames(
    "fixed duration-500 top-0 scrollbar overflow-y-scroll bg-[#ffffff] md:left-0 pt-5 pb-2 z-40  bottom-0  h-full border-r border-[#F0F0F0] flex flex-col justify-between",
    {
      "-left-80": !openSidebar,
      "left-0": openSidebar,
      "md:w-14": !open,
      "md:w-56": open,
    }
  );

  return (
    <>
      <div className={sidebarContainerClasses}>
        <div className="relative">
          <div
            onClick={toggleSidebar}
            className={`fixed  z-40 md:hidden text-[#4f46e5] top-10  cursor-pointer bg-[#ffffff] rounded-full border-r border-[#4f46e5] p-2 duration-500 ${
              openSidebar ? "left-[199px]" : "-left-80"
            }`}
            aria-label="Close Sidebar"
          >
            <CloseCircle />
          </div>
          <div
            onClick={toggleOpen}
            className={`fixed duration-500  z-40 hidden md:block rounded-full border border-[#F0F0F0] p-1  cursor-pointer bg-[#FFFFFF] ${
              open ? "left-52" : "left-11"
            }`}
          >
            {open ? <Left /> : <Right />}
            {/* <MenuIcon /> */}
          </div>
          <div
            onMouseEnter={toggleIsHovered}
            onMouseLeave={toggleIsHovered}
            className="w-full flex-1 px-2 flex flex-col justify-center space-y-2"
          >
            <div className="flex items-center justify-center">
              <Image
                src={"/assets/images/logo.png"}
                alt="logo"
                width={60}
                height={60}
                priority
              />
            </div>
            <div className="flex-1 space-y-1">
              {navBarItems.map((item, index) => {
                const { icon, label, slug, childrens } = item;
                return (
                  <MenuItem
                    open={open}
                    key={index}
                    icon={icon}
                    label={label}
                    slug={slug}
                    childrens={childrens}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
