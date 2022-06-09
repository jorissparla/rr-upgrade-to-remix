import { Outlet } from "react-router-dom";

export default function IndexRoute() {
  return (
    <div>
      {" "}
      IndexRoute
      <Outlet />
    </div>
  );
}
