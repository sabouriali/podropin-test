import { Route, Routes } from "react-router";

import Navbar from "./Navbar";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import VerifyCode from "../pages/VerifyCode";

function Layout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main dir="rtl" className="p-4 text-sm">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify-code" element={<VerifyCode />} />
        </Routes>
      </main>
      <footer></footer>
    </>
  );
}

export default Layout;
