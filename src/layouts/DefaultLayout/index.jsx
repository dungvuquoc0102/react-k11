import { Outlet } from "react-router-dom";

function DefaultLayout() {
  return (
    <div>
      <header>Default Header</header>
      <Outlet />
      <footer>Default Footer</footer>
    </div>
  );
}

export default DefaultLayout;
