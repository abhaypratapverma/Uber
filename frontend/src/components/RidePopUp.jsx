import React from "react";

const RidePopUp = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setridePopupPanel(false);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">New Ride Available!</h3>
      <div className="flex items-center justify-between p-4 border-2 border-yellow-400 rounded-lg mt-3 ">
        <div className="flex items-center gap-3">
          <img
            className="h-12  w-12 rounded-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxtI1nfVuk6C2AKDuh3mZeRqTayvRiJ96mEQ&s"
            alt=""
          />
          <h2 className="text-lg font-medium">Divya Srivastava</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>
      <div className="flex gap-2 justify-between flex-col items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">dfhd</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">gfh</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹193.03</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
        <div className=" mt-5  w-full items-center justify-between">
          <button
            onClick={() => {
              props.setridePopupPanel(false);
            }}
            className="w-full mt-3  justify-center bg-red-600 text-white font-semibold p-3 rounded-lg"
          >
            Ignore
          </button>
          <button
            onClick={() => {
              props.setridePopupPanel(false);
              props.setConfirmridePopupPanel(true);
            }}
            className="w-full mt-3 justify-center bg-green-600 text-white font-semibold p-3 rounded-lg"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default RidePopUp;
