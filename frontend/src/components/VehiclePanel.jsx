import React from "react";

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center absolute w-[93%] top-0"
        onClick={() => {
          props.setvehiclePanel(false);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
      <div
        onClick={() => {
          props.setconfirmRidePanel(true);
          props.setvehiclePanel(false);
        }}
        className="flex border-2 active:border-black  mb-2 rounded-xl w-full p-3  items-center justify-between"
      >
        <img
          className="h-10"
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          alt=""
        />

        <div className=" w-1/2 ml-2">
          <h4 className="font-medium text-lg">
            UberGo
            <span>
              <i className="ri-user-fill"></i>4
            </span>
          </h4>
          <h5 className="font-normal text-sm">2 mins away</h5>
          <p className="font-normal text-xs">Affordable, compact rides</p>
        </div>
        <h2 className="text-lg font-semibold">₹193.3</h2>
      </div>

      <div
        onClick={() => {
          props.setconfirmRidePanel(true);
          props.setvehiclePanel(false);
        }}
        className="flex p-3 items-center w-full border-2 bg-gray-200 mb-2 active:border-black  rounded-sm justify-between"
      >
        <img
          className="h-10 "
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className=" w-1/2 ml-2">
          <h4 className="font-medium text-lg">
            Moto{" "}
            <span>
              <i className="ri-user-fill"></i>1
            </span>
          </h4>
          <h5 className="font-normal text-sm">2 mins away</h5>
          <p className="font-normal text-xs">Affordable, motercycle rides</p>
        </div>
        <h2 className="text-lg font-semibold">₹80.0</h2>
      </div>

      <div
        onClick={() => {
          props.setconfirmRidePanel(true);
          props.setvehiclePanel(false);
        }}
        className="flex p-3 items-center w-full border-2 bg-gray-200 mb-2 active:border-black  rounded-sm justify-between"
      >
        <img
          className="h-10 "
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_768,w_1152/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        />
        <div className=" w-1/2 ml-2">
          <h4 className="font-medium text-lg">
            UberAuto{" "}
            <span>
              <i className="ri-user-fill"></i>3
            </span>
          </h4>
          <h5 className="font-normal text-sm">2 mins away</h5>
          <p className="font-normal text-xs">Affordable, compact rides</p>
        </div>
        <h2 className="text-lg font-semibold">₹100.3</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
