import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      {/* <h1>Main layout</h1> */}
      {/* <Navbar /> */}
      <div>
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
