import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import RootLayout from "@layouts/RootLayout";
import HomePage from "@pages/home";
import AlertsPage from "@pages/alerts";
import UsersPage from "@pages/users";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="alerts">
            <Route index element={<AlertsPage />} />
          </Route>
          <Route path="users">
            <Route index element={<UsersPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
