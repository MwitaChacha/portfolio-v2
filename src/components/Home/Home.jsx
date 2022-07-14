import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 8000);
  });

  useEffect(() => {
    axios
      .get("https://api.quotable.io/random")
      .then((response) => {
        console.log(response.data);
        setQuote(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (loading) {
    return <div>
        <div className="text-center mt-40 px-10">
           <h5 className="text-gray-300 text-2xl">"{quote.content}"</h5> 
           <p>{quote.author}</p>
        </div>
    </div>;
  } else {
    return (
      <div>
        <div className="flex justify-between p-10">
          <div>
            <a href="/">
              <button className="text-left font-bold">
                MWITA
                <br />
                CHACHA
              </button>
            </a>
          </div>
          <div>
            <button className="border-2 border-gray-400 rounded-full px-5 py-1">
              CONTACT
            </button>
          </div>
        </div>

        <div className="text-left px-5">
          <h1 className="text-9xl heading">
            <span className="individual">P</span>
            <span className="individual">H</span>
            <span className="individual">O</span>
            <span className="individual">T</span>
            <span className="individual">O</span>
            <span className="individual">G</span>
            <span className="individual">R</span>
            <span className="individual">A</span>
            <span className="individual">P</span>
            <span className="individual">H</span>
            <span className="individual">E</span>
            <span className="individual">R</span> -
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center ">
          <div className="pl-5">
            <h1 className="heading">
              {" "}
              <span className="individual">D</span>
              <span className="individual">E</span>
              <span className="individual">V</span>
              <span className="individual">E</span>
              <span className="individual">L</span>
              <span className="individual">O</span>
              <span className="individual">P</span>
              <span className="individual">E</span>
              <span className="individual">R</span>
            </h1>
          </div>
          <div className="w-3/4 ml-auto p-5">
            <p>
              ABOUT
              <span className="normal-text ml-5">
                I am a developer and photographer based in Nairobi, Kenya. I
                love design and coming up with creative and unique solutions and
                ideas. My current stacks are React JS, Django, Tailwind CSS,
                JavaScript, TypeScript and Python.
              </span>{" "}
              <br />
              <span>VIEW MY RESUME</span>
            </p>
            <div className="md:block hidden">
              <div className="mt-10 flex justify-between">
                <p>Scroll down</p>
                <svg
                  className="w-6 h-6 animate-bounce"
                  fill="#777777"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default Home;
