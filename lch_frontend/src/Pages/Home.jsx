import React from "react";
import Header from "../Components/Header";
import SpecialityMenu from "../Components/SpecialityMenu";
import TopDoctors from "../Components/TopDoctors";
import Banner from "../Components/Banner";
import FaqSection from "../Components/Faq.jsx";
import PatientTestimonials from "../Components/PatientTestimonials.jsx";
import GetInTouchFooter from "../Components/GetInTouchFooter.jsx";

function Home() {
  return (
    <div className="">
      <Header></Header>
      <SpecialityMenu></SpecialityMenu>
      <TopDoctors></TopDoctors>
      <Banner></Banner>
      <FaqSection></FaqSection>
      <PatientTestimonials></PatientTestimonials>
      {/* <GetInTouchFooter></GetInTouchFooter> */}
    </div>
  );
}

export default Home;
