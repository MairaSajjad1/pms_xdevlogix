"use client";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import toast from "react-hot-toast";
import { GoPlusCircle as PlusCircle } from "react-icons/go";
import Table from "@/components/table";
import { DataTableColumnHeader } from "@/components/table/data-table-column-header";
import { DataTableRowActions } from "@/components/table/data-table-row-actions";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import DeleteModal from "@/components/modal/delete-modal";
import { useSession } from "next-auth/react";
import { useGetTenantsQuery } from "@/store/services/tenentService";


export interface Tenants {
  id: number
  full_name: string
  email: string
  number: string
  identity: string
  image: string
  address: string
  occupation: string
  place: string
  emrgency_name: any
  emrgency_number: any
  name: string
  phone: string
  created_at: string
  updated_at: string
  bussniess_id: number
  leads_id: any
  image_url: string
}

const Tenants : FC = () => {
  const { data: session } = useSession();
  // GET
  const {
    data: tenants,
    isLoading: tenantsLoading,
    isFetching: tenantsFetching,
  } = useGetTenantsQuery({
    buisnessId: session?.user?.business_id,
    customerId: session?.user?.customer_id,
    perPage: -1,
  });

  const [open, setOpen] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);

  const [selectedTenant, setSelectedTenant] = useState<Tenants | null>(null);


  const columns: ColumnDef<Tenants | null>[] = useMemo(
    () => [
      {
        accessorKey: "full_name",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Name" />
        ),
        cell: ({ row }) => (
          <>
            {row?.original ? (
              <div>{row.getValue("full_name")}</div>
            ) : (
              <Skeleton className="w-40 h-4 bg-[#F5f5f5]" />
            )}
          </>
        ),
        enableSorting: true,
        enableHiding: false,
      },
      {
        accessorKey: "occupation",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Occupation" />
        ),
        cell: ({ row }) => (
          <>
            {row?.original ? (
              <div>{row.getValue("occupation")}</div>
            ) : (
              <Skeleton className="w-40 lg:w-56 h-4 bg-[#F5f5f5]" />
            )}
          </>
        ),
        enableSorting: false,
        enableHiding: true,
      },
      {
        accessorKey: "address",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Address" />
        ),
        cell: ({ row }) => (
          <>
            {row?.original ? (
              <div>{row.getValue("address")}</div>
            ) : (
              <Skeleton className={`w-10 lg:w-16 h-4 bg-[#F5f5f5]`} />
            )}
          </>
        ),
        enableSorting: true,
        enableHiding: true,
      },
      {
        accessorKey: "email",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Email" />
        ),
        cell: ({ row }) => (
          <>
            {row?.original ? (
              <div>{row.getValue("email")}</div>
            ) : (
              <Skeleton className={`w-10 lg:w-16 h-4 bg-[#F5f5f5]`} />
            )}
          </>
        ),
        enableSorting: true,
        enableHiding: true,
      },
      {
        accessorKey: "place",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Place" />
        ),
        cell: ({ row }) => (
          <>
            {row?.original ? (
              <div>{row.getValue("place")}</div>
            ) : (
              <Skeleton className={`w-10 lg:w-16 h-4 bg-[#F5f5f5]`} />
            )}
          </>
        ),
        enableSorting: true,
        enableHiding: true,
      },
      {
        id: "actions",
        cell: ({ row }) => (
          <DataTableRowActions
            deleteAction={handleDelete}
            editAction={handleEdit}
            row={row}
          />
        ),
      },
    ],
    []
  );

  const loadingData = Array.from({ length: 10 }, () => null);

  const toggleModal = useCallback(() => {
    setOpen((open) => !open);
  }, [open]);

  const toggleDeleteModal = useCallback(() => {
    setOpenDelete((open) => !open);
  }, [openDelete]);

  const handleEdit = (data: Tenants | null) => {
    setSelectedTenant(data);
    toggleModal();
  };

  const handleDelete = (data: Tenants | null) => {
    setSelectedTenant(data);
    toggleDeleteModal();
  };

  const confirmDelete = () => {
    toast.error("Delete API is not implemented yet.");
  }


return (
  <>
    <div className="bg-[#FFFFFF] p-2 rounded-md overflow-hidden space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-semibold text-xl text-[#4741E1]">Tenants</h1>
          <p className="font-medium text-sm">The List of all Tenants</p>
        </div>
      
      </div>
      <Separator />
      <Table
      // @ts-ignore
        columns={columns}
        data={
          tenantsLoading || tenantsFetching ? loadingData : tenants || []
        }
        filterKey="name"
      />
    </div>

    <DeleteModal
        open={openDelete}
        setOpen={toggleDeleteModal}
        loading={false}
        confirmDelete={confirmDelete}
      />

    

   
  </>
);
};

export default Tenants;