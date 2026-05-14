import salonImage
  from "../assets/salon2.jpg";

function Hero() {

  return (

    <div
      className="position-relative"
    >

      <img
        src={salonImage}
        alt="Salon"
        className="
        w-100
        "
        style={{

          height: "500px",

          objectFit: "cover"
        }}
      />

      <div
        className="
        position-absolute
        top-50
        start-50
        translate-middle
        text-center
        text-white
        "
      >

        <h1
          className="
          display-3
          fw-bold
          "
        >
          Luxury Salon Experience
        </h1>

        <p className="lead">

          Style, Beauty & Confidence

        </p>

        <a
          href="#booking"
          className="
          btn
          btn-warning
          btn-lg
          mt-3
          "
        >
          Book Appointment
        </a>

      </div>

    </div>
  );
}

export default Hero;