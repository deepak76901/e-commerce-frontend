// import { useState } from 'react'
import "./App.css";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import {
  createBrowserRouter,
  RouterProvider,
  
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
    element: <CartPage/>
  },
  {
    path: "checkout",
    element: <Checkout/>
  },
  {
    path: "/product-detail/:id",
    element: <ProductDetailsPage></ProductDetailsPage>
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
