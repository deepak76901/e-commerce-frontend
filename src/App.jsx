// import { useState } from 'react'
import "./App.css";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import Protected from "./features/auth/components/Protected";
import { useEffect } from "react";
import { fetchItemsByUserIdAsync } from "./features/cart/CartSlice";
import { selectLoggedInUser } from "./features/auth/authSlice";
import {useDispatch,useSelector} from "react-redux"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home/>
    ),
  },
  {
    path: "login",
    element: <LoginPage/>
  },
  {
    path: "signup",
    element: <SignupPage/>
  },
  {
    path: "cart",
    element: <Protected><CartPage/></Protected>
  },
  {
    path: "checkout",
    element: <Protected><Checkout/></Protected>
  },
  {
    path: "/product-detail/:id",
    element: <Protected><ProductDetailsPage/></Protected>
  },
]);


function App() {

  const dispatch = useDispatch()
  const user = useSelector(selectLoggedInUser)

  
  useEffect(() => {
    if(user){
    
      dispatch(fetchItemsByUserIdAsync(user.id))
    }
  }, [user,dispatch])

  return (
    <>
      <RouterProvider router={router} />
      
      
    </>
  );
}

export default App;
