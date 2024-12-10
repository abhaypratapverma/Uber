import React from "react";

const LookingForDriver = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center absolute w-[93%] top-0"
        onClick={() => {
          props.setvehicleFound(false);
        }}
      >
        <i className="text-3xl text-gray-400 ri-arrow-down-wide-line right-0 "></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5 ">Looking for a Driver</h3>

      <div className="flex justify-between flex-col items-center gap-2">
      <img
  className="h-20 rounded-full shadow-md border-2 border-gray-300 p-1 bg-white"
  src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWw5cWc4dnMybmRkZzZibGhqbmlnbDhyano1bXh5dW9ldjkwbzU4dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RgzryV9nRCMHPVVXPV/giphy.webp"
  alt="GIF"
/>

        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-user-fill text-lg"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Officer-city-1, Rajnagar Extension, Ghaziabad
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                RKGIT, Meerut Road, Ghaziabad
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-money-rupee-circle-line text-lg"></i>
            <div>
              <h3 className="text-lg font-medium">₹193.30</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookingForDriver;
