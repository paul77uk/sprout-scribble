"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

type DashboardNavType = {
  allLinks: {
    label: string;
    path: string;
    icons: JSX.Element;
  }[];
};

const DashboardNav = ({ allLinks }: DashboardNavType) => {
  const pathname = usePathname();

  return (
    <nav className="py-2 overflow-auto mb-4">
      <ul className="flex gap-6 text-xs font-semibold">
        <AnimatePresence>
          {allLinks.map((link) => (
            <motion.li whileTap={{ scale: 0.95 }} key={link.path}>
              <Link
                className={cn(
                  "flex gap-1 flex-col items-center relative",
                  pathname === link.path && "text-primary"
                )}
                href={link.path}
              >
                {link.icons}
                {link.label}
                {pathname === link.path ? (
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    layoutId="underline"
                    transition={{ type: "spring", stiffness: 35 }}
                    className="h-[3px] w-full rounded-full absolute bg-primary z-0 left-0 -bottom-1"
                  />
                ) : null}
              </Link>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </nav>
  );
};
export default DashboardNav;
