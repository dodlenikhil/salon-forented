import { useState } from "react";
import { createAppointment } from "../services/api";

function BookingForm() {

  const [formData, setFormData] = useState({

    customerName: "",
    phone: "",
    serviceName: "",
    bookingDate: "",
    bookingTime: ""
  });

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

      console.log(updatedData);

      const response =
        await createAppointment(updatedData);

      console.log(response.data);

      alert("Appointment Booked Successfully");

      setFormData({

        customerName: "",
        phone: "",
        serviceName: "",
        bookingDate: "",
        bookingTime: ""
      });

    } catch (error) {

      console.log(error.response.data);

      alert("Failed To Book Appointment");
    }
  };

  return (

    <div className="container mt-5">

      <div className="card shadow border-0 p-4">

       <h2 className="text-center mb-4">
          Book Appointment
        </h2>

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
            name="phone"
            placeholder="Phone Number"
            className="form-control mb-3"
            value={formData.phone}
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
  Book Appointment
</button>

        </form>

      </div>

    </div>
  );
}

export default BookingForm;