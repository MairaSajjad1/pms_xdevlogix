"use client";
import { DataTableColumnHeader } from "@/components/table/data-table-column-header";
import { DataTableRowActions } from "@/components/table/data-table-row-actions";
import { Button } from "@/components/ui/button";
import { PropertyType } from "@/types";
import { GoPlusCircle as PlusCircle } from "react-icons/go";
import { ColumnDef } from "@tanstack/react-table";
import { FC, useMemo } from "react";
import { Separator } from "@/components/ui/separator";
import Table from "@/components/table";
import Image from "next/image";

interface ListProps {
    propertyType : PropertyType[];
}

const Type: FC<ListProps> = ({ propertyType }) => {
  const columns: ColumnDef<PropertyType>[] = useMemo(
    () => [
      {
        accessorKey: "type",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Type" />
        ),
        cell: ({ row }) => <div>{row.getValue("type")}</div>,
        enableSorting: true,
        enableHiding: false,
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
    [propertyType]
  );
  return (
    <>
      <div className="bg-[#FFFFFF] p-2 rounded-md overflow-hidden space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-semibold text-xl text-[#4741E1]">PropertyType</h1>
            <p className="font-medium text-sm">A List of all PropertyType</p>
          </div>
          <Button size={"sm"}>
            <PlusCircle className="mr-2 w-4 h-4" />
            Add PropertyType
          </Button>
        </div>
        <Separator />
        <Table
          // @ts-expect-error
          columns={columns}
          data={propertyType}
          filterKey="full_name"
        />
      </div>
    </>
  );
};

export default Type;
