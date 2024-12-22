import axios from "axios";

export const login = (email, password) => {
  return axios.post("https://reqres.in/api/login", { email, password });
};
