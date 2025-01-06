import React from "react";

const Products = () => {
  const products = [
    { id: 1, name: "product1" },
    { id: 2, name: "product2" },
    { id: 3, name: "product3" },
    { id: 4, name: "product4" },
    { id: 5, name: "product5" },
  ];
  const addItem=()=>{

  }
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => {
          return <li key={product.id}>{product.name} <button onClick={()=>addItem(product.id)}>Add</button></li>; //key is necessary for react to identify elements uniquely
        })}
      </ul>
    </div>
  );
};

export default Products;
