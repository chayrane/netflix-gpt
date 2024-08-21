import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[30%] p-4 md:px-12 absolute bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold text-white">{title}</h1>
      <p className="hidden md:inline-block py-1 md:py-6 text-sm md:text-lg md:w-3/4 text-white">
        {overview}
      </p>
      <div className="flex gap-2 py-3 md:py-0">
        <button className="bg-white text-black text-xl p-2 px-10 rounded-lg hover:bg-opacity-70 transition-colors duration-400">
          ▶️ Play
        </button>
        <button className="bg-white bg-opacity-90 md:bg-gray-500 text-black md:text-white text-xl p-2 px-12 md:bg-opacity-50 rounded-lg hover:bg-opacity-70 transition-colors duration-400">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
