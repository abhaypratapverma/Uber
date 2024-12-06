import React, { useState } from "react"; // Import useState hook
import { Link } from "react-router-dom";

const UserSignup = () => {
  const [email, setEmail] = useState(""); // Use setEmail instead of setemail
  const [password, setPassword] = useState(""); // Use setPassword instead of setpassword
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [userData, setUserData] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullName: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
    });
    setfirstname("");
    setlastname("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-3"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
          alt="Description"
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-base font-medium mb-2">What's your Name</h3>
          <div className="flex gap-4 mb-5">
            <input
              className="bg-[#eeeeee] rounded px-4 py-2 w-4/6 text-base placeholder:text-sm"
              required
              type="text"
              placeholder="First name"
              value={firstname}
              onChange={(e) => setfirstname(e.target.value)}
            />
            <input
              className="bg-[#eeeeee] rounded px-4 py-2 w-4/6 text-base placeholder:text-sm border"
              required
              type="text"
              placeholder="Last name"
              value={lastname}
              onChange={(e) => setlastname(e.target.value)}
            />
          </div>
          <h3 className="text-base font-medium mb-2">What's your Email</h3>
          <input
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 w-full text-base placeholder:text-sm"
            required
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3 className="text-base font-medium mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            required
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-[#111] text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Signup
          </button>
        </form>

        <p className="text-center mb-4">
          Already have an account?
          <Link to="/login" className="text-blue-500 ml-2">
            Login here
          </Link>
        </p>
      </div>

      <div>
        <p className="text-[12px] leading-tight text-center">
          By proceeding, you consent to receive calls, WhatsApp, or SMS
          messages, including automated ones, from Uber and its affiliates to
          the number provided.
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
