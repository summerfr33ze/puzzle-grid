import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css'
import Home from './components/Home'
import Create from './components/Create'
import Signup from './components/Signup'
import { Genres, Sports, Miscellaneous, TVandMovies, Numbers, Literature } from './components/Genres'
import MyPuzzles from './components/MyPuzzles'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Puzzle from './components/Puzzle'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/create",
    element: <Create />
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
      element: <Sports />,
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
    path: "/genres/:genreId/puzzles/:puzzleId",
    element: <Puzzle />
  },
  {
    path: "/my-puzzles/:currentUsername",
    element: <MyPuzzles />
  }
 
  
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



