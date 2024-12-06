import React from "react";
import {Link} from "react-router-dom";
const Home = () => {
  return (
    <div className=" bg-[url('https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/c5310f182519763.652f3606b64b0.jpg')] bg-cover h-screen pt-8 flex justify-between flex-col w-full bg-red-400">
      <img className="w-16 ml-8"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
        alt="Description"
      />

      <div className="bg-white pb-7 py-4 px-4">
        <h2 className=" font-bold  text-3xl">Get Started with Uber</h2>
        <Link to='/login' className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-4">Continue</Link>
      </div>
    </div>
  );
};

export default Home;
