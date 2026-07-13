import React from "react";
import customerTop from "../../../assets/banner/customer-top.png";

const Customers = () => {
  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="max-w-4xl mx-auto px-5 text-center">
        {/* Top Image */}
        <img
          src={customerTop}
          alt="Customer"
          className="w-40 mx-auto mb-8"
        />

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#03363D] mb-6">
          What our customers are saying
        </h2>

         {/* Description */}
        <p className="text-gray-500 text-lg leading-8 max-w-3xl mx-auto">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
    </section>
  );
};

export default Customers;