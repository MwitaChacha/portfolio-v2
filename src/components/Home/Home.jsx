import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="flex justify-between p-10">
        <div>
          <button className="text-left font-bold">
            MWITA
            <br />
            CHACHA
          </button>
        </div>
        <div>
          <button className="border-2 border-gray-400 rounded-full px-5 py-1 mr-5">
            RESUME
          </button>
          <button className="border-2 border-gray-400 rounded-full px-5 py-1">
            CONTACT
          </button>
        </div>
      </div>

      <div>
        <h1 className="text-9xl font-extrabold">PHOTOGRAPHER</h1>
      </div>
    </div>
  );
};

export default Home;
