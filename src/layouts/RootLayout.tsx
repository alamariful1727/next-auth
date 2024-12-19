import { Outlet } from "react-router";
import Header from "@components/header";

const RootLayout = () => {
  return (
    <div>
      <div className="min-h-full">
        <Header />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
