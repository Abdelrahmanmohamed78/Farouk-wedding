"use client";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleMuted } from "../RTK/slice";
import { RootState } from "../RTK/store";

interface LoadingPageProps {
  children: React.ReactNode;
}

function LoadingPage({ children }: LoadingPageProps) {
  const [loading, setLoading] = useState(true);
  const isMuted = useSelector(
    (state: RootState) => state.SliceContainer.isMuted,
  );
  const audioFile = useRef<HTMLAudioElement>(null);
  const dispatch = useDispatch();
  useEffect(() => {
    document.body.classList.add("hide");
  }, []);
  return (
    <div
      className={`${loading ? "visible opacity-[1]" : "invisible opacity-0"} fixed top-0 left-0 w-full flex justify-center items-center flex-col h-full z-3 duration-1000 bg-[#f6f0e4] text-[#835D2F] px-3.75`}
    >
      {children}
      <audio
        ref={audioFile}
        src="/'٠١٩'سورة مريم.mp3"
        className="block"
        autoPlay
        muted={isMuted}
        preload="auto"
      ></audio>
      <button
        onClick={() => {
          if (audioFile.current) {
            audioFile.current.play();
          }
          setLoading(false);
          dispatch(handleMuted(false));
          document.body.classList.remove("hide");
        }}
        className={`text-sm italic py-1 px-4 mt-5 rounded-[50px] border border-[#835D2F] text-[#835D2F] cursor-pointer`}
      >
        أفتح الدعوة
      </button>
    </div>
  );
}

export default LoadingPage;
