import { NavLink, Outlet, useSearchParams } from "react-router";
import clsx from "clsx";

const navigation = [
  { name: "All Alerts", to: "/alerts", type: "all" },
  { name: "Training Alerts", to: "/alerts?type=training", type: "training" },
  { name: "Live Alerts", to: "/alerts?type=live", type: "live" },
];

const AlertsLayout = () => {
  const [searchParams] = useSearchParams();
  const currentAlertType = (searchParams.get("type") || "all")
    .toLocaleLowerCase()
    .trim();

  return (
    <div className="space-y-5">
      <div className="flex h-14 items-center border-b border-gray-200 bg-white">
        <div className="container mx-auto -mb-px flex h-full items-center space-x-8 px-4 sm:px-0">
          {navigation.map(({ name, to, type }) => (
            <NavLink
              key={name}
              to={to}
              className={clsx(
                "inline-flex h-full items-center border-b-2 px-1 pt-1 text-base font-medium",
                currentAlertType === type
                  ? "border-indigo-500 text-gray-900"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
              )}
            >
              {name}
            </NavLink>
          ))}
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AlertsLayout;
