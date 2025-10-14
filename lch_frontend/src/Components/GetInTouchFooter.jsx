// // GetInTouchFooter.jsx
// import React from "react";

// export default function GetInTouchFooter() {
//   return (
//     <section className="w-full bg-white">
//       {/* Header area with subtle gradient bar */}
//       <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 md:pt-14">
//         {/* Gradient stripe on the right */}
//         <div className="pointer-events-none absolute right-0 top-6 h-16 w-40 rounded-l-full bg-gradient-to-r from-sky-200 to-sky-400 md:w-80" />

//         <h2 className="relative text-4xl md:text-6xl font-semibold tracking-tight text-black">
//           GET IN TOUCH
//         </h2>
//         <p className="relative mt-3 max-w-2xl text-gray-600 leading-relaxed">
//           Contact us anytime for appointments. Quick support and clear answers
//           for all your health care needs.
//         </p>

//         <button
//           type="button"
//           className="relative mt-6 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sky-700 hover:bg-sky-200 transition-colors"
//         >
//           <span className="text-sm font-medium">Services</span>
//           {/* Arrow up-right icon */}
//           <svg
//             className="h-4 w-4"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             aria-hidden="true"
//           >
//             <path d="M7 17L17 7" />
//             <path d="M8 7h9v9" />
//           </svg>
//         </button>
//       </div>

//       {/* Footer card */}
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
//         <div className="rounded-[28px] bg-black text-white shadow-lg">
//           <div className="grid grid-cols-1 md:grid-cols-5 gap-10 p-6 md:p-10">
//             {/* Logo + blurb */}
//             <div className="md:col-span-2">
//               <div className="text-3xl font-semibold tracking-wide">Loop</div>
//               <p className="mt-4 max-w-sm text-gray-300 leading-relaxed">
//                 Lorem ipsum dolor sit amet vitae malesuada tortor ullam eget
//                 turpis.
//               </p>

//               {/* Social icons */}
//               <div className="mt-6 flex items-center gap-3">
//                 {[
//                   {
//                     key: "fb",
//                     href: "#",
//                     label: "Facebook",
//                     svg: (
//                       <path d="M13 22v-8h3l1-4h-4V7.5c0-1.1.3-1.8 1.9-1.8H17V2.2C16.7 2.1 15.7 2 14.5 2 11.9 2 10 3.7 10 7v3H7v4h3v8h3z" />
//                     ),
//                   },
//                   {
//                     key: "tw",
//                     href: "#",
//                     label: "Twitter",
//                     svg: (
//                       <path d="M22 5.8c-.7.3-1.4.5-2.2.6.8-.5 1.3-1.1 1.6-2-.7.4-1.5.7-2.4.9a3.8 3.8 0 0 0-6.5 3.5c-3.1-.1-5.9-1.7-7.8-4a3.8 3.8 0 0 0 .6 5.1c-.6 0-1.2-.2-1.7-.5v.1c0 1.9 1.4 3.6 3.3 4-.3.1-.7.1-1 .1-.2 0-.5 0-.7-.1.5 1.7 2.1 2.9 3.9 3a7.7 7.7 0 0 1-4.8 1.7H3a10.8 10.8 0 0 0 5.8 1.7c7 0 10.9-6 10.9-11.2v-.5c.7-.5 1.3-1.1 1.8-1.8z" />
//                     ),
//                   },
//                   // Add more here as needed
//                 ].map(({ key, href, label, svg }) => (
//                   <a
//                     key={key}
//                     href={href}
//                     className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
//                     aria-label={label}
//                   >
//                     <svg
//                       className="h-4 w-4 text-white"
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                       aria-hidden="true"
//                     >
//                       {svg}
//                     </svg>
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Link columns */}
//             <div>
//               <h4 className="text-sm font-semibold tracking-wide text-white/80">
//                 COMMUNITY
//               </h4>
//               <ul className="mt-4 space-y-2 text-gray-300">
//                 <li>
//                   <a className="hover:text-white transition" href="#">
//                     Doctors
//                   </a>
//                 </li>
//                 <li>
//                   <a className="hover:text-white transition" href="#">
//                     Testimonials
//                   </a>
//                 </li>
//                 <li>
//                   <a className="hover:text-white transition" href="#">
//                     FAQs
//                   </a>
//                 </li>
//                 <li>
//                   <a className="hover:text-white transition" href="#">
//                     Blog
//                   </a>
//                 </li>
//                 <li>
//                   <a className="hover:text-white transition" href="#">
//                     Site Map
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="text-sm font-semibold tracking-wide text-white/80">
//                 ABOUT
//               </h4>
//               <ul className="mt-4 space-y-2 text-gray-300">
//                 <li>
//                   <a className="hover:text-white transition" href="#">
//                     Areas Of Care
//                   </a>
//                 </li>
//                 <li>
//                   <a className="hover:text-white transition" href="#">
//                     Careers
//                   </a>
//                 </li>
//                 <li>
//                   <a className="hover:text-white transition" href="#">
//                     Education
//                   </a>
//                 </li>
//                 <li>
//                   <a className="hover:text-white transition" href="#">
//                     About Us
//                   </a>
//                 </li>
//                 <li>
//                   <a className="hover:text-white transition" href="#">
//                     Volunteers
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="text-sm font-semibold tracking-wide text-white/80">
//                 SUPPORT
//               </h4>
//               <ul className="mt-4 space-y-2 text-gray-300">
//                 <li>
//                   <a className="hover:text-white transition" href="#">
//                     Visitor Information
//                   </a>
//                 </li>
//                 <li>
//                   <a className="hover:text-white transition" href="#">
//                     Emergency Care
//                   </a>
//                 </li>
//                 <li>
//                   <a className="hover:text-white transition" href="#">
//                     Donate
//                   </a>
//                 </li>
//                 <li>
//                   <a className="hover:text-white transition" href="#">
//                     Online Services
//                   </a>
//                 </li>
//                 <li>
//                   <a className="hover:text-white transition" href="#">
//                     Pay Your Bill
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* Subscribe */}
//             <div className="md:flex md:flex-col md:items-end">
//               <label className="text-sm font-semibold tracking-wide text-white/80">
//                 Subscribe
//               </label>
//               <div className="mt-4 flex w-full items-center gap-2 rounded-full bg-white/10 p-1 md:w-[320px]">
//                 <input
//                   type="email"
//                   placeholder="Enter Your Email"
//                   className="w-full rounded-full bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/60 focus:outline-none"
//                 />
//                 <button
//                   type="button"
//                   className="shrink-0 rounded-full bg-sky-400 px-4 py-2 text-sm font-medium text-black hover:bg-sky-300 transition"
//                 >
//                   Subscribe
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Bottom bar */}
//           <div className="border-t border-white/10 px-6 md:px-10 py-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
//             <p className="text-xs text-white/70">
//               ©2025 UxLig. All Rights Reserved
//             </p>
//             <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/70">
//               <li>
//                 <a className="hover:text-white transition" href="#">
//                   Terms &amp; Condition
//                 </a>
//               </li>
//               <li>
//                 <a className="hover:text-white transition" href="#">
//                   Privacy Policy
//                 </a>
//               </li>
//               <li>
//                 <a className="hover:text-white transition" href="#">
//                   Hospital Stay
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
