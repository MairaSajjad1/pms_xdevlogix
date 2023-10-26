"use client"
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { ColumnDef } from "@tanstack/react-table";
import { GoPlusCircle as PlusCircle } from "react-icons/go";
import Table from "@/components/table";
import { DataTableColumnHeader } from "@/components/table/data-table-column-header";
import { DataTableRowActions } from "@/components/table/data-table-row-actions";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import DeleteModal from "@/components/modal/delete-modal";
import { useGetLandlordsQuery } from "@/store/services/landlordService";
import { useSession } from "next-auth/react";

export interface Landlord {
  id: number;
  full_name: string;
  email: string;
  number: number; 
  business_id: number;
  occupation: string;
  address: string;
  account: string;
  created_at: string;
  updated_at: string;
}

const Landlords: FC = () => {
  const { data: session } = useSession();

  // GET
  const {
    data: landlordList,
    isLoading: landlordLoading,
    isFetching: landlordFetching,
  } = useGetLandlordsQuery({
    buisnessId: session?.user?.business_id,
  });
 
  const [open, setOpen] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);

  const [selectedLandlord, setSelectedLandlord] = useState<Landlord | null>(null);

  const columns: ColumnDef<Landlord | null>[] = useMemo(
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
        accessorKey: "account",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Account no " />
        ),
        cell: ({ row }) => (
          <>
            {row?.original ? (
              <div>{row.getValue("account")}</div>
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

  const handleEdit = (data: Landlord | null) => {
    setSelectedLandlord(data);
    toggleModal();
  };

  const handleDelete = (data: Landlord | null) => {
    setSelectedLandlord(data);
    toggleDeleteModal();
  };

  const confirmDelete = () => {
    toast.error("Delete API is not implemented yet.");
    toggleDeleteModal();
  };

  useEffect(() => {
    if (!open && !openDelete) {
      setSelectedLandlord(null);
    }
  }, [open, openDelete]);

  return (
    <>
      <div className="bg-[#FFFFFF] p-2 rounded-md overflow-hidden space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-semibold text-xl text-[#4741E1]">Landlords</h1>
            <p className="font-medium text-sm">A List of all the landlords</p>
          </div>
        </div>
        <Separator />
        <Table
        // @ts-expect-error
          columns={columns}
          data={
            landlordLoading || landlordFetching
              ? loadingData
              : landlordList || []
          }
          filterKey="full_name"
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

export default Landlords;
