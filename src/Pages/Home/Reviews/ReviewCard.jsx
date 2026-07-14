import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCard = ({review}) => {
    const {userName , review : testimonial,user_photoURL } =review;
    return (
        <div className="card bg-base-100 shadow-xl rounded-[32px] p-8 max-w-2xl mx-auto hover:shadow-2xl transition-all duration-300">
      <div className="card-body p-0">
        {/* Quote Icon */}
        <FaQuoteLeft className="text-6xl text-cyan-200 mb-6" />

        {/* Review */}
        <p className="text-3xl leading-relaxed text-gray-600">
         {testimonial}
        </p>

        {/* Divider */}
        <div className="border-t-2 border-dashed border-teal-300 my-8"></div>

        {/* User */}
        <div className="flex items-center gap-5">
          <div className="avatar">
            <div className="w-16 rounded-full bg-teal-900">
                    <img src={user_photoURL} alt="" />
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-teal-900">
              {userName}
            </h3>
            <p className="text-gray-500 text-xl">
              Senior Product Designer
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ReviewCard;