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
import MyToys from './Pages/MyToys/MyToys';
import UpdateToys from './Pages/MyToys/UpdateToys';
import Blog from './Blog';
import AboutUs from './Pages/AboutUs';

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
        path: '/mytoys',
        element: <PrivetRoute><MyToys></MyToys></PrivetRoute>,
      },
      {
        path: '/allProducts',
        element: <ProductsAll></ProductsAll>,
        loader:() => fetch(`https://toyserver-two.vercel.app/totalProducts`)
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/viewPage/:id',
        element: <PrivetRoute><ViewDetails></ViewDetails></PrivetRoute>,
      },
      {
        path: '/about',
        element: <AboutUs></AboutUs>,
      },
      {
        path: '/update/:id',
        element: <PrivetRoute><UpdateToys></UpdateToys></PrivetRoute>,
        loader:({params})=>fetch(`https://toyserver-two.vercel.app/update/${params.id}`)
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