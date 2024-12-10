import React from "react";

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center absolute w-[93%] top-0"
        onClick={() => {
          props.WaitingForDriver(false);
        }}
      >
        <i className="text-3xl text-gray-400 ri-arrow-down-wide-fill"></i>
      </h5>
      <div className="flex items-center justify-between">
        <img
          className="h-12"
          src="https://www.pngall.com/wp-content/uploads/4/Uber-PNG-Picture.png"
          alt=""
        />
        <div className="text-right">
          <h2 className="text-lg font-medium">Abhay</h2>
          <h4 className="text-xl font-semibold -mt-1 -mb-1" >UP31 ZX 5989</h4>
          <p className='text-sm'>Maruti Suzuki Alto</p>
        </div>
      </div>


      <div className="flex justify-between flex-col items-center gap-2">
        
        <div className="w-full mt-5  ">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab,Ahemdabad
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab,Ahemdabad
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 ">
            <i className="ri-money-rupee-circle-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹193.20</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab,Ahemdabad
              </p>
            </div>
          </div>
        </div>
        {/* <button className="w-full mt-5 bg-green-500 font-semibold rounded-lg p-2 text-white">
        Confirm{" "}
      </button> */}
      </div>
    </div>
  );
};

export default WaitingForDriver;
