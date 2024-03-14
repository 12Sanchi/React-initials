import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contacts";
import Error from "./Components/error";
import RestaurantMenu from "./Components/Restaurant";
//import { useRouteError } from "react-router-dom";
//   <h3> {err.status}: {err.statusText}</h3>
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

//resName="KFC" cuisine="Burger,Fast Food"
const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/restaurant/:resId",
    element: <RestaurantMenu />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
