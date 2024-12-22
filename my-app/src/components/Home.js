import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };


  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };


  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Hi Fi Shop & Service</h1>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />
      </div>

      {filteredProducts.length > 0 && (
        <h2 className="product-header">Products Added</h2>
      )}

      <div className="product-list">
        {filteredProducts.length ? (
          filteredProducts.map((product) => (
            <div className="product-item animated-product" key={product.id}>
              {product.image && (
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
              )}
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <button
                className="delete-button"
                onClick={() => handleDelete(product.id)}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="no-products">No Products Found</p>
        )}
      </div>

      <Link to="/add-product">
        <button className="add-product-button">Add Product</button>
      </Link>
    </div>
  );
};

export default Home;
