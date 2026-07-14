import React from "react";
import { FiChevronDown, FiChevronUp, FiArrowUpRight } from "react-icons/fi";

const faqs = [
  {
    question: "How does this posture corrector work?",
    answer:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
  },
  {
    question: "Is it suitable for all ages and body types?",
    answer:
      "Yes. It features adjustable straps and an ergonomic design, making it suitable for most teenagers and adults with different body types.",
  },
  {
    question: "Does it really help with back pain and posture improvement?",
    answer:
      "Regular use combined with proper exercise and stretching can help improve posture and reduce mild back discomfort over time.",
  },
  {
    question: "Does it have smart features like vibration alerts?",
    answer:
      "Some models include smart vibration reminders that gently alert you whenever your posture starts to slouch.",
  },
  {
    question: "How will I be notified when the product is back in stock?",
    answer:
      "You can subscribe with your email and we'll notify you immediately when the product becomes available again.",
  },
];

const Questions = () => {
  return (
    <section className="bg-[#F6F8F8] py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0C3D46]">
            Frequently Asked Question (FAQ)
          </h2>

          <p className="mt-5 text-gray-500 max-w-3xl mx-auto leading-7">
            Enhance posture, mobility, and well-being effortlessly with
            Posture Pro. Achieve proper alignment, reduce pain, and strengthen
            your body with ease!
          </p>
        </div>

        {/* FAQ */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`collapse collapse-arrow rounded-2xl border ${
                index === 0
                  ? "collapse-open border-[#39B7C6] bg-[#EDF9FA]"
                  : "border-gray-200 bg-white"
              }`}
            >
              <input
                type="radio"
                name="faq"
                defaultChecked={index === 0}
              />

              <div className="collapse-title text-[18px] font-semibold text-[#0C3D46]">
                {faq.question}
              </div>

              <div className="collapse-content text-gray-600 leading-8">
                {faq.answer}
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-12">
          <button className="flex items-center gap-3 bg-lime-300 hover:bg-lime-400 transition rounded-full pl-8 pr-2 py-2 font-semibold text-[#0C3D46]">
            See More FAQ's

            <span className="w-11 h-11 rounded-full bg-[#1E1E1E] text-lime-300 flex items-center justify-center text-xl">
              <FiArrowUpRight />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Questions;