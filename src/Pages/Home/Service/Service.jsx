import React from "react";
import { Package } from "lucide-react";

const services = [
  {
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.",
  },
  {
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district.",
  },
  {
    title: "Fulfillment Solution",
    description:
      "Inventory management, online order processing, packaging, and after-sales support.",
  },
  {
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety.",
  },
  {
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services including warehouse and inventory management.",
  },
  {
    title: "Parcel Return",
    description:
      "Reverse logistics service allowing customers to return or exchange products.",
  },
];

const Service = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto bg-[#03363D] rounded-3xl px-8 py-16">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Our Services</h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments—we deliver
            on time, every time.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white hover:bg-lime-300 transition-all duration-300 rounded-3xl p-8 text-center cursor-pointer"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#EEF2FF] flex items-center justify-center">
                <Package className="w-8 h-8 text-[#03363D]" />
              </div>

              <h3 className="text-2xl font-bold text-[#03363D] mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;