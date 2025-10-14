// PatientTestimonials.jsx
import React, { useId } from "react";

function HalfStar({ className = "h-5 w-5" }) {
  const id = useId();
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`half-${id}`}>
          <stop offset="50%" stopColor="currentColor" />
          <stop offset="50%" stopColor="#E5E7EB" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#half-${id})`}
        d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"
      />
    </svg>
  );
}

function FullStar({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"
      />
    </svg>
  );
}

function EmptyStar({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#E5E7EB"
        d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"
      />
    </svg>
  );
}

function Stars({ rating = 4.5 }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const diff = rating - i;
    if (diff >= 0) stars.push(<FullStar key={i} className="h-5 w-5" />);
    else if (diff > -1 && diff < 0)
      stars.push(<HalfStar key={i} className="h-5 w-5" />);
    else stars.push(<EmptyStar key={i} className="h-5 w-5" />);
  }
  return <div className="flex items-center gap-1 text-sky-500">{stars}</div>;
}

function VerifiedBadge() {
  return (
    <span className="inline-flex items-center gap-1 text-emerald-600 text-sm font-medium">
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 2 2 7v6c0 5 3.8 9.7 10 9 6.2.7 10-4 10-9V7l-10-5zm-2 14-4-4 1.4-1.4L10 12.2l6.6-6.6L18 7l-8 9z" />
      </svg>
      Verified Patient
    </span>
  );
}

function ReviewCard({ avatar, name, ageRange, rating, title, quote, clinic }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-[220px_minmax(0,1fr)]">
        {/* Left profile panel */}
        <div className="p-5 md:p-6 bg-white">
          <div className="flex items-center gap-3">
            <img
              src={avatar || "/placeholder.svg"}
              alt={`${name} avatar`}
              className="h-12 w-12 rounded-full object-cover ring-2 ring-gray-100"
            />
            <div>
              <p className="font-semibold text-gray-900">{name}</p>
              <VerifiedBadge />
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-gray-200 p-4">
            <p className="text-xs uppercase tracking-wide text-gray-500">
              Age Range
            </p>
            <p className="text-sm font-medium text-gray-900">{ageRange}</p>
            {clinic && (
              <p className="mt-2 text-xs text-gray-500">
                Clinic:{" "}
                <span className="font-medium text-gray-700">{clinic}</span>
              </p>
            )}
          </div>
        </div>

        {/* Right content panel */}
        <div className="md:border-l border-gray-200">
          <div className="p-5 md:p-6">
            <Stars rating={rating} />
            <h3 className="mt-3 text-2xl font-semibold text-gray-900">
              {title}
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">{quote}</p>
          </div>

          <div className="h-px bg-gray-200" />
          <div className="px-5 py-3 md:px-6">
            <p className="text-xs text-gray-500">
              Feedback from a verified consultation in Muzaffarnagar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function PatientTestimonials() {
//   return (
//     <section className="w-full">
//       <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14">
//         <header className="text-center max-w-3xl mx-auto">
//           <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
//             What patients in Muzaffarnagar say
//             <br className="hidden sm:block" /> about our care
//           </h2>
//           <p className="mt-3 text-gray-500 leading-relaxed">
//             Real experiences from local patients — appointment ease, clear
//             explanations, and follow-up care that makes a difference.
//           </p>
//         </header>

//         <div className="mt-8 space-y-5">
//           <ReviewCard
//             avatar="https://i.pravatar.cc/80?img=47"
//             name="Suman Verma"
//             ageRange="35–40 yrs"
//             rating={5}
//             clinic="City Care Clinic, Muzaffarnagar"
//             title="Quick diagnosis & excellent follow-up"
//             quote={
//               "I visited for persistent knee pain. Dr. Rajiv examined me carefully, explained the treatment plan clearly and arranged physiotherapy. After two weeks I felt a big improvement. The clinic staff were punctual and kind — booking online was simple too."
//             }
//           />

//           <ReviewCard
//             avatar="https://i.pravatar.cc/80?img=12"
//             name="Ravi Kumar"
//             ageRange="45–50 yrs"
//             rating={4.5}
//             clinic="Sunrise Multispeciality, Muzaffarnagar"
//             title="Professional and caring team"
//             quote={
//               "I had a minor surgery and the team at Sunrise were very reassuring. The surgeon explained risks and recovery steps plainly. Nursing support and follow-up calls after discharge made recovery smoother than I expected."
//             }
//           />

//           <ReviewCard
//             avatar="https://i.pravatar.cc/80?img=5"
//             name="Neha Singh"
//             ageRange="28–32 yrs"
//             rating={4.5}
//             clinic="Little Steps Children Clinic"
//             title="Kind pediatric care for my daughter"
//             quote={
//               "My 3-year-old had a high fever. Pediatrician Dr. Meera was calm and thorough, gave a clear treatment plan and practical home-care tips. The clinic has a warm waiting area which helped our child relax."
//             }
//           />

//           <ReviewCard
//             avatar="https://i.pravatar.cc/80?img=65"
//             name="Amit Sharma"
//             ageRange="50–55 yrs"
//             rating={4.5}
//             clinic="GreenHeart Cardiac Centre"
//             title="Trustworthy cardiac consultation"
//             quote={
//               "Good experience — ECG and tests were arranged on the same day and the cardiologist explained medication adjustments. I appreciated the detailed counselling and sensible next-steps for lifestyle changes."
//             }
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

export default function PatientTestimonials() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14">
        <header className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
            What patients in Muzaffarnagar say
            <br className="hidden sm:block" /> about our care
          </h2>
          <p className="mt-3 text-gray-500 leading-relaxed">
            Real experiences from local patients — appointment ease, clear
            explanations, and follow-up care that makes a difference.
          </p>
        </header>

        <div className="mt-8 space-y-5">
          <ReviewCard
            avatar="https://i.pravatar.cc/80?img=47"
            name="Ayesha Khan"
            ageRange="30–35 yrs"
            rating={5}
            clinic="Dr. Nazish Farooqui's Clinic"
            title="Caring and knowledgeable pediatrician"
            quote={
              "Dr. Nazish has been wonderful with my son. She diagnosed his condition quickly and gave detailed care instructions. The clinic atmosphere is warm, and the staff are very helpful."
            }
          />

          <ReviewCard
            avatar="https://i.pravatar.cc/80?img=12"
            name="Rohan Mehta"
            ageRange="40–45 yrs"
            rating={4.5}
            clinic="Dr. Uvais Ahmad's Pediatrics"
            title="Professional and gentle care"
            quote={
              "I appreciated Dr. Uvais's thoroughness and friendly approach. He made my daughter comfortable and explained everything clearly, which eased my worries."
            }
          />

          <ReviewCard
            avatar="https://i.pravatar.cc/80?img=5"
            name="Sunita Sharma"
            ageRange="25–30 yrs"
            rating={4.5}
            clinic="General Health Clinic, Muzaffarnagar"
            title="Trustworthy general physician"
            quote={
              "Dr. Mughish Ahmad treated me with great care and attention. His explanations were easy to understand, and the follow-up calls showed genuine concern for my health."
            }
          />

          <ReviewCard
            avatar="https://i.pravatar.cc/80?img=65"
            name="Vikram Singh"
            ageRange="50–55 yrs"
            rating={5}
            clinic="Neurology Center, Muzaffarnagar"
            title="Expert neurologist with great bedside manner"
            quote={
              "Dr. Munish Ahmad diagnosed my condition accurately and patiently answered all my questions. The treatment plan was effective and tailored to my needs."
            }
          />
        </div>
      </div>
    </section>
  );
}
