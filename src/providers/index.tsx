import { RouterProvider } from "react-router";
import Router from "./../router";

const RootProvider = () => {
  return <RouterProvider router={Router} />;
};

export default RootProvider;
