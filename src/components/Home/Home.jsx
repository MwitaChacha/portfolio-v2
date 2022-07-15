import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import { motion, useScroll } from 'framer-motion'
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
    return (
      <div>
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0}}
          transition={{ duration: 1 }}
          className="text-center mt-40 px-10"
        >
          <h5 className="text-gray-300 text-2xl">"{quote.content}"</h5>
          <p>{quote.author}</p>
        </motion.div>
      </div>
    );
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

        <motion.div
          animate={{
            y: 0,
          }}
          initial={{
            y: -200,
          }}
          className="text-left px-5"
        >
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
        </motion.div>
        <motion.div
          animate={{ y: 0 }}
          initial={{ y: 300 }}
          transition={
            {
              // spring: 0.5
            }
          }
          whileInView={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 items-center "
        >
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
        </motion.div>

        {/* Project display section */}

        <div>
          <div className="p-5">
            <hr className="my-10" />
            <p className="text-xs md:text-md">
              FEATURED
              <br />
              PROJECTS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div>
              <motion.div
                whileInView={{
                  x: 100,
                }}
                initial={{
                  x: 0,
                }}
                transition={{
                  duration: 2,
                  // repeat: 1
                }}
              >
                <h2 className="project-heading">ARTIST STATS</h2>
              </motion.div>
            </div>

            <div className="px-2">
              <motion.div
                whileInView={{
                  x: 0,
                }}
                initial={{
                  x: 0,
                }}
                transition={{
                  duration: 1,
                  // repeat: 1
                }}
              >
                <p className="normal-text">
                  Ever wanted to know the stats and metadata of your favourite
                  musician? .
                </p>
                <p>DJANGO, TAILWIND CSS, RAPIDAPIs, HEROKU</p>
              </motion.div>
            </div>
          </div>
          <hr />
          <div className="grid grid-cols-1 md:grid-cols-2 items-center py-10 flex-col-reverse">
            <div>
              <motion.div
                whileInView={{
                  x: 0,
                }}
                initial={{
                  x: 0,
                }}
                transition={{
                  duration: 2,
                  // repeat: 1
                }}
              >
                <h2 className="project-heading pl-2 text-center">CARNNECT</h2>
              </motion.div>
            </div>
            <div className="px-12 md:order-first">
              <motion.div
                whileInView={{
                  x: 0,
                }}
                initial={{
                  x: -100,
                }}
                transition={{
                  duration: 1,
                  // repeat: 1
                }}
              >
                <p className="normal-text">
                  This project is an attempt to streamline services in the
                  automotive industry in Kenya. Connecting drivers, mechanics,
                  spare part providers and car dealers.
                </p>
                <p>DJANGO, BOOTSTRAP, RAPIDAPIs, HEROKU</p>
              </motion.div>
            </div>
          </div>
          <hr />
          <div className="grid grid-cols-1 md:grid-cols-2 items-center py-14 ">
            <div>
              <motion.div
                whileInView={{
                  x: 70,
                }}
                initial={{
                  x: 0,
                }}
                transition={{
                  duration: 2,
                  // repeat: 1
                }}
              >
                <h2 className="project-heading leading-none">CAL TRACKER </h2>
              </motion.div>
            </div>

            <div className="px-10">
              <motion.div
                whileInView={{
                  x: 0,
                }}
                initial={{
                  x: 10,
                }}
                transition={{
                  duration: 1,
                  // repeat: 1
                }}
              >
                <p className="normal-text">
                  Get real life calories of your favourite foods from Rapidapi
                </p>
                <p>DJANGO, BOOTSTRAP, RAPIDAPIs, HEROKU</p>
              </motion.div>
            </div>
          </div>
          <hr />
          <div className="grid grid-cols-1 md:grid-cols-2 items-center py-10 mx-10">
            <div>
              <motion.div
                whileInView={{
                  x: -50,
                }}
                initial={{
                  x: 0,
                }}
                transition={{
                  duration: 2,
                  // repeat: 1
                }}
              >
                <h2 className="project-heading pl-2 text-center">BORED</h2>
              </motion.div>
            </div>
            <div className="px-12 md:order-first">
              <motion.div
                whileInView={{
                  x: 20,
                }}
                initial={{
                  x: 0,
                }}
                transition={{
                  duration: 1,
                  // repeat: 1
                }}
              >
                <p className="normal-text">
                  This project is give you ideas and activities to do when you are bored.
                </p>
                <p>REACT, TAILWIND CSS, FRAMER MOTION, NETLIFY, BOREDAPI</p>
              </motion.div>
            </div>
          </div>
          <hr />
        </div>

        <div>
          <div className="p-5 mt-10">
            <p className="text-xs md:text-md">
              INTERESTS &<br />
              ICE BREAKERS
            </p>
          </div>
        </div>
      </div>
    );
  }
};
export default Home;
