import { CREATE, READ, GET, UPDATE, DELETE } from "./types";

import axios from "axios";

// Adding Data
export const createData = (data) => {
  const response = axios.post("http://localhost:3001/employee", data);
  // console.log(response, "response");
  return { type: CREATE, payload: response.data };
};

// Read Data
export const readData = () => {
  return async (dispatch) => {
    const response = await axios.get("http://localhost:3001/employee");
    // console.log(response.data);

    dispatch({ type: READ, payload: response.data });
  };
};

export const getData = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`http://localhost:3001/employee/${id}`);
    // console.log(response.data, "This is data");

    dispatch({ type: GET, payload: response.data });
  };
};

// Update Data
export const updateData = (id, data) => {
  const response = axios.put(`http://localhost:3001/employee/${id}`, data);
  // console.log(response.data, "This is data");

  return { type: UPDATE, payload: response.data };
};

// Delete Data
export const deleteData = (id) => {
  const response = axios.delete(`http://localhost:3001/employee/${id}`);

  return { type: DELETE, payload: response.data };
};

export const showData = (data) => {
  return { type: "SHOW", payload: data };
};
