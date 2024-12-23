import { createBrowserRouter, Navigate } from "react-router";
import AlertsLayout from "@layouts/AlertsLayout";
import RootLayout from "@layouts/RootLayout";
import AlertsPage from "@pages/alerts";
import HomePage from "@pages/home";
import UsersPage from "@pages/users";
import Healthz from "@pages/healthz";
import { ErrorBoundary } from "@components/index";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: (
      <RootLayout>
        <ErrorBoundary />
      </RootLayout>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "healthz",
        element: <Healthz />,
      },
      {
        path: "alerts",
        element: <AlertsLayout />,
        children: [
          {
            index: true,
            element: <AlertsPage />,
          },
        ],
      },
      {
        path: "users",
        element: <UsersPage />,
      },
      { path: "*", element: <Navigate to="/" replace={true} /> },
    ],
  },
]);

export default Router;
