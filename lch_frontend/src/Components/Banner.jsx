// import React from "react";
// import { assets } from "../assests/assest";
// import { useNavigate } from "react-router-dom";

// function Banner() {
//   const navigate = useNavigate();
//   return (
//     <div className="flex bg-[#fef8e9] border border-blue-200 shadow-2xl rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 ">
//       {/* ----------------Left Side--------------- */}
//       <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
//         <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl  font-semibold text-black ">
//           <p>Book Appointment </p>
//           <p className="mt-4">With 100+ Trusted Doctors </p>
//         </div>
//         <button
//           onClick={() => {
//             navigate("/login");
//             window.scrollTo(0, 0);
//           }}
//           className="bg-primary text-sm sm:text-base text-white px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all"
//         >
//           Create Account
//         </button>
//       </div>
//       {/* ----------------Right Side--------------- */}
//       <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
//         <img
//           className="w-full absolute bottom-0 right-0 max-w-md"
//           src={assets.appointment_img}
//           alt="appointment-img"
//         />
//       </div>
//     </div>
//   );
// }

// export default Banner;

// HealthKnowledgeBanner.jsx
import React from "react";

/*
  Copy-paste this component into your project.
  It uses Tailwind classes only and references the provided image URL directly.
*/

const features = [
  {
    title: "Personalized",
    subtitle: "Treatment Plans",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H7l-4 3V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: "Accessible",
    subtitle: "Information",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8h.01M11 12h2v6h-2z" />
      </svg>
    ),
  },
  {
    title: "Expert Medical",
    subtitle: "Professionals",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Advanced Healthcare",
    subtitle: "Technology",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M8 20h8M12 14v4" />
      </svg>
    ),
  },
];

export default function HealthKnowledgeBanner() {
  return (
    <section className="w-full bg-transparent">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:py-8">
        <div className="relative overflow-hidden rounded-3xl ring-1 ring-black/5 shadow-xl">
          {/* Background image */}
          <img
            src={require("../assests/docgrs.png")}
            alt="Healthcare professionals standing together"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/40" />

          {/* Soft inner edge highlight for the glassy look */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/30" />

          {/* Content */}
          <div className="relative flex flex-col items-center justify-center px-6 py-16 sm:py-20 md:py-24 text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              Elevate Your Health With Knowledge
            </h1>
            <p className="mt-3 max-w-3xl text-sm sm:text-base leading-relaxed text-white/85">
              Unveil our dedication to your well‑being and discover excellence
              in medical care with our expert specialists. Through our
              integrated care, expect personalized health solutions and
              scientific‑backed treatments.
            </p>

            {/* Feature pills */}
            <div className="mt-6 grid w-full grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
              {features.map((f, idx) => (
                <div
                  key={idx}
                  className="mx-auto flex w-full max-w-xs items-center gap-3 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-left backdrop-blur-md"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white ring-1 ring-white/30">
                    {f.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-[13px] font-semibold leading-5">
                      {f.title}
                    </p>
                    <p className="truncate text-[12px] leading-4 text-white/80">
                      {f.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rounded outer mask accent */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
        </div>
      </div>
    </section>
  );
}
