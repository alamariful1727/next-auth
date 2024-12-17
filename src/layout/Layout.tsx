import { PropsWithChildren } from "react";
import Header from "../components/header";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <div className="min-h-full">
        <Header />
        <div className="py-10">{children}</div>
      </div>
    </div>
  );
};
