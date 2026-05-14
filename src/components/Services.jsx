import { useEffect, useState } from "react";
import { getServices } from "../services/api";

function Services() {

  const [services, setServices] = useState([]);

  useEffect(() => {

    const loadServices = async () => {

      try {

        const response = await getServices();

        setServices(response.data);

      } catch (error) {

        console.log(error);
      }
    };

    loadServices();

  }, []);

  return (

  <div className="container mt-5 section section-services">

    <h2 className="text-center mb-5">
      Our Services
    </h2>

    <div className="row">

      {services.map((service) => (

        <div
          className="col-md-4 mb-4"
          key={service.id}
        >

          <div
  className="
  card
  shadow
  border-0
  h-100
  service-card
  "
>
            <div className="card-body">

              <h4 className="card-title">
                {service.name}
              </h4>

              <p className="card-text">

                {service.description}

              </p>

              <h5 className="text-warning">

                ₹ {service.price}

              </h5>

            </div>

          </div>

        </div>
      ))}

    </div>

  </div>
);
}

export default Services;