import React, { useState } from "react";

export default function FaqSection() {
  return (
    <section className="grid gap-10 md:grid-cols-2 md:gap-12 px-4 py-10">
      {/* Left column: heading, subtext, image */}
      <div className="flex flex-col items-start gap-6">
        <header>
          <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
            Frequently Asked <span className="block">Question</span>
          </h2>
          <p className="mt-4 max-w-sm text-gray-500 leading-relaxed">
            List of commonly asked questions on just Healthy
          </p>
        </header>

        <div className="relative">
          <div
            className="absolute left-6 right-6 bottom-2 h-6 rounded-full bg-gray-300 blur-md"
            aria-hidden="true"
          />
         <img src={require('../assests/faq-heart.png')} alt="FAQ Heart" />

        </div>
      </div>

      {/* Right column: FAQ cards */}
      <div className="space-y-4 w-full">
        {faqData.map((faq, idx) => (
          <FaqItem key={idx} question={faq.question} answer={faq.answer} defaultOpen={idx === 0} />
        ))}
      </div>
    </section>
  );
}

function FaqItem({ question, answer, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-base font-semibold"
      >
        <span className="text-left flex-1">{question}</span>
        <span
          className="grid size-9 place-content-center rounded-full bg-purple-600 text-white text-lg"
          aria-hidden="true"
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen && (
        <div className="px-6 pb-6 pt-0 text-sm text-gray-600 transition-all duration-300">
          {answer}
        </div>
      )}
    </div>
  );
}

// FAQ data
const faqData = [
  {
    question: "Muzaffarnagar mein appointment kaise schedule karen?",
    answer:
      "Aap apna appointment humari website par online schedule kar sakte hain ya phir humare clinic ko call kar ke bhi appointment book kar sakte hain. Naye patients ke liye pehli visit se pehle registration forms bharne padte hain.",
  },
  {
    question: "Kaunse insurance plans humare doctors accept karte hain?",
    answer:
      "Humare doctors kai popular insurance plans accept karte hain. Aap humare clinic ko contact kar ke ya website par ja kar current list check kar sakte hain. Aapke plan ke baare mein koi bhi clarification chahiye ho toh humari team aapki madad karegi.",
  },
  {
    question: "Meri pehli appointment par kya laana hoga?",
    answer:
      "Pehli appointment par aapko apna ID proof, insurance card, purani medical records (agar hain) aur current medications ki list le kar aani chahiye.",
  },
  {
    question: "Kya aap telemedicine services provide karte hain?",
    answer:
      "Haan, hum select services ke liye telemedicine ya online consultation provide karte hain. Agar aapko telehealth appointment chahiye, toh humse contact kar ke yeh confirm kar sakte hain ki aapka concern telehealth ke liye applicable hai ya nahi.",
  },
  {
    question: "Prescription kaise refill karen?",
    answer:
      "Aap apne pharmacy ke through ya humare patient portal ke madhyam se prescription refill kar sakte hain. Refills ko process hone mein 24-48 ghante lag sakte hain.",
  },
  {
    question: "Agar mujhe urgent care ki zarurat ho toh kya karen?",
    answer:
      "Agar aapko emergency ya urgent care ki zarurat hai, toh aap humare clinic ko turant call kar sakte hain. Humare doctors aapki situation ke hisaab se jaldi help provide karenge.",
  },
  {
    question: "Mujhe kis doctor se milna chahiye?",
    answer:
      "Agar aapko yeh nahi pata ki kaunsa doctor aapke liye sahi hoga, toh aap humare website par apne symptoms ya concerns ke basis par doctor search kar sakte hain. Agar zarurat ho toh humari team aapko right doctor se milne mein madad karegi.",
  },
];

