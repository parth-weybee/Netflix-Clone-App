import React from "react";

const MainMovieBgVideo = ({video}) => {
  return (
    <div className="absolute top-0 w-full h-[90vh] -z-10">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${video?.key}?autoplay=1&mute=1`}
        referrerPolicy="strict-origin-when-cross-origin"
        allow="autoplay"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MainMovieBgVideo;
