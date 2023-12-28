// import { useState } from 'react'
import "./App.css";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import PageNotFound from "./pages/404";
import OrderSuccessPage from "./pages/OrderSuccessPage"
import UserOrders from "./features/user/components/UserOrders";
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import Protected from "./features/auth/components/Protected";
import { useEffect } from "react";
import { fetchItemsByUserIdAsync } from "./features/cart/CartSlice";
import { selectLoggedInUser } from "./features/auth/authSlice";
import {useDispatch,useSelector} from "react-redux"
import LogOut from "./features/auth/components/Logout";

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
    path: "/logout",
    element: <LogOut/>
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
  {
    path: "*",
    element: <PageNotFound/>
  },
  {
    path: "/order-success/:id",
    element: <OrderSuccessPage></OrderSuccessPage>
  },
  {
    path: "/orders",
    element: <UserOrders></UserOrders>
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
