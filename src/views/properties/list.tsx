// "use client"
// import { FC, useCallback, useEffect, useMemo, useState } from "react";
// import toast from "react-hot-toast";
// import { ColumnDef } from "@tanstack/react-table";
// import { GoPlusCircle as PlusCircle } from "react-icons/go";
// import Table from "@/components/table";
// import { DataTableColumnHeader } from "@/components/table/data-table-column-header";
// import { DataTableRowActions } from "@/components/table/data-table-row-actions";
// import { Skeleton } from "@/components/ui/skeleton";
// import { Separator } from "@/components/ui/separator";
// import { Button } from "@/components/ui/button";
// import DeleteModal from "@/components/modal/delete-modal";
// import { useGetLandlordsQuery } from "@/store/services/landlordService";
// import { useSession } from "next-auth/react";

// export interface properties {
//     id: number
//     name: string
//     rent: string
//     propertytype_id: number
//     landlord_id: number
//     area: string
//     agency: string
//     deposit: string
//     description: string
//     property_status: number
//     bussniess_id: number
//     created_at: string
//     updated_at: string
//     rent_sale: string
//     amenities: Amenities
//     property_images: PropertyImages
//     location: Location
//     propertytype: Propertytype
//     landlord: Landlord
//   }
  
//   export interface Amenities {
//     id: number
//     property_id: number
//     propertynote: string
//     age: string
//     room: string
//     bedroom: any
//     bathroom: any
//     animities: string
//     created_at: string
//     updated_at: string
//   }
  
//   export interface PropertyImages {
//     id: number
//     property_id: number
//     propertyimage: string
//     created_at: string
//     updated_at: string
//     image_url: string
//   }
  
//   export interface Location {
//     id: number
//     property_id: number
//     search: string
//     address: string
//     city: string
//     state: string
//     post: string
//     created_at: string
//     updated_at: string
//   }
  
//   export interface Propertytype {
//     id: number
//     type: string
//     description: any
//     bussniess_id: number
//     created_at: string
//     updated_at: string
//   }
  
//   export interface Landlord {
//     id: number
//     bussniess_id: number
//     full_name: string
//     email: string
//     number: string
//     identity: any
//     image: any
//     address: string
//     occupation: string
//     account: string
//     created_at: string
//     updated_at: string
//     leads_id: any
//     image_url: string
//   }

// const Properties: FC = () => {
//   const { data: session } = useSession();

//   // GET
//   const {
//     data: propertiesList,
//     isLoading: propertiesLoading,
//     isFetching: propertiesFetching,
//   } = useGetLandlordsQuery({
//     buisnessId: session?.user?.business_id,
//   });
 
//   const [open, setOpen] = useState<boolean>(false);
//   const [openDelete, setOpenDelete] = useState<boolean>(false);

//   const [selectedProperties, setSelectedProperties] = useState< Properties | null>(null);

//   const columns: ColumnDef< Properties | null>[] = useMemo(
//     () => [
//       {
//         accessorKey: "name",
//         header: ({ column }) => (
//           <DataTableColumnHeader column={column} title="Name" />
//         ),
//         cell: ({ row }) => (
//           <>
//             {row?.original ? (
//               <div>{row.getValue("full_name")}</div>
//             ) : (
//               <Skeleton className="w-40 h-4 bg-[#F5f5f5]" />
//             )}
//           </>
//         ),
//         enableSorting: true,
//         enableHiding: false,
//       },
//       {
//         accessorKey: "area",
//         header: ({ column }) => (
//           <DataTableColumnHeader column={column} title="Area" />
//         ),
//         cell: ({ row }) => (
//           <>
//             {row?.original ? (
//               <div>{row.getValue("area")}</div>
//             ) : (
//               <Skeleton className="w-40 lg:w-56 h-4 bg-[#F5f5f5]" />
//             )}
//           </>
//         ),
//         enableSorting: false,
//         enableHiding: true,
//       },
//       {
//         accessorKey: "description",
//         header: ({ column }) => (
//           <DataTableColumnHeader column={column} title="Description" />
//         ),
//         cell: ({ row }) => (
//           <>
//             {row?.original ? (
//               <div>{row.getValue("description")}</div>
//             ) : (
//               <Skeleton className={`w-10 lg:w-16 h-4 bg-[#F5f5f5]`} />
//             )}
//           </>
//         ),
//         enableSorting: true,
//         enableHiding: true,
//       },
//       {
//         id: "actions",
//         cell: ({ row }) => (
//           <DataTableRowActions
//             deleteAction={handleDelete}
//             editAction={handleEdit}
//             row={row}
//           />
//         ),
//       },
//     ],
//     []
//   );

//   const loadingData = Array.from({ length: 10 }, () => null);

//   const toggleModal = useCallback(() => {
//     setOpen((open) => !open);
//   }, [open]);

//   const toggleDeleteModal = useCallback(() => {
//     setOpenDelete((open) => !open);
//   }, [openDelete]);

//   const handleEdit = (data: Properties | null) => {
//     setSelectedProperties(data);
//     toggleModal();
//   };

//   const handleDelete = (data: Properties | null) => {
//     setSelectedProperties(data);
//     toggleDeleteModal();
//   };

//   const confirmDelete = () => {
//     toast.error("Delete API is not implemented yet.");
//     toggleDeleteModal();
//   };

//   useEffect(() => {
//     if (!open && !openDelete) {
//       setSelectedProperties(null);
//     }
//   }, [open, openDelete]);

//   return (
//     <>
//       <div className="bg-[#FFFFFF] p-2 rounded-md overflow-hidden space-y-4">
//         <div className="flex items-center justify-between">
//           <div>
//             <h1 className="font-semibold text-xl text-[#4741E1]">Landlords</h1>
//             <p className="font-medium text-sm">A List of all the landlords</p>
//           </div>
//         </div>
//         <Separator />
//         <Table
//         // @ts-expect-error
//           columns={columns}
//           data={
//             propertiesLoading || propertiesFetching
//               ? loadingData
//               : propertiesList || []
//           }
//           filterKey="full_name"
//         />
//       </div>
//       <DeleteModal
//         open={openDelete}
//         setOpen={toggleDeleteModal}
//         loading={false}
//         confirmDelete={confirmDelete}
//       />
//     </>
//   );
// };

// export default Properties;
