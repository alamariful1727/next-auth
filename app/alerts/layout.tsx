"use client"

import clsx from "clsx";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const navigation = [
  { name: "All Alerts", href: "/alerts", type: "all" },
  { name: "Training Alerts", href: "/alerts?type=training", type: "training" },
  { name: "Live Alerts", href: "/alerts?type=live", type: "live" },
];

const AlertLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Suspense fallback={<div className="text-center">Loading...</div>}>
      <AlertLayoutContent>{children}</AlertLayoutContent>
    </Suspense>
  );
};

const AlertLayoutContent = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const searchParams = useSearchParams();
  const currentAlertType = (searchParams?.get("type") || "all")
    .toLocaleLowerCase()
    .trim();

  return (
    <div className="space-y-5">
      <div className="flex h-14 items-center border-b border-gray-200 bg-white">
        <div className="container mx-auto -mb-px flex h-full items-center space-x-8 px-4 sm:px-6">
          {navigation.map(({ name, href, type }) => (
            <Link
              key={name}
              href={href}
              className={clsx(
                "inline-flex h-full items-center border-b-2 px-1 pt-1 text-base font-medium",
                currentAlertType === type
                  ? "border-indigo-500 text-gray-900"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
              )}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
      {children}
    </div>
  );
};

export default AlertLayout;