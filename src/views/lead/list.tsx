"use client";
import { DataTableColumnHeader } from "@/components/table/data-table-column-header";
import { DataTableRowActions } from "@/components/table/data-table-row-actions";
import { Button } from "@/components/ui/button";
import { Lead } from "@/types";
import { GoPlusCircle as PlusCircle } from "react-icons/go";
import { ColumnDef } from "@tanstack/react-table";
import { FC, useMemo } from "react";
import { Separator } from "@/components/ui/separator";
import Table from "@/components/table";
import Image from "next/image";

interface ListProps {
  lead : Lead[];
}

const List: FC<ListProps> = ({ lead }) => {
  const columns: ColumnDef<Lead>[] = useMemo(
    () => [
      {
        accessorKey: "client_name",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Name" />
        ),
        cell: ({ row }) => <div>{row.getValue("client_name")}</div>,
        enableSorting: true,
        enableHiding: false,
      },
      {
        accessorKey: "client_mail",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Email" />
        ),
        cell: ({ row }) => <div>{row.getValue("client_mail")}</div>,
        enableSorting: true,
        enableHiding: true,
      },
      {
        accessorKey: "address_1",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Address" />
        ),
        cell: ({ row }) => <div>{row.getValue("address_1")}</div>,
        enableSorting: true,
        enableHiding: true,
      },
      {
        accessorKey: "city",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="City" />
        ),
        cell: ({ row }) => <div>{row.getValue("city")}</div>,
        enableSorting: true,
        enableHiding: true,
      },
      {
        accessorKey: "country",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Country" />
        ),
        cell: ({ row }) => <div>{row.getValue("country")}</div>,
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
    [lead]
  );
  return (
    <>
      <div className="bg-[#FFFFFF] p-2 rounded-md overflow-hidden space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-semibold text-xl text-[#4741E1]">Lead</h1>
            <p className="font-medium text-sm">A List of all Lead</p>
          </div>
          <Button size={"sm"}>
            <PlusCircle className="mr-2 w-4 h-4" />
            Add Landlord
          </Button>
        </div>
        <Separator />
        <Table
          // @ts-expect-error
          columns={columns}
          data={lead}
          filterKey="full_name"
        />
      </div>
    </>
  );
};

export default List;
