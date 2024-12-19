import { Outlet } from "react-router";
import { Header } from "@components/index";
import { PropsWithChildren } from "react";

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <div className="min-h-full">
        <Header />
        <div>{children ? children : <Outlet />}</div>
      </div>
    </div>
  );
};

export default RootLayout;
