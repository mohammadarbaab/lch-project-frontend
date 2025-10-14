// import React, { useContext } from "react";
// import { doctors } from "../assests/assest";
// import { useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext";
// function TopDoctors() {
//   const navigate = useNavigate();
//   const { doctors } = useContext(AppContext);
//   return (
//     <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
//       <h1 className="text-3xl font-medium">
//         Expert Doctors to Book for Fast and Effective Care
//       </h1>
//       <p className="sm:w-1/3  text-center text-sm">
//         Simply browse through our extensive list of trusted doctors.
//       </p>
//       <div className="w-full grid grid-cols-auto gap-4 gap-y-6 px-3 sm:px-0">
//         {doctors.slice(0, 10).map((item, index) => (
//           <div
//             onClick={() => navigate(`/appointment/${item._id}`)}
//             key={index}
//             className="border border-blue-200 rounded-3xl overflow-hidden cursor-pointer transform hover:translate-y-[-10px] transition-all duration-500 shadow-lg hover:shadow-2xl flex flex-col items-center py-4"
//           >
//             <img
//               src={item.image}
//               alt=""
//               className="bg-[#D8BFD8] rounded-full w-[60px] h-[70px]"
//             />
//             <div className="p-4 flex flex-col justify-center items-center">
//               <div
//                 className={`flex items-center gap-2 text-sm text-center ${
//                   item.available ? "text-green-500" : "text-gray-500"
//                 }`}
//               >
//                 <p
//                   className={`w-2 h-2 ${
//                     item.available ? "bg-green-500" : "bg-gray-500"
//                   } rounded-full`}
//                 ></p>
//                 <p>{item.available ? "Available" : "Not Available"}</p>
//               </div>
//               <p className="text-gray-900 text-lg font-medium">{item.name}</p>
//               <p className="text-gray-600 text-sm text-center">
//                 {item.speciality}
//               </p>
//               <p className="text-gray-600 text-sm text-center">{item.degree}</p>{" "}
//               <button className="bg-[#800080] px-6 py-[2px] mt-2 rounded-2xl text-white ">
//                 Details
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button
//         onClick={() => {
//           navigate("/doctors");
//           window.scrollTo(0, 0);
//         }}
//         className="bg-blue-50 text-gray-600 px-12 py-3  rounded-full mt-10"
//       >
//         more
//       </button>
//     </div>
//   );
// }

// export default TopDoctors;


import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function TopDoctors() {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  // Social icon components (same as your first snippet)
  const IconFacebook = () => (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 4.99 3.66 9.13 8.45 9.94v-7.03H7.9v-2.91h2.55V9.41c0-2.52 1.5-3.92 3.8-3.92 1.1 0 2.26.2 2.26.2v2.49h-1.27c-1.25 0-1.64.78-1.64 1.58v1.9h2.79l-.45 2.91h-2.34V22c4.79-.81 8.45-4.95 8.45-9.94Z" />
    </svg>
  );

  const IconX = () => (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M18.146 2H21l-6.54 7.47L22 22h-6.828l-5.34-6.99L3.73 22H1l7.01-8.01L2 2h6.937l4.823 6.424L18.146 2Zm-2.387 18h1.655L8.32 3.94H6.59l9.169 16.06Z" />
    </svg>
  );

  const IconInstagram = () => (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5-1.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z" />
    </svg>
  );

  const IconLinkedIn = () => (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM0 8h5v14H0V8Zm7.5 0h4.8v1.9h.07c.67-1.2 2.3-2.47 4.74-2.47 5.07 0 6 3.34 6 7.68V22h-5v-6.55c0-1.56-.03-3.56-2.17-3.56-2.17 0-2.5 1.7-2.5 3.45V22h-5V8Z" />
    </svg>
  );

  const IconArrowUpRight = () => (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );

  function IconCircle({ ariaLabel, children }) {
    return (
      <a
        href="#"
        aria-label={ariaLabel}
        onClick={(e) => e.preventDefault()}
        className="pointer-events-auto inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-600 shadow ring-1 ring-inset ring-gray-200 transition hover:bg-gray-100 hover:text-gray-900"
      >
        {children}
      </a>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4  text-gray-900">
      <h1 className="text-3xl font-medium">Expert Doctors to Book for Fast and Effective Care</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors.
      </p>

      <div className="w-full grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 px-3 sm:px-0">
        {doctors.slice(0, 4).map((item) => {
          const name = item.name || "Unnamed";
          const role = item.speciality || "Specialist";
          const img = item.image || "/placeholder.svg";

          return (
            <article
              key={item._id}
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="group relative h-[380px] w-full cursor-pointer overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-gray-200 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg sm:h-[420px]"
            >
              <img src={img} alt={`Portrait of ${name}`} className="h-full w-full object-cover" />

              <div className="pointer-events-none absolute inset-x-3 bottom-3 rounded-2xl bg-white/70 p-4 backdrop-blur-sm ring-1 ring-white/60">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
                    <p className="mt-0.5 text-sm text-gray-600">{role}</p>
                    {item.degree && (
                      <p className="mt-0.5 text-xs text-gray-500">{item.degree}</p>
                    )}
                    <div
                      className={`mt-1 flex items-center gap-2 text-xs ${
                        item.available ? "text-green-600" : "text-gray-500"
                      }`}
                    >
                      <span
                        className={`inline-block w-2 h-2 rounded-full ${
                          item.available ? "bg-green-600" : "bg-gray-400"
                        }`}
                      />
                      <span>{item.available ? "Available" : "Not Available"}</span>
                    </div>
                  </div>

                  <div className="ml-2 select-none rounded-full bg-white/80 px-3 py-1 text-xs text-gray-700 ring-1 ring-gray-200">
                    <span className="mr-1 inline-block h-2 w-2 rounded-full bg-gray-400 align-middle" />
                    Services
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <IconCircle ariaLabel="Facebook">
                      <IconFacebook />
                    </IconCircle>
                    <IconCircle ariaLabel="X (Twitter)">
                      <IconX />
                    </IconCircle>
                    <IconCircle ariaLabel="Instagram">
                      <IconInstagram />
                    </IconCircle>
                    <IconCircle ariaLabel="LinkedIn">
                      <IconLinkedIn />
                    </IconCircle>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/appointment/${item._id}`);
                    }}
                    className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-500 text-white shadow ring-1 ring-inset ring-sky-500/60 transition hover:bg-sky-600"
                    aria-label="Open profile"
                    title="Open profile"
                  >
                    <IconArrowUpRight />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <button
        onClick={() => {
          navigate("/doctors");
          window.scrollTo(0, 0);
        }}
        className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10"
      >
        More
      </button>
    </div>
  );
}

export default TopDoctors;
