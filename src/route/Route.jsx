import { createBrowserRouter } from "react-router-dom";

import Root from "../layout/Root";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home/Home";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import PrivateRoute from "../pages/PrivateRoute/PrivateRoute";
import AddItem from "../components/AddItem/AddItem";
import MyItems from "../components/MyItems/MyItems";
import AllItemsPage from "../pages/AllItemsPage/AllItemsPage";
import UpdateItem from "../components/UpdateItem/UpdateItem";
import ViewDetails from "../components/ViewDetails/ViewDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        loader: () => fetch("https://art-crafts-server-xi.vercel.app/items"),
        element: <Home />,
      },

      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/allItems",
        loader: () => fetch("https://art-crafts-server-xi.vercel.app/items"),
        element: <AllItemsPage />,
      },
      {
        path: "/addItem",
        element: (
          <PrivateRoute>
            <AddItem />
          </PrivateRoute>
        ),
      },
      {
        path: "/myItems",
        loader: () => fetch("https://art-crafts-server-xi.vercel.app/items"),
        element: (
          <PrivateRoute>
            <MyItems />
          </PrivateRoute>
        ),
      },
      {
        path: "/updateItem/:id",
        element: (
          <PrivateRoute>
            <UpdateItem />
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <ViewDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default routes;
