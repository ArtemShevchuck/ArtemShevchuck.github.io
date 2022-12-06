import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Game from '../pages/Game';
import NotFound from '../pages/NotFound';
import GameOver from '../pages/GameOver';
import GameStart from '../pages/GameStart';
import { routes } from '../core/constants';

const router = createBrowserRouter([
  {
    path: routes.gameStart,
    element: <GameStart />,
    errorElement: <NotFound />,
  },
  {
    path: routes.game,
    element: <Game />,
    errorElement: <NotFound />,
  },
  {
    path: routes.gameOver,
    element: <GameOver />,
    errorElement: <NotFound />,
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
