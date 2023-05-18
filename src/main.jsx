import React from 'react'
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from './App';
import Home from './Pages/Home/Home';
import ErrorPage from './Pages/ErrorPage';
import Login from './Route/Login';
import Register from './Route/Register';
import AuthProvider from './Route/AuthProvider';
import AddToys from './Pages/AddToys';
import PrivetRoute from './Route/PrivetRoute';
import ProductsAll from './Pages/ProductsAll';
import ViewDetails from './Pages/ViewDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/addToy',
        element: <PrivetRoute><AddToys></AddToys></PrivetRoute>,
      },
      {
        path: '/allProducts',
        element: <ProductsAll></ProductsAll>,
      },
      {
        path: '/viewPage/:id',
        element: <ViewDetails></ViewDetails>,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);