import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css'
import Home from './components/Home'
import Create from './components/Create'
import Login from './components/Login'
import Signup from './components/Signup'
import { Genres, Sports, Miscellaneous, TVandMovies, Numbers, Literature } from './components/Genres'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/genres",
    element: <Genres />,
    children: [
      {
      path: "miscellaneous",
      element : <Miscellaneous />
      },
      {
      path: "sports",
      element: <Sports />
      },
      {
      path: "tv-and-movies",
      element: <TVandMovies />
      },
      {
      path: "numbers",
      element: <Numbers />
      },
      {
      path: "literature",
      element: <Literature />
      },
      

    ]
  },
  {
    path: "/create",
    element: <Create />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



