"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "../RTK/store"

interface MainContainerProps {
  children: React.ReactNode;
}

function MainContainer({ children }: MainContainerProps) {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
      anchorPlacement: "top-center",
    });
  });
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
export default MainContainer;