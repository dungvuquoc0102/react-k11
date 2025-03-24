import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div>
      <header>Admin Header</header>
      <Outlet />
      <footer>Admin Footer</footer>
    </div>
  );
}

export default AdminLayout;
