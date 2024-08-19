import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[30%] px-12 absolute bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold text-white">{title}</h1>
      <p className="py-6 text-lg w-3/4 text-white">{overview}</p>
      <div className="flex gap-2">
        <button className="bg-white text-black text-xl p-2 px-10 rounded-lg hover:bg-opacity-70 transition-colors duration-400">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-white text-xl p-2 px-12 bg-opacity-50 rounded-lg hover:bg-opacity-70 transition-colors duration-400">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
