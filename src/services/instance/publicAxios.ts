import axios from "axios";
import { BASE_URL } from "../../configs/constance";

const publicAxios = axios.create({
  baseURL: BASE_URL
});





export default publicAxios