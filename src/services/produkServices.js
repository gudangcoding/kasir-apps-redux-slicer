import axios from "axios";

const getProduk = async () => {
  const response = await axios.get("http://localhost:3000/produk");
  return response.data;
};

export { getProduk };
