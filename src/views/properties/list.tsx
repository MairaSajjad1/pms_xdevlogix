"use client";
import { DataTableColumnHeader } from "@/components/table/data-table-column-header";
import { DataTableRowActions } from "@/components/table/data-table-row-actions";
import { Button } from "@/components/ui/button";
import { PropertyList } from "@/types";
import { GoPlusCircle as PlusCircle } from "react-icons/go";
import { ColumnDef } from "@tanstack/react-table";
import { FC, useMemo } from "react";
import { Separator } from "@/components/ui/separator";
import Table from "@/components/table";
import Image from "next/image";

interface ListProps {
  properties : PropertyList[];
}

const List: FC<ListProps> = ({ properties }) => {
  const columns: ColumnDef<PropertyList>[] = useMemo(
    () => [
      {
        accessorKey: "name",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Name" />
        ),
        cell: ({ row }) => <div>{row.getValue("name")}</div>,
        enableSorting: true,
        enableHiding: false,
      },
      {
        accessorKey: "rent",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Rent" />
        ),
        cell: ({ row }) => <div>{row.getValue("rent")}</div>,
        enableSorting: true,
        enableHiding: true,
      },
      {
        accessorKey: "area",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Area" />
        ),
        cell: ({ row }) => <div>{row.getValue("area")}</div>,
        enableSorting: true,
        enableHiding: true,
      },
      {
        accessorKey: "description",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Description" />
        ),
        cell: ({ row }) => <div>{row.getValue("description")}</div>,
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
    [properties]
  );
  return (
    <>
      <div className="bg-[#FFFFFF] p-2 rounded-md overflow-hidden space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-semibold text-xl text-[#4741E1]">Properties</h1>
            <p className="font-medium text-sm">A List of all Properties</p>
          </div>
          <Button size={"sm"}>
            <PlusCircle className="mr-2 w-4 h-4" />
            Add Property
          </Button>
        </div>
        <Separator />
        <Table
          // @ts-expect-error
          columns={columns}
          data={properties}
          filterKey="full_name"
        />
      </div>
    </>
  );
};

export default List;
