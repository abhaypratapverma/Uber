import React from "react";

const LocationSearchPanel = ({ setvehiclePanel,setPanelOpen }) => {
  const locations = [
    "Officer city-1, Rajnagar Extension, Ghaziabad, Uttar Pradesh.",
    "Raj Kumar Goel Institute of Technology, Ghaziabad, Uttar Pradesh",
    "KIET Group of Institutions, Muradnagar, Ghaziabad, Uttar Pradesh",
    "Park View Apartments, Kaushambi, Ghaziabad, Uttar Pradesh",
  ];

  return (
    <div>
      {locations.map((location, index) => (
        <div
          key={index}
          onClick={() => {
            console.log("Location clicked:", location);
            setvehiclePanel(true);
            setPanelOpen(false); //
          }}
          className="flex border-2 p-3 border-gray-100 active:border-black rounded-xl items-center justify-start gap-2 my-1"
        >
          <h2 className="bg-[#eee] h-10 w-10 p-2 rounded-full flex items-center justify-center">
            <i className="ri-map-pin-fill text-xl"></i>
          </h2>
          <h4 className="font-medium">{location}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
