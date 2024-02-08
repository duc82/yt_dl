import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Header />
      <div className="pt-14">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
