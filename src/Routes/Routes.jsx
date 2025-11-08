import React from 'react';
import { 
  createBrowserRouter,
  RouterProvider,
 } from "react-router";
import Home from '../Pages/Home';
import MainLayouts from '../Layouts/MainLayouts';
import Apps from '../Pages/Apps';
import ErrorPage from '../Pages/ErrorPage';
import Installs from '../Pages/Installs';
import AppsDetails from '../Pages/AppsDetails'



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement:<ErrorPage />,
    children:[
      {
        index:true,
        element:<Home />,
        
      },
      {
    path: "/Apps",
    element: <Apps />,
  },
  {
    path: "/Installs",
    element: <Installs />,
  },
  {
    path: "/app/:id",
    element: <AppsDetails />,
  },
    ]
  },
  
]);

export default router;