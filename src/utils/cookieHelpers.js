import Cookies from "js-cookie";

export const isAuthenticated = () => {
  let isAuthenticated = false;

  if (Cookies.get("_aId")) {
    try {
      const key = decodeURI(Cookies.get("_aId"));
      const keyValue = JSON.parse(key);

      isAuthenticated = keyValue._aId;
    } catch (e) {
      Cookies.remove("_aId");
      isAuthenticated = false;
    }
  }

  return isAuthenticated;
};

export const getToken = () => {
  let token = "";

  if (Cookies.get("_tId")) {
    token = Cookies.get("_tId");
    return token;
  }

  return token;
};

export const getUser = () => {
  let user = {};

  if (Cookies.get("_uId")) {
    user = Cookies.get("_uId");
    user = JSON.parse(user);
    return user;
  }

  return user;
};
