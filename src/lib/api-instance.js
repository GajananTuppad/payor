/* import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_HOST_URL;
const apiInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

apiInstance.interceptors.request.use(
  async (config) => {
    config.headers = config.headers ?? {};
    if (!config.headers["Authorization"] && config.url !== "/user/login") {
      const token = await getAccessToken();
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const getAccessToken = async () => {
  const response = await apiInstance.post("/user/login", {
    email: "donb@dentist.com",
    password: "1234qwer",
  });
  return response?.data?.accessToken;
};

export default apiInstance;
 */