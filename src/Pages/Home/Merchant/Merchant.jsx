import React from "react";
import merchantImg from "../../../assets/banner/location-merchant.png";

const Merchant = () => {
  const handleMerchant = () => {
    alert("🚀 Demo: Become a Merchant feature coming soon!");
  };

  const handleCourier = () => {
    alert("🚚 Demo: Earn with ZapShift Courier feature coming soon!");
  };

  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto bg-[#03363D] rounded-[30px] px-8 md:px-16 py-12 flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden">

        {/* Left Content */}
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Merchant and Customer Satisfaction is Our First Priority
          </h2>

          <p className="text-gray-300 mt-6 leading-8">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. ZapShift Courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <button
              onClick={handleMerchant}
              className="bg-[#D9F95D] text-[#03363D] font-semibold px-8 py-4 rounded-full hover:bg-lime-300 transition duration-300"
            >
              Become a Merchant
            </button>

            <button
              onClick={handleCourier}
              className="border border-[#D9F95D] text-[#D9F95D] font-semibold px-8 py-4 rounded-full hover:bg-[#D9F95D] hover:text-[#03363D] transition duration-300"
            >
              Earn with ZapShift Courier
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={merchantImg}
            alt="Merchant"
            className="w-full max-w-md object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Merchant;