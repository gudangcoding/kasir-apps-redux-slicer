import axios from "axios";

const getCart = async () => {
  const response = await axios.get("http://localhost:3000/keranjang");
  return response.data;
};

export { getCart };
