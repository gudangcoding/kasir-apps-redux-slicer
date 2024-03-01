import axios from "axios";

const getKategori = async () => {
  const response = await axios.get("http://localhost:3000/kategori");
  return response.data;
};

export { getKategori };
