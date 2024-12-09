import {
  BadgePercent,
  ChevronDown,
  ClipboardList,
  Home,
  LayoutGrid,
  MousePointer2,
  Palette,
  Settings,
  Truck,
  Users,
  Wallet,
  Zap,
} from "lucide-react";

import { Sidebar, SidebarContent, SidebarGroup } from "@/components/ui/sidebar";
import { ScrollArea } from "@radix-ui/react-scroll-area";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Orders",
    url: "#",
    icon: ClipboardList,
  },
  {
    title: "Products",
    url: "#",
    icon: LayoutGrid,
  },
  {
    title: "Delivery",
    url: "#",
    icon: Truck,
  },
  {
    title: "Marketing",
    url: "#",
    icon: Settings,
  },
  {
    title: "Analytics",
    url: "#",
    icon: Settings,
  },
  {
    title: "Payments",
    url: "#",
    icon: Settings,
  },
  {
    title: "Tools",
    url: "#",
    icon: MousePointer2,
  },
  {
    title: "Discounts",
    url: "#",
    icon: BadgePercent,
  },
  {
    title: "Audience",
    url: "#",
    icon: Users,
  },
  {
    title: "Appearance",
    url: "#",
    icon: Palette,
  },
  {
    title: "Plugins",
    url: "#",
    icon: Zap,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="dark !text-white">
      <SidebarContent>
        <SidebarGroup className="flex flex-col gap-2 h-full">
          <div className="flex gap-4 justify-between items-center px-2 pt-4 mb-4">
            <img
              src="/images/brand-icon.png"
              alt="brand logo"
              className="w-14 !bg-white rounded-lg"
              // width={120}
              // height={120}
            />
            <div className="flex-1 flex flex-col justify-between">
              <h3 className="text-white">Nishyan</h3>
              <a
                href="#"
                className="text-white text-xl underline underline-offset-4 opacity-90"
              >
                Visit store
              </a>
            </div>
            <ChevronDown color="white" className="w-8 h-8" />
          </div>
          {/* <div className="!flex-1 mr-3"> */}
          <ScrollArea className="flex-1 mr-3">
            {items.map((item) => (
              // <SidebarMenuItem key={item.title}>
              // <SidebarMenuButton asChild>
              <a
                href={item.url}
                key={item.title}
                className="text-white flex gap-2 p-2 m-1 hover:bg-gray-700 rounded-md items-center"
              >
                {getAppSidebarIcon(item.title) ? (
                  getAppSidebarIcon(item.title)
                ) : (
                  <item.icon color="white" className="w-6 aspect-square" />
                )}
                {/* <item.icon color="white" className="w-6 aspect-square" /> */}
                <span className="text-white">{item.title}</span>
              </a>
              // </SidebarMenuButton>
              // </SidebarMenuItem>
            ))}
          </ScrollArea>
          {/* </div> */}
          {/* <div className="flex-1"></div> */}
          <div>
            <div className="p-1.5 bg-slate-700 flex gap-3 rounded-md">
              <Wallet
                color="white"
                className="w-8 h-8 p-1 bg-slate-600 rounded-sm"
              />
              <span className="flex flex-col">
                <small className="text-white">Available credits</small>
                <span className="text-lg text-white">222.10</span>
              </span>
            </div>
          </div>

          {/* <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <item.icon
                      color="white"
                      className="!w-6 !h-6 !aspect-square"
                    />
                    <span className="text-white">{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu> */}
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

function getAppSidebarIcon(title: string) {
  if (title == "Marketing") {
    return (
      <svg
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 aspect-square text-white"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.1074 0.290837C13.0654 -0.231661 14.2333 0.461666 14.2333 1.55281V14.4471C14.2333 15.5383 13.0653 16.2316 12.1074 15.7091L4.04696 11.3125H2.375C1.23591 11.3125 0.3125 10.3891 0.3125 9.24999V6.74999C0.3125 5.6109 1.23591 4.68749 2.375 4.68749H4.04692L12.1074 0.290837ZM12.6083 1.86866L5.06662 5.9823V10.0176L12.6083 14.1313V1.86866ZM1.9375 6.74999C1.9375 6.50836 2.13338 6.31249 2.375 6.31249H3.4375V9.68749H2.375C2.13338 9.68749 1.9375 9.49161 1.9375 9.24999V6.74999Z"
          fill="white"
        />
        <path
          d="M18.6387 3.32573C18.919 3.67613 18.8622 4.18743 18.5118 4.46775L16.4284 6.13442C16.078 6.41474 15.5667 6.35793 15.2864 6.00753C15.0061 5.65713 15.0629 5.14583 15.4133 4.86551L17.4966 3.19884C17.847 2.91852 18.3583 2.97533 18.6387 3.32573Z"
          fill="white"
        />
        <path
          d="M15.5041 8.02081C15.5041 7.57208 15.8679 7.20831 16.3166 7.20831H18.8583C19.307 7.20831 19.6708 7.57208 19.6708 8.02081C19.6708 8.46955 19.307 8.83331 18.8583 8.83331H16.3166C15.8679 8.83331 15.5041 8.46955 15.5041 8.02081Z"
          fill="white"
        />
        <path
          d="M16.4284 10.2822C16.078 10.0019 15.5667 10.0587 15.2864 10.4091C15.0061 10.7595 15.0629 11.2708 15.4133 11.5511L17.4966 13.2178C17.847 13.4981 18.3583 13.4413 18.6387 13.0909C18.919 12.7405 18.8622 12.2292 18.5118 11.9489L16.4284 10.2822Z"
          fill="white"
        />
      </svg>
    );
  }

  if (title == "Analytics") {
    return (
      <svg
        width="18"
        height="16"
        viewBox="0 0 18 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 aspect-square text-white"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.6626 8.9376C1.6626 8.50958 2.00958 8.1626 2.4376 8.1626H6.8126C7.24062 8.1626 7.5876 8.50958 7.5876 8.9376C7.5876 9.36562 7.24062 9.7126 6.8126 9.7126H3.2126V14.5626C3.2126 14.9906 2.86562 15.3376 2.4376 15.3376C2.00958 15.3376 1.6626 14.9906 1.6626 14.5626V8.9376Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.412598 14.5626C0.412598 14.1346 0.759577 13.7876 1.1876 13.7876H16.8126C17.2406 13.7876 17.5876 14.1346 17.5876 14.5626C17.5876 14.9906 17.2406 15.3376 16.8126 15.3376H1.1876C0.759577 15.3376 0.412598 14.9906 0.412598 14.5626Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.0376 5.1876C6.0376 4.75958 6.38458 4.4126 6.8126 4.4126H11.1876C11.6156 4.4126 11.9626 4.75958 11.9626 5.1876C11.9626 5.61562 11.6156 5.9626 11.1876 5.9626H7.5876V14.5626C7.5876 14.9906 7.24062 15.3376 6.8126 15.3376C6.38458 15.3376 6.0376 14.9906 6.0376 14.5626V5.1876Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.4126 1.4376C10.4126 1.00958 10.7596 0.662598 11.1876 0.662598H15.5626C15.9906 0.662598 16.3376 1.00958 16.3376 1.4376V14.5626C16.3376 14.9906 15.9906 15.3376 15.5626 15.3376H11.1876C10.7596 15.3376 10.4126 14.9906 10.4126 14.5626V1.4376ZM11.9626 2.2126V13.7876H14.7876V2.2126H11.9626Z"
          fill="white"
        />
      </svg>
    );
  }
  if (title == "Payments") {
    return (
      <svg
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 aspect-square text-white"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.75 11.75H1.47727C0.661397 11.75 0 11.1904 0 10.5V1.75C0 1.05964 0.661397 0.5 1.47727 0.5H14.7727C15.5886 0.5 16.25 1.05964 16.25 1.75L16.25 4.25H18.5227C19.3386 4.25 20 4.8796 20 5.65625V14.0938C20 14.8704 19.3386 15.5 18.5227 15.5H5.22727C4.4114 15.5 3.75 14.8704 3.75 14.0938V11.75ZM5 4C4.17157 4 3.5 4.67157 3.5 5.5V10.25H1.5V2H14.75L14.75 4H5ZM11.875 12.375C13.2557 12.375 14.375 11.2557 14.375 9.875C14.375 8.49429 13.2557 7.375 11.875 7.375C10.4943 7.375 9.375 8.49429 9.375 9.875C9.375 11.2557 10.4943 12.375 11.875 12.375Z"
          fill="white"
        />
      </svg>
    );
  }

  return false;
}
