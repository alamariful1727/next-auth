import { PropsWithChildren } from "react";
import Header from "@components/header";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <div className="min-h-full">
        <Header />
        <div className="px-4 py-10 sm:px-6 lg:px-8">{children}</div>
      </div>
    </div>
  );
};
