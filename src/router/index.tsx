import { createBrowserRouter, RouterProvider } from "react-router";
import { RootPage } from "@/pages/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
