export const saveProducts = (products) => {
    localStorage.setItem("products", JSON.stringify(products));
  };
  
  export const getProducts = () => {
    return JSON.parse(localStorage.getItem("products")) || [];
  };
  
  export const saveToken = (token) => {
    localStorage.setItem("token", token);
  };
  
  export const removeToken = () => {
    localStorage.removeItem("token");
  };
  
  export const getToken = () => {
    return localStorage.getItem("token");
  };
  