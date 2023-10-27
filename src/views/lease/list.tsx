"use client";
import { DataTableColumnHeader } from "@/components/table/data-table-column-header";
import { DataTableRowActions } from "@/components/table/data-table-row-actions";
import { Button } from "@/components/ui/button";
import { Lease } from "@/types";
import { GoPlusCircle as PlusCircle } from "react-icons/go";
import { ColumnDef } from "@tanstack/react-table";
import { FC, useMemo } from "react";
import { Separator } from "@/components/ui/separator";
import Table from "@/components/table";
import Image from "next/image";

interface ListProps {
  leases: Lease[];
}

const List: FC<ListProps> = ({ leases }) => {
  const columns: ColumnDef<Lease>[] = useMemo(
    () => [
      {
        accessorKey: "image_url",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Image" />
        ),
        cell: ({ row }) => (
          <Image
            src={row.getValue("image_url")}
            alt={row.getValue("name")}
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
        ),
        enableSorting: true,
        enableHiding: false,
      },
      {
        accessorKey: "full_name",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Name" />
        ),
        cell: ({ row }) => <div>{row.getValue("full_name")}</div>,
        enableSorting: true,
        enableHiding: false,
      },
      {
        accessorKey: "lease_start",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Start Date" />
        ),
        cell: ({ row }) => <div>{row.getValue("lease_start")}</div>,
        enableSorting: true,
        enableHiding: true,
      },
      {
        accessorKey: "lease_end",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="End Date" />
        ),
        cell: ({ row }) => <div>{row.getValue("lease_end")}</div>,
        enableSorting: true,
        enableHiding: true,
      },

      {
        id: "actions",
        cell: ({ row }) => (
          <DataTableRowActions
            deleteAction={() => {}}
            editAction={() => {}}
            row={row}
          />
        ),
      },
    ],
    [leases]
  );
  return (
    <>
      <div className="bg-[#FFFFFF] p-2 rounded-md overflow-hidden space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-semibold text-xl text-[#4741E1]">Leases</h1>
            <p className="font-medium text-sm">A List of all Leases</p>
          </div>
          <Button size={"sm"}>
            <PlusCircle className="mr-2 w-4 h-4" />
            Add Lease
          </Button>
        </div>
        <Separator />
        <Table
          // @ts-expect-error
          columns={columns}
          data={leases}
          filterKey="full_name"
        />
      </div>
    </>
  );
};

export default List;
