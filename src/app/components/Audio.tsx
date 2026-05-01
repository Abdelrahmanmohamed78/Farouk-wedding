"use client";
import { GoMute, GoUnmute } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { handleMuted } from "../RTK/slice";
import { RootState } from "../RTK/store";

function Audio() {
  const isMuted = useSelector((state:RootState) => state.SliceContainer.isMuted);
  const dispatch = useDispatch();

  return (
    <>
      <audio
        src="/'٠١٩'سورة مريم.mp3"
        className="block"
        autoPlay
        muted={isMuted}
      ></audio>
      <div
        className="sound-control fixed bottom-7.5 right-7.5 text-lg z-2 text-[#835D2F] bg-[#e9e2db] w-8 h-8 flex justify-center items-center rounded-[50%] cursor-pointer"
        onClick={() => {
          dispatch(handleMuted(!isMuted));
        }}
      >
        {isMuted ? <GoMute /> : <GoUnmute />}
      </div>
    </>
  );
}

export default Audio;
