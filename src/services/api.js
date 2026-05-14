import axios from "axios";

const API = axios.create({
  baseURL: "https://salon-backend-al65.onrender.com/api",
});

export const getServices = () => {
  return API.get("/services");
};

export const createAppointment = (data) => {
  return API.post("/appointments", data);
};

export const getAppointments = () => {
  return API.get("/appointments");
};

export const deleteAppointment = (id) => {
  return API.delete(`/appointments/${id}`);
};

export const updateAppointment = (id, data) => {
  return API.put(`/appointments/${id}`, data);
};

export const getAppointmentByPhone = (phone) => {
  return API.get(`/appointments/phone/${phone}`);
};