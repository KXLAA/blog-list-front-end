import axios from "axios";
const baseUrl = "/api/blogs";

const login = async (credentials) => {
  const resposne = await axios.post(baseUrl, credentials);
  return resposne.data;
};

export default { login };
