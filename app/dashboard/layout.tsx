import { auth } from "@/server/auth";
import { BarChart, Package, PenSquare, Settings, Truck } from "lucide-react";
import DashboardNav from "@/components/navigation/dashboard-nav";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  const userLinks = [
    { label: "Orders", path: "/dashboard/orders", icons: <Truck size={16} /> },
    {
      label: "Settings",
      path: "/dashboard/settings",
      icons: <Settings size={16} />,
    },
  ] as const;

  // as const is a TypeScript feature that allows you to specify that an array or object is read-only. This means that you can't modify the array or object after it's been created. This is useful when you want to ensure that an array or object doesn't change after it's been created. In this case, we're using as const to specify that the userLinks array is read-only. This ensures that the array won't change after it's been created, which can help prevent bugs in your code.

  const adminLinks =
    session?.user.role === "admin"
      ? [
          {
            label: "Analytics",
            path: "/dashboard/analytics",
            icons: <BarChart size={16} />,
          },
          {
            label: "Create",
            path: "/dashboard/add-product",
            icons: <PenSquare size={16} />,
          },
          {
            label: "Products",
            path: "/dashboard/products",
            icons: <Package size={16} />,
          },
        ]
      : [];

  const allLinks = [...adminLinks, ...userLinks];

  return (
    <div>
      <DashboardNav allLinks={allLinks} />

      {children}
    </div>
  );
};
export default DashboardLayout;
