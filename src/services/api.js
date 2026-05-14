import axios from "axios";

const API = axios.create({
  baseURL: "https://salon-backend-al65.onrender.com/api",
});

export const getServices = () => {

  return axios.get(
    `${BASE_URL}/services`
  );
};

export const createAppointment =
  (data) => {

  return axios.post(
    `${BASE_URL}/appointments`,
    data
  );
};

export const getAppointments = () => {

  return axios.get(
    `${BASE_URL}/appointments`
  );
};

export const deleteAppointment =
  (id) => {

  return axios.delete(
    `${BASE_URL}/appointments/${id}`
  );
};

export const updateAppointment =
  (id, data) => {

  return axios.put(
    `${BASE_URL}/appointments/${id}`,
    data
  );
};

export const getAppointmentByPhone =
  (phone) => {

  return axios.get(
    `${BASE_URL}/appointments/phone/${phone}`
  );
};