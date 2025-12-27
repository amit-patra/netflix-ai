import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Browse } from "./Browse";
import Login from "./Login";
import { Header } from "./Header";

export const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div>
      <Header />
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};
