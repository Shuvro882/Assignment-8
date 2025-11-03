import React from 'react';

import { 
  createBrowserRouter,
  RouterProvider,
 } from "react-router";
import Home from '../Pages/Home';
import Products from '../Pages/Products';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Products",
    element: <Products />,
  },
]);

export default router;