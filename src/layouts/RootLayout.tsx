import { Outlet } from "react-router";
import { Header } from "@components/index";

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
