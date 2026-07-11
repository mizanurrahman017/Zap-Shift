import React from "react";
import { Truck, MapPin } from "lucide-react";

const worksData = [
    {
        title: "Booking Pick & Drop",
        description:
            "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
        title: "Cash On Delivery",
        description:
            "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
        title: "Delivery Hub",
        description:
            "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
        title: "Booking SME & Corporate",
        description:
            "From personal packages to business shipments — we deliver on time, every time.",
    },
];

const Works = () => {
    return (
        <section className="bg-[#f4f5f7] py-20">
            <div className="max-w-7xl mx-auto px-5">
                <div className="max-w-7xl mx-auto px-5 mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#03363D]">
                        How it Works
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {worksData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="relative w-fit mb-6">
                                <Truck className="w-10 h-10 text-[#0D4D57]" strokeWidth={1.6} />
                                <MapPin
                                    className="w-5 h-5 text-[#0D4D57] absolute -top-2 left-2 bg-white"
                                    strokeWidth={1.8}
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-[#03363D] mb-3">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-500 leading-8 text-base">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Works;