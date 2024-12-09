"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ChevronDown, ChevronUp, Info } from "lucide-react";
import { Button } from "../ui/button";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Order ID
          {/* {column.getIsSorted() === "asc" && (
            <ChevronUp className="ml-2 h-4 w-4" />
          )}
          {column.getIsSorted() === "desc" && (
            <ChevronDown className="ml-2 h-4 w-4" />
          )} */}
        </Button>
      );
    },
    cell: ({ row }) => {
      const id = row.getValue("id") as string;
      return (
        <a
          href={`/orders/${id}`}
          className="text-blue-600 hover:text-blue-800 hover:underline text-center pl-4"
        >
          #{id}
        </a>
      );
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="w-full"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Order Date
          {column.getIsSorted() === "asc" && (
            <ChevronUp className="ml-2 h-4 w-4" />
          )}
          {column.getIsSorted() === "desc" && (
            <ChevronDown className="ml-2 h-4 w-4" />
          )}
        </Button>
      );
    },
    cell: ({ row }) => {
      return <p className="text-center">{row.getValue("date")}</p>;
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="w-full"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Order amount
          {/* {column.getIsSorted() === "asc" && (
            <ChevronUp className="ml-2 h-4 w-4" />
          )}
          {column.getIsSorted() === "desc" && (
            <ChevronDown className="ml-2 h-4 w-4" />
          )} */}
        </Button>
      );
    },
    cell: ({ row }) => {
      return <p className="text-center">{row.getValue("amount")}</p>;
    },
  },
  {
    accessorKey: "fees",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="w-full justify-end"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Transaction fees
          {/* {column.getIsSorted() === "asc" && (
            <ChevronUp className="ml-2 h-4 w-4" />
          )}
          {column.getIsSorted() === "desc" && (
            <ChevronDown className="ml-2 h-4 w-4" />
          )} */}
          <Info className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <p className="text-right pr-4">{row.getValue("fees")}</p>;
    },
  },
];
