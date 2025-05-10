import { Route, Routes } from "react-router";

import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import VerifyCode from "../pages/auth/VerifyCode";
import NewOrderBulk from "../pages/new-orders/NewOrderBulk";
import NewOrderSingle from "../pages/new-orders/NewOrderSingle";
import Shipping from "../pages/Shipping";
import Analytics from "../pages/Analytics";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";
import UserLayout from "./UserLayout";
import AuthLayout from "./AuthLayout";
import NewOrderLayout from "./NewOrderLayout";
import AddressBookSender from "../pages/settings/AddressBookSender";
import SettingsLayout from "./SettingsLayout";

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

            <Route path="/settings" element={<SettingsLayout />}>
              <Route index element={<Settings />} />
              <Route
                path="address-book/sender"
                element={<AddressBookSender />}
              />
            </Route>
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
