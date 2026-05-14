import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";

function Home() {

  return (

    <>
    
      <Navbar />

      <Hero />

      <Services />

      <div id="booking">

        <BookingForm />

      </div>
      <Footer/>

    </>
  );
}

export default Home;