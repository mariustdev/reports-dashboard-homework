import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Error from './commons/components/Error.tsx';
import {Dashboard, PageNotFound} from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>, // Root level error handling
    children: [
      {index: true, element: <Dashboard/>},
      // {
      //   path: ":id/*",
      //   element: <StatusDetail/>,
      //   errorElement: <Error/> // Error handling for nested route
      // },
    ],
  },
  {
    path: "*",
    element: <PageNotFound/>  // Catch-all route for unmatched paths
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
