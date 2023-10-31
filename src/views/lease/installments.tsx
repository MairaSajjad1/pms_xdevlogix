"use client";
import { DataTableColumnHeader } from "@/components/table/data-table-column-header";
import { DataTableRowActions } from "@/components/table/data-table-row-actions";
import { Installment, Lease } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { FC, useMemo } from "react";
import { Separator } from "@/components/ui/separator";
import Table from "@/components/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BiDotsHorizontalRounded as DotsHorizontal } from "react-icons/bi";
import { Button } from "@/components/ui/button";

interface Installments {
  installments: Installment[];
}

const Installments: FC<Installments> = ({ installments }) => {
  const columns: ColumnDef<Installment>[] = useMemo(
    () => [
      {
        accessorKey: "due_date",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Due Date" />
        ),
        cell: ({ row }) => <div>{row.getValue("due_date")}</div>,
        enableSorting: true,
        enableHiding: true,
      },
      {
        accessorKey: "payment",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Payment" />
        ),
        cell: ({ row }) => <div>{row.getValue("payment")}</div>,
        enableSorting: true,
        enableHiding: true,
      },
      {
        accessorKey: "paid_rent_payment",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Paid Payment" />
        ),
        cell: ({ row }) => <div>{row.getValue("paid_rent_payment")}</div>,
        enableSorting: true,
        enableHiding: false,
      },
      {
        accessorKey: "rem_payment",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Remaining Payment" />
        ),
        cell: ({ row }) => <div>{row.getValue("rem_payment")}</div>,
        enableSorting: true,
        enableHiding: true,
      },
      {
        accessorKey: "status",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Status" />
        ),
        cell: ({ row }) => <div>{row.getValue("status")}</div>,
        enableSorting: true,
        enableHiding: true,
      },

      {
        id: "actions",
        cell: ({ row }) => (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
              >
                <DotsHorizontal className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[160px]">
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ),
      },
    ],
    [installments]
  );
  return (
    <>
      <div className="bg-[#FFFFFF] p-2 rounded-md overflow-hidden space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-semibold text-xl text-[#4741E1]">
              Installments
            </h1>
            <p className="font-medium text-sm">A List of all Installments</p>
          </div>
          {/* <Button size={"sm"}>
            <PlusCircle className="mr-2 w-4 h-4" />
            Add Lease
          </Button> */}
        </div>
        <Separator />
        <Table
          // @ts-expect-error
          columns={columns}
          data={installments}
          //   filterKey="due_date"
        />
      </div>
    </>
  );
};

export default Installments;