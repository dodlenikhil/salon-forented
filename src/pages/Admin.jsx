import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import {
  getAppointments,
  deleteAppointment
} from "../services/api";

function Admin() {

  const [appointments,
    setAppointments] = useState([]);

  const [search,
    setSearch] = useState("");

  // LOAD DATA

  useEffect(() => {

    const fetchData = async () => {

      try {

        const response =
          await getAppointments();

        setAppointments(
          response.data
        );

      } catch (error) {

        console.log(error);
      }
    };

    fetchData();

  }, []);

  // DELETE APPOINTMENT

  const handleDelete =
    async (id) => {

    try {

      await deleteAppointment(id);

      alert(
        "Appointment Deleted"
      );

      setAppointments(

        appointments.filter(

          (appointment) =>

            appointment.id !== id
        )
      );

    } catch (error) {

      console.log(error);

      alert("Delete Failed");
    }
  };

  // SEARCH FILTER

  const filteredAppointments =
    appointments.filter(

      (appointment) =>

        appointment.customerName
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );

  return (
        <>
        <Navbar />
    <div className="container mt-5 section section-admin">

      <div className="section-bg">

      <h2 className="text-center mb-4">
        Admin Dashboard
      </h2>

      {/* SEARCH */}

      <input
        type="text"
        placeholder="Search Customer"
        className="
        form-control
        mb-4
        "
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      {/* TABLE */}

      <div className="table-responsive">

        <table
          className="
          table
          table-bordered
          table-hover
          "
        >

          <thead
            className="table-dark"
          >

            <tr>

              <th>ID</th>

              <th>Name</th>

              <th>Phone</th>

              <th>Service</th>

              <th>Date</th>

              <th>Time</th>

              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {filteredAppointments.map(

              (appointment) => (

              <tr
                key={appointment.id}
              >

                <td>
                  {appointment.id}
                </td>

                <td>
                  {
                    appointment.customerName
                  }
                </td>

                <td>
                  {
                    appointment.phone
                  }
                </td>

                <td>
                  {
                    appointment.serviceName
                  }
                </td>

                <td>
                  {
                    appointment.bookingDate
                  }
                </td>

                <td>
                  {
                    appointment.bookingTime
                  }
                </td>

                <td>

                  <button
                    className="
                    btn
                    btn-danger
                    btn-sm
                    "
                    onClick={() =>
                      handleDelete(
                        appointment.id
                      )
                    }
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
    </div>
    </>
  );
}

export default Admin;