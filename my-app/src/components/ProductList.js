import React from "react";
import "../styles/product.css";

const ProductList = ({ products, setProducts }) => {
  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
  };

  return (
    <div className="product-list-container">
      {products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
              <button onClick={() => handleDelete(product.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Products Found</p>
      )}
    </div>
  );
};

export default ProductList;
