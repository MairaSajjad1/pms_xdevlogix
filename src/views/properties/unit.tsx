"use client";
import { DataTableColumnHeader } from "@/components/table/data-table-column-header";
import { DataTableRowActions } from "@/components/table/data-table-row-actions";
import { Button } from "@/components/ui/button";
import { PropertyUnit } from "@/types";
import { GoPlusCircle as PlusCircle } from "react-icons/go";
import { ColumnDef } from "@tanstack/react-table";
import { FC, useMemo } from "react";
import { Separator } from "@/components/ui/separator";
import Table from "@/components/table";
import Image from "next/image";

interface ListProps {
    propertyUnit: PropertyUnit[];
}

const Unit: FC<ListProps> = ({ propertyUnit }) => {
  const columns: ColumnDef<PropertyUnit>[] = useMemo(
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
        accessorKey: "title",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Title" />
        ),
        cell: ({ row }) => <div>{row.getValue("title")}</div>,
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
    [propertyUnit]
  );
  return (
    <>
      <div className="bg-[#FFFFFF] p-2 rounded-md overflow-hidden space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-semibold text-xl text-[#4741E1]">PropertyUnit</h1>
            <p className="font-medium text-sm">A List of all PropertyUnit</p>
          </div>
          <Button size={"sm"}>
            <PlusCircle className="mr-2 w-4 h-4" />
            Add PropertyUnit
          </Button>
        </div>
        <Separator />
        <Table
          // @ts-expect-error
          columns={columns}
          data={propertyUnit}
          filterKey="full_name"
        />
      </div>
    </>
  );
};

export default Unit;
