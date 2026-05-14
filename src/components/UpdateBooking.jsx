import { useState } from "react";
import Navbar from "../components/Navbar";
import {
  getAppointmentByPhone,
  updateAppointment
} from "../services/api";

function UpdateBooking() {

  const [phone, setPhone] =
    useState("");

  const [appointmentId, setAppointmentId] =
    useState(null);

  const [formData, setFormData] =
    useState({

      customerName: "",
      phone: "",
      serviceName: "",
      bookingDate: "",
      bookingTime: ""
    });

  const fetchAppointment = async () => {

    try {

      const response =
        await getAppointmentByPhone(phone);

      const appointment =
        response.data;

      // hidden internal id
      setAppointmentId(appointment.id);

      setFormData({

        customerName:
          appointment.customerName,

        phone:
          appointment.phone,

        serviceName:
          appointment.serviceName,

        bookingDate:
          appointment.bookingDate,

        bookingTime:
          appointment.bookingTime
            .substring(0, 5)
      });

    } catch (error) {

      console.log(error);

      alert("Appointment Not Found");
    }
  };

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({

      ...prev,

      [name]: value
    }));
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const updatedData = {

        ...formData,

        bookingTime:
          formData.bookingTime + ":00"
      };

      await updateAppointment(
        appointmentId,
        updatedData
      );

      alert("Appointment Updated Successfully");

    } catch (error) {

      console.log(error);

      alert("Update Failed");
    }
  };

  return (
    <>
    <Navbar/><div className="container mt-5 section section-update">

  <div className="section-bg">

        <h2 className="text-center mb-4">
          Update Booking
        </h2>

        {/* Search Section */}

        <div className="mb-4">

          <input
            type="text"
            placeholder="Enter Phone Number"
            className="form-control mb-3"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)
            }
          />

          <button
            className="btn btn-dark w-100"
            onClick={fetchAppointment}
          >
            Find Booking
          </button>

        </div>

        {/* Update Form */}

        {appointmentId && (

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="customerName"
              placeholder="Customer Name"
              className="form-control mb-3"
              value={formData.customerName}
              onChange={handleChange}
            />

            <input
              type="text"
              name="serviceName"
              placeholder="Service Name"
              className="form-control mb-3"
              value={formData.serviceName}
              onChange={handleChange}
            />

            <input
              type="date"
              name="bookingDate"
              className="form-control mb-3"
              value={formData.bookingDate}
              onChange={handleChange}
            />

            <input
              type="time"
              name="bookingTime"
              className="form-control mb-3"
              value={formData.bookingTime}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="btn btn-warning w-100"
            >
              Update Booking
            </button>

          </form>
        )}

      </div>

    </div>
    </>
  );
}

export default UpdateBooking;