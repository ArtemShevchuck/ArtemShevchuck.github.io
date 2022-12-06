import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Game from "../pages/Game";
import NotFound from "../pages/NotFound";
import GameOver from "../pages/GameOver";
import GameStart from "../pages/GameStart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GameStart />,
    errorElement: <NotFound />,
  },
  {
    path: "/game",
    element: <Game />,
    errorElement: <NotFound />,
  },
  {
    path: "/gameOver",
    element: <GameOver />,
    errorElement: <NotFound />,
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
