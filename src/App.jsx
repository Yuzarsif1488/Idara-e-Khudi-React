import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Dashboard from "./page/dashboard/Dashboard";
import Orphans from "./page/orphans/Orphans";
import Sponsors from "./page/sponsors/Sponsors";
import Branches from "./page/branches/Branches";
import OrphanDetails from "./page/orphandetails/OrphanDetails";
import New from "./page/new/New";
import { userInputs } from "./formSource";

function App() {
  const Layout = () => {
    return (
      <div>
        <Outlet />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/orphans",
          element: <Orphans />,
        },
        {
          path: "/sponsors",
          element: <Sponsors />,
        },
        {
          path: "/branches",
          element: <Branches />,
        },
        {
          path: "/orphandetails",
          element: <OrphanDetails />,
        },
        {
          path: "/new",
          element: <New inputs={userInputs} title="Add New User" />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
