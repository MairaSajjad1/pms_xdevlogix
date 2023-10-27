"use client";
import { DataTableColumnHeader } from "@/components/table/data-table-column-header";
import { DataTableRowActions } from "@/components/table/data-table-row-actions";
import { Button } from "@/components/ui/button";
import { Source } from "@/types";
import { GoPlusCircle as PlusCircle } from "react-icons/go";
import { ColumnDef } from "@tanstack/react-table";
import { FC, useMemo } from "react";
import { Separator } from "@/components/ui/separator";
import Table from "@/components/table";
import Image from "next/image";

interface ListProps {
  source : Source[];
}

const List: FC<ListProps> = ({ source }) => {
  const columns: ColumnDef<Source>[] = useMemo(
    () => [
      {
        accessorKey: "source",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Source" />
        ),
        cell: ({ row }) => <div>{row.getValue("source")}</div>,
        enableSorting: true,
        enableHiding: false,
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
    [source]
  );
  return (
    <>
      <div className="bg-[#FFFFFF] p-2 rounded-md overflow-hidden space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-semibold text-xl text-[#4741E1]">Source</h1>
            <p className="font-medium text-sm">A List of all Source</p>
          </div>
          <Button size={"sm"}>
            <PlusCircle className="mr-2 w-4 h-4" />
            Add Source
          </Button>
        </div>
        <Separator />
        <Table
          // @ts-expect-error
          columns={columns}
          data={source}
          filterKey="source"
        />
      </div>
    </>
  );
};

export default List;
