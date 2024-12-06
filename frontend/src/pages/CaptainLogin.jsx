import React, { useState } from "react"; // Import useState hook
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState(""); // Use setEmail instead of setemail
  const [password, setPassword] = useState(""); // Use setPassword instead of setpassword
  const [captainData, setcaptainData] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
    setcaptainData({ email: email, password: password });
    console.log(captainData);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-3"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt="Description"
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Corrected setEmail usage
            required
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Corrected setPassword usage
            type="password"
            placeholder="password"
          />
          <button className="bg-[#a8b428c0] text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>
        <p className="text-center">
  join a fleet?
  <Link to="/Captain-signup" className="text-blue-500 ml-2">
    Register as a Captain
  </Link>
</p>

      </div>
      <div>
        <Link
          to="/login"
          className="bg-[#111] text-white flex items-center justify-center font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
