import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white/10 border border-white/10 backdrop-blur-md rounded-2xl py-8 xl:py-10 text-center shadow-xl hover:scale-105 transition-transform duration-300">
      <h3 className="text-2xl font-semibold mb-3">
        {icon} {title}
      </h3>
      <p className="text-sm text-gray-300 px-6 md:max-lg:px-4">{description}</p>
    </div>
  );
};

export default FeatureCard;
