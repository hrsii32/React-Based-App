import React from "react";
import "../styles/product.css";

const SearchBar = ({ products, setProducts }) => {
  const handleSearch = (query) => {
    const allProducts = JSON.parse(localStorage.getItem("products")) || [];
    const filteredProducts = allProducts.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search Products"
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
};

export default SearchBar;
