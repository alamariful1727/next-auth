import { RouterProvider } from "react-router";
import Router from "./../router";
import AuthProvider from "./AuthProvider";

const RootProvider = () => {
  return (
    <AuthProvider>
      <RouterProvider router={Router} />
    </AuthProvider>
  );
};

export default RootProvider;
