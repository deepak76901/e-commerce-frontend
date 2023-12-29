import React from "react";
import Navbar from "../features/Navbar/Navbar";
import ProductList from "../features/Product/components/ProductList";

function AdminHome() {
  return (
    <div>
      <Navbar />
      <ProductList />
    </div>
  );
}

export default AdminHome;
