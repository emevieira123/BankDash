import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../shared/layouts/DefaultLayout";
import Dashboard from "../pages/Dashboard";
import { Path } from "./Path";
import Transactions from "../pages/Transactions";

export function Router() {
  return (
    <Routes>
      <Route path="" element={<DefaultLayout />}>
        <Route path={Path.DASHBOARD} element={<Dashboard />} />
        <Route path={Path.TRANSACTIONS} element={<Transactions />} />
      </Route>
    </Routes>
  );
}