import React from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useState,useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ConfirmRidePopup from "../components/ConfirmRidePopup";
const CaptainHome = () => {

  const [ridePopupPanel, setridePopupPanel] = useState(true)
  const ridePopupPanelRef = useRef(null)

  const [ConfirmridePopupPanel, setConfirmridePopupPanel] = useState(false)
  const ConfirmridePopupPanelRef = useRef(null)
  useGSAP(
    function () {
      if (ridePopupPanel) {
        gsap.to(ridePopupPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(ridePopupPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ridePopupPanel]
  );
  
  useGSAP(
    function () {
      if (ConfirmridePopupPanel) {
        gsap.to(ConfirmridePopupPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(ConfirmridePopupPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ConfirmridePopupPanel]
  );

  return (
    <div className="h-screen">
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img
          className="w-16 "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
          alt=""
        />
        <Link
          to="/captain/logout"
          className=" h-10 bg-white w-10 flex items-center justify-center rounded-full"
        >
          <i className="text-lg ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-3/5  ">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Background"
        />
      </div>
      <div className="h-2/5 p-6">
        <CaptainDetails />
      </div>
      <div ref={ridePopupPanelRef} className="fixed w-full z-10 translate-y-full bottom-0  bg-white px-3 py-10 pt-12">
        <RidePopUp setridePopupPanel={setridePopupPanel} setConfirmridePopupPanel={setConfirmridePopupPanel}  />
      </div>
      <div ref={ConfirmridePopupPanelRef} className="h-screen fixed w-full z-10 translate-y-full bottom-0  bg-white px-3 py-10 pt-12">
        <ConfirmRidePopup setConfirmridePopupPanel={setConfirmridePopupPanel} />
      </div>
    </div>
  );
};

export default CaptainHome;
