"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function About() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log("🚀 ~ file: page.jsx:9 ~ fetchData ~ data:", data);
      setProducts(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>HIIIIIIIII</h1>
      <h1> hello</h1>
      <div>
        {products.map((product) => {
          return (
            <Image
              key={product.id}
              src={product.image}
              alt={product.title}
              width={300}
              height={300}
            />
          );
        })}
      </div>
    </>
  );
}
