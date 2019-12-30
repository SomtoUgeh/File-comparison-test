import api from "api";
import axios from "axios";
import Cookies from "js-cookie";

// requests without headers
export const getApiZero = async url => {
  const { data } = await axios.get(`${api}/${url}`);

  return data;
};

export const postApiZero = async (url, payload) => {
  const { data } = await axios.post(`${api}/${url}`, payload);

  return data;
};

export const getApi = async url => {
  const token = await Cookies.get("_tId");

  const { data } = await axios.get(`${api}/${url}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return data;
};

export const postApi = async (url, payload) => {
  const token = await Cookies.get("_tId");

  const { data } = await axios.post(`${api}/${url}`, payload, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return data;
};

export const putApi = async (url, payload) => {
  const token = await Cookies.get("_tId");

  const { data } = await axios.put(`${api}/${url}`, payload, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return data;
};

export const patchApi = async (url, payload) => {
  const token = await Cookies.get("_tId");

  const { data } = await axios.patch(`${api}/${url}`, payload, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return data;
};

export const deleteApi = async url => {
  const token = await Cookies.get("_tId");

  const { data } = await axios.delete(`${api}/${url}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return data;
};
