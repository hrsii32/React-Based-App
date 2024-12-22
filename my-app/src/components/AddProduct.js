import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/product.css";

const AddProduct = () => {
  const [product, setProduct] = useState({ name: "", price: "", image: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setProduct({ ...product, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.name || !product.price) {
      setError("Both Name and Price are required.");
      return;
    }

    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    if (storedProducts.find((p) => p.name === product.name)) {
      setError("Product with the same name already exists.");
      return;
    }

    storedProducts.push({ ...product, id: Date.now() });
    localStorage.setItem("products", JSON.stringify(storedProducts));
    navigate("/home");
  };

  return (
    <div className="add-product-container animated-fadeIn">
      <h2 className="animated-slideIn">Add New Product</h2>
      <form className="add-product-form" onSubmit={handleSubmit}>
        {error && <p className="error-message">{error}</p>}
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          className="animated-input"
        />
        <input
          type="number"
          name="price"
          placeholder="Product Price"
          value={product.price}
          onChange={handleChange}
          className="animated-input"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="animated-file-input"
        />
        <button type="submit" className="add-product-button animated-button">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
