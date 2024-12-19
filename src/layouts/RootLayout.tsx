import { Outlet } from "react-router";
import Header from "@components/header";

const RootLayout = () => {
  return (
    <div>
      <div className="min-h-full">
        <Header />
        <div className="p-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
