"use client";


function Video() {
  return (
    <video
      autoPlay
      loop
      className="absolute top-0 left-0 w-full h-full object-cover -z-1"
      src="/hero-video.mp4"
    ></video>
  );
}

export default Video;
