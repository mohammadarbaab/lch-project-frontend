import { assets } from "../assests/assest";
import React, { useContext, useEffect, useState } from "react";

function Footer() {
  return (
    // <div className="md:mx-10">
    //   <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
    //     {/* left section */}
    //     <div>
    //       <img src={assets.logo} alt="" className="mb-5 w-40" />
    //       <p className="w-full md:w-2/3 text-gray-600 leading-6">
    //         <b>Limra child hospital</b> Specialized in preventive care,
    //         immunizations, and growth monitoring, we prioritize your child’s
    //         well-being. With a focus on quality and personalized attention, we
    //         are here for your little ones every step of the way.
    //       </p>
    //     </div>
    //     {/* center section */}
    //     <div>
    //       <p className="text-xl font-medium mb-5">company</p>
    //       <ul className="flex flex-col gap-2 text-gray-600">
    //         <li>Home</li>
    //         <li>About us</li>
    //         <li>Contact us</li>
    //         <li>Privacy Policy</li>
    //       </ul>
    //     </div>
    //     {/* right section */}
    //     <div>
    //       <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
    //       <ul className="flex flex-col gap-2 text-gray-600">
    //         <li>+8057070230</li>
    //         <li>kazmirwrite@gmail.com</li>
    //         <li>
    //           <b>Instaram:</b>@meinbcawala
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    //   {/* copy right */}
    //   <div>
    //     <hr />
    //     <p className="py-5 text-sm text-center ">
    //       Copyright © 2024 - All Right Reserved.
    //     </p>
    //   </div>
    // </div>
    <div className="mb-1 mt-24   flex flex-col gap-6 justify-evenly">
      {/* Middle div */}
      <div className="flex flex-wrap md:flex-row flex-col gap-4">
        {/* Expertise Card */}
        <div className="flex flex-col flex-wrap gap-4 bg-gradient-to-r from-[#800080] to-[#9b59b6] p-8 rounded-2xl text-white shadow-2xl flex-1 md:min-w-[400px] md:max-w-[400px] w-auto">
          <h2 className="font-semibold text-[24px]">
            Expertise
            <hr className="border-t-4 border-gray-400 mt-2 rounded-2xl" />
          </h2>

          <ul className="flex flex-col gap-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Pediatrics: Children's Health & Wellness
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Neurology: Brain & Nervous System Care
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Cardiology: Heart & Vascular Health
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Gynecology: Women's Health
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Orthopedics: Bone, Joint & Muscle Health
              </a>
            </li>
          </ul>
        </div>

        {/* Services Card */}
        <div className="flex flex-col flex-wrap gap-4 bg-gradient-to-r from-[#800080] to-[#9b59b6] p-8 rounded-2xl text-white shadow-2xl flex-1 md:min-w-[250px] lg:w-auto w-auto">
          <h2 className="font-semibold text-[24px]">
            Services
            <hr className="border-t-4 border-gray-400 mt-2 rounded-2xl" />
          </h2>
          <ul className="flex flex-col gap-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Online Consultation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Appointment Booking
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Health Check-ups
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Emergency Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Lab Tests
              </a>
            </li>
          </ul>
        </div>

        {/* Learn & Support Card */}
        <div className="flex flex-col flex-wrap gap-4 bg-gradient-to-r from-[#800080] to-[#9b59b6] p-8 rounded-2xl text-white shadow-2xl flex-1 md:min-w-[250px] lg:max-w-[300px] w-auto">
          <h2 className="font-semibold text-[24px]">
            Learn & Support
            <hr className="border-t-4 border-gray-400 mt-2 rounded-2xl" />
          </h2>
          <ul className="flex flex-col gap-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Health Articles
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Patient Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Why Choose Us Card */}
        <div className="flex flex-col flex-wrap gap-4 bg-gradient-to-r from-[#800080] to-[#9b59b6] p-8 rounded-2xl text-white shadow-2xl flex-1 md:min-w-[250px] lg:w-auto w-auto">
          <h2 className="font-semibold text-[24px]">
            Why Choose Us?
            <hr className="border-t-4 border-gray-400 mt-2 rounded-2xl" />
          </h2>
          <ul className="flex flex-col gap-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Experienced Doctors
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Affordable Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Personalized Care
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Convenient Access
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Patient Satisfaction
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Div */}
      <div className="flex sm:flex-row sm:gap-0 gap-3 flex-col flex-wrap justify-between bg-primary p-4 rounded-2xl text-gray-400 items-center">
        <h2 className="text-[12px] sm:text-[14px]">MeDifyCare</h2>

        <h2 className="text-[12px] sm:text-[14px]">©2024 MeDifyCare,All rights reserved.</h2>

        <div className="flex flex-row flex-wrap sm:gap-4 gap-2">
          <img
            src={assets.linkdln}
            alt="LinkedIn icon"
            className="sm:w-[20px] sm:h-[20px] w-[15px] h-[15px]"
          />
          <img
            src={assets.twitter}
            alt="Twitter icon"
            className="sm:w-[20px] sm:h-[20px] w-[15px] h-[15px]"
          />
          <img
            src={assets.facebook}
            alt="Facebook icon"
            className="sm:w-[20px] sm:h-[20px] w-[15px] h-[15px]"
          />
          <img
            src={assets.youtube}
            alt="YouTube icon"
            className="sm:w-[20px] sm:h-[20px] w-[15px] h-[15px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
