import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { HomePage } from "../pages/HomePage";
import { SearchBooks } from "../pages/SearchBooks";
import { Checkout } from "../pages/Checkout";
import { Auth } from "../pages/Auth";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/searchBooks",
        element: <SearchBooks />,
      },
      {
        path: "/checkout/:bookId",
        element: <Checkout />,
      },
      {
        path: "/auth",
        element: <Auth />,
        // element: <LoginWidget config={OktaConfig} />,
      },
    ],
  },
  // {
  //   path: "/login/callback",
  //   element: <LoginCallback />,
  // },
]);

export default routes;
