import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";


const router = createBrowserRouter([
   {
    path: "/",                 // root route
    element: <Navigate to="/ai" replace />,   // redirect to /ai
  },
   {
      path: "/ai",
      element: <Home />,
      index :true
   },
   
]);

createRoot(document.getElementById("root")).render(
   <StrictMode>
         <RouterProvider router={router}></RouterProvider>
   </StrictMode>
);
