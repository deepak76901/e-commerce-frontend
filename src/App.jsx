// import { useState } from 'react'
import "./App.css";
import Cart from "./features/cart/Cart";
import Home from "./pages/Home";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home/>
    ),
  },
  {
    path: "signin",
    element: <SigninPage/>
  },
  {
    path: "signup",
    element: <SignupPage/>
  },
  {
    path: "cart",
    element: <Cart/>
  },
]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
      
      
    </>
  );
}

export default App;
