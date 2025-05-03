import { Route, Routes } from "react-router";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import VerifyCode from "../pages/VerifyCode";
import NewOrderBulk from "../pages/NewOrderBulk";
import NewOrderSingle from "../pages/NewOrderSingle";
import Shipping from "../pages/Shipping";
import Analytics from "../pages/Analytics";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";
import UserLayout from "./UserLayout";
import AuthLayout from "./AuthLayout";
import NewOrderLayout from "./NewOrderLayout";

function Layout() {
  return (
    <>
      <main dir="rtl" className="text-sm">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/verify-code" element={<VerifyCode />} />
          </Route>
          <Route element={<UserLayout />}>
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
          <Route path="/new-order" element={<NewOrderLayout />}>
            <Route path="single" element={<NewOrderSingle />} />
            <Route path="bulk" element={<NewOrderBulk />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default Layout;
