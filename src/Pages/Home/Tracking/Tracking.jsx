import React from "react";

import Tracking1 from "../../../assets/banner/live-tracking.png";
import Tracking2 from "../../../assets/banner/safe-delivery.png";
import Tracking3 from "../../../assets/banner/safe-delivery.png";
const trackingData = [
  {
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    image: Tracking1,
  },
  {
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    image: Tracking2,
  },
  {
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    image: Tracking3,
  },
];

const Tracking = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 space-y-6">
        {trackingData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            {/* Image */}
            <div className="w-full md:w-52 flex justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-40 md:w-44 object-contain"
              />
            </div>

            {/* Dashed Divider */}
            <div className="hidden md:block h-40 border-l-2 border-dashed border-[#0B4A54]"></div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-bold text-[#0B4A54] mb-4">
                {item.title}
              </h3>

              <p className="text-gray-500 leading-8">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tracking;