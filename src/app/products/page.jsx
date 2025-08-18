"use client";

import { useEffect, useState } from "react";
// import { getData } from "../utils/api";

function Products() {
  const [products, setProducts] = useState([]);

  const getProductsData = async () => {
    try {
      // const data = await getData("products");
      //  setProducts(data.products);

      const data = await fetch("https://dummyjson.com/products");
      const jsonData = await data.json(data);
      setProducts(jsonData.products);
    } catch (error) {
      console.log(error, "ERROR ISHLADI");
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div>
      <h1>Mahsulotlar ro‘yxati</h1>
      {products?.slice(0, 6).map((item) => (
        <div key={item.id}>{item.description}</div>
      ))}
    </div>
  );
}

export default Products;
