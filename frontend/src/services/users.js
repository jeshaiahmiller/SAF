import api from "./apiConfig";

export const logIn = async (credentials) => {
  try {
    const res = await api.post("/login/", credentials);
    localStorage.setItem("token", res.data.access);
    localStorage.setItem("refresh", res.data.refresh);
    return res;
  } catch (error) {
    throw error;
  }
};

export const logOut = async () => {
  try {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh");
    return true;
  } catch (error) {
    throw error;
  }
};

export const verifyUser = async () => {
  const refresh = localStorage.getItem("refresh");
  if (refresh) {
    const res = await api.post("/refresh-token/", { refresh });
    localStorage.setItem("token", res.data.access);
    return res;
  }
  return false;
};