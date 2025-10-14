import React, { useState } from "react";
import { assets } from "../assests/assest.js";
import items from "../Test/Data.js";
import FaqSection from "../Components/Faq.jsx";

function Contact() {
  const [openIndex, setOpenIndex] = useState(null);


  // Toggle function to show/hide the description
  const toggleDescription = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Close if the same is clicked, else open
  };
  return (
    <>
      <div className="flex flex-wrap flex-col justify-center items-center gap-16">
  <div className="flex flex-col justify-center items-center gap-4 mt-4 p-4">
    <img src={assets.lch_logo} alt="MzN Top Doctors Logo" className="w-12" />
    <p className="flex flex-wrap md:text-4xl text-2xl font-semibold text-center">
      Contact our friendly team
    </p>
    <p className="flex flex-wrap text-gray-500">
      Let us know how we can help.
    </p>
  </div>

  <div className="flex flex-wrap flex-row gap-4 w-full items-center justify-center">
    <div className="flex flex-wrap flex-col gap-5 border p-4 rounded-lg shadow-lg w-full sm:max-w-[100%] md:max-w-[50%] lg:max-w-[22%] md:h-[40vh]">
      <div>
        <img
          src={assets.customer_service}
          alt="Customer Service"
          className="w-8 border rounded-lg p-1"
        />
      </div>
      <div className="flex flex-col flex-wrap gap-1">
        <p className="flex flex-wrap font-semibold">Chat to appointment</p>
        <p className="flex flex-wrap text-gray-500">Speak to our friendly team</p>
        <p>
          <a href="mailto:kazmiwrite@gmail.com" className="underline">
            kazmiwrite@gmail.com
          </a>
        </p>
      </div>
    </div>

    <div className="flex flex-wrap flex-col gap-5 border p-4 rounded-lg shadow-lg w-full sm:max-w-[100%] md:max-w-[50%] lg:max-w-[22%] md:h-[40vh]">
      <div>
        <img
          src={assets.customer_support}
          alt="Customer Support"
          className="w-8 border rounded-lg p-1"
        />
      </div>
      <div className="flex flex-col flex-wrap gap-1">
        <p className="flex flex-wrap font-semibold">Chat to support</p>
        <p className="flex flex-wrap text-gray-500">We are here to help</p>
        <p>
          <a href="mailto:kazmiwrite@gmail.com" className="underline">
            support@kazmiwrite.com
          </a>
        </p>
      </div>
    </div>

    <div className="flex flex-wrap flex-col gap-5 border p-4 rounded-lg shadow-lg w-full sm:max-w-[100%] md:max-w-[50%] lg:max-w-[22%] md:h-[40vh]">
      <div>
        <img
          src={assets.placeholder}
          alt="Visit Us"
          className="w-8 border rounded-lg p-1"
        />
      </div>
      <div className="flex flex-col flex-wrap gap-1">
        <p className="flex flex-wrap font-semibold">Visit us</p>
        <p className="flex flex-wrap text-gray-500">Visit our office HQ in Muzaffarnagar, UP</p>
        <p>
          <a
            href="https://www.google.com/maps/search/Muzaffarnagar,+Uttar+Pradesh"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            View on Google Maps
          </a>
        </p>
      </div>
    </div>

    <div className="flex flex-wrap flex-col gap-5 border p-4 rounded-lg shadow-lg w-full sm:max-w-[100%] md:max-w-[50%] lg:max-w-[22%] md:h-[40vh]">
      <div>
        <img
          src={assets.technical_support}
          alt="Call Us"
          className="w-8 border rounded-lg p-1"
        />
      </div>
      <div className="flex flex-col flex-wrap gap-1">
        <p className="flex flex-wrap font-semibold">Call us</p>
        <p className="flex flex-wrap text-gray-500">Mon-Fri from 8am to 5pm</p>
        <p>
          <a href="tel:+918057070230" className="underline">
            +91 80570 70230
          </a>
        </p>
      </div>
    </div>
  </div>

  <FaqSection />
</div>

    </>
  );
}

export default Contact;
