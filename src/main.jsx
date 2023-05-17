import React from 'react'
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from './App';
import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);