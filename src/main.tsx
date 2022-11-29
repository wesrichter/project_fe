import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { ErrorPage } from "./error/ErrorPage/ErrorPage";
import { ProjectDetails } from "./project/ProjectDetails/ProjectDetails";
import { ProjectsTable } from "./project/ProjectsTable/ProjectsTable";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "./App.scss";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProjectsTable />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:projectId",
    element: <ProjectDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
