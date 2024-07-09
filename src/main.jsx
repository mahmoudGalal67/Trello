import React from "react";
import "./index.css";
import "./App.css";

import Workspace from "./pages/wkorkspace/Workspace.jsx";
import Board from "./pages/board/Board.jsx";

import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Workspace />,
  },
  {
    path: "/board",
    element: <Board />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
