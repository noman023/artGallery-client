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
        element: (
          <PrivateRoute>
            <MyItems />
          </PrivateRoute>
        ),
      },
      {
        path: "/updateItem",
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
