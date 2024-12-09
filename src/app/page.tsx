import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/data-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  ArrowDownUp,
  ChevronDown,
  CircleHelp,
  Download,
  Search,
} from "lucide-react";

// const data = tableData;
const tableRowCounts = 25;
const data = new Array(tableRowCounts);
data.fill(
  {
    id: "281209",
    date: "7 July, 2023",
    amount: "₹1,278.23",
    fees: "₹22",
  },
  0,
  tableRowCounts
);

export default function Home() {
  return (
    // <div className="w-screen h-screen bg-[#FAFAFA]">
    <div className="w-full h-full bg-[#FAFAFA] flex flex-col gap-4">
      <header className="p-4 items-center shadow min-w-full flex justify-between gap-2">
        <div className="flex gap-4">
          <SidebarTrigger />
          <span className="hidden md:flex text-lg">Payments</span>
          <span className="hidden md:flex gap-1 items-center cursor-pointer">
            <CircleHelp className="w-3.5 h-3.5" strokeWidth={1.5} />
            <span className="text-xs">How it works</span>
          </span>
        </div>
        <span className="bg-[#F2F2F2] flex gap-2 px-2 items-center rounded-md w-96">
          <Search className="h-5 w-5 opacity-50" />
          <Input
            placeholder="Search features, tutorials, etc."
            className="bg-transparent border-none"
          />
        </span>
        <span className="flex gap-2">
          <Button
            className="bg-[#E6E6E6] rounded-full aspect-square p-0 hover:bg-[#E6E6E6]"
            variant={"secondary"}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.4211 0.0237288L1.11579 3.38234C0.463158 3.49896 0 4.1287 0 4.85174V12.5019C0 13.225 0.463158 13.8547 1.11579 13.9713L2.88421 14.3212C3.6 15.6273 4.94737 17.8897 6.75789 19.7323C7.36842 20.362 8.37895 19.8022 8.25263 18.8693C8.08421 17.6331 8.12632 16.3037 8.18947 15.3707L18.4211 17.3766C19.2421 17.5398 20 16.8401 20 15.9072V1.49312C20 0.560174 19.2421 -0.139537 18.4211 0.0237288ZM6.46316 9.6331C6.46316 9.88966 6.27368 10.0996 6.04211 10.0996H4.31579C4.08421 10.0996 3.89474 9.88966 3.89474 9.6331V7.72056C3.89474 7.464 4.08421 7.25408 4.31579 7.25408H6.04211C6.27368 7.25408 6.46316 7.464 6.46316 7.72056V9.6331ZM11.2842 9.6331C11.2842 9.88966 11.0947 10.0996 10.8632 10.0996H9.13684C8.90526 10.0996 8.71579 9.88966 8.71579 9.6331V7.72056C8.71579 7.464 8.90526 7.25408 9.13684 7.25408H10.8632C11.0947 7.25408 11.2842 7.464 11.2842 7.72056V9.6331ZM16.1263 9.6331C16.1263 9.88966 15.9368 10.0996 15.7053 10.0996H13.9789C13.7474 10.0996 13.5579 9.88966 13.5579 9.6331V7.72056C13.5579 7.464 13.7474 7.25408 13.9789 7.25408H15.6842C15.9158 7.25408 16.1053 7.464 16.1053 7.72056V9.6331H16.1263Z"
                fill="#4D4D4D"
              />
            </svg>
          </Button>
          <Button className="bg-[#E6E6E6] rounded-full aspect-square p-0 hover:bg-[#E6E6E6]">
            <svg
              width="14"
              height="9"
              viewBox="0 0 14 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.11092 8.50258C7.51563 9.15871 6.48437 9.15872 5.88908 8.50258L0.615075 2.6895C-0.259446 1.72559 0.424491 0.181595 1.72599 0.181595L12.274 0.181596C13.5755 0.181596 14.2594 1.72559 13.3849 2.68949L8.11092 8.50258Z"
                fill="#4D4D4D"
              />
            </svg>
          </Button>
        </span>
      </header>
      <main className="p-4 flex flex-col gap-4">
        <div className="flex justify-between">
          <h3>Overview</h3>
          <Button variant={"outline"}>
            Last Month <ChevronDown />
          </Button>
        </div>
        <div className="flex gap-4 flex-wrap">
          <div className="flex flex-1 flex-col gap-2 shadow p-4 px-6 rounded-md bg-white">
            <small className="opacity-80">Online orders</small>
            <span className="text-3xl">231</span>
          </div>
          <div className="flex flex-1 flex-col gap-2 shadow p-4 px-6 rounded-md bg-white">
            <small className="opacity-80">Amount received</small>
            <span className="text-3xl">₹23,92,312.19</span>
          </div>
        </div>
        <span className="text-2xl py-2">Transaction | This Month</span>

        <div className="flex flex-col gap-2 w-full bg-white rounded-md p-2 shadow">
          <div className="flex flex-wrap gap-4 justify-between">
            <span className="bg-white flex gap-2 px-2 items-center rounded-md shadow w-96">
              <Search className="h-5 w-5 opacity-50" />
              <Input
                placeholder="Search by order ID..."
                className="bg-transparent border-none focus:border-none"
              />
            </span>

            <div className="flex flex-1 w-full gap-4 justify-end items-end">
              <Button variant={"outline"}>
                Sort <ArrowDownUp />
              </Button>
              <Button variant={"outline"}>
                <Download />
              </Button>
            </div>
          </div>
          <DataTable data={data} columns={columns} />
        </div>
      </main>
    </div>
  );
}
