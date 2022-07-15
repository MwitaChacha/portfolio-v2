import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import { motion, useScroll } from 'framer-motion'
import Pic from "../../assets/images/trishsunset.png"
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
              <p className="text-left font-bold md:text-base text-sm">
                MWITA
                <br />
                CHACHA
              </p>
            </a>
          </div>
          <div>
            <a href="#contact">
              <button className="border-2 border-gray-400 rounded-full px-5 py-1 md:text-base text-xs">
                CONTACT
              </button>
            </a>
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
              <a
                href="https://drive.google.com/file/d/1Z_lOenrmPewKV5g_PCsSQFomHoe7XPeM/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <span className="certain animate-pulse duration-200">
                  VIEW MY RESUME
                </span>
              </a>
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
                <a
                  href="http://artiststats-by-chacha.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h2 className="project-heading certain">ARTIST STATS</h2>
                </a>
              </motion.div>
            </div>

            <div className="px-12">
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
              {/* <div className="block md:hidden my-5">
                <button className="border-2 border-gray-400 rounded-full px-5 py-1 mx-5 flex">
                  VISIT SITE{" "}
                  <span className="ml-3">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
              </div> */}
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
                <a
                  href="https://carnnect.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h2 className="project-heading pl-2 text-center certain">
                    CARNNECT
                  </h2>
                </a>
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
                <a
                  href="https://calorie-tracker-bychacha.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h2 className="project-heading leading-none certain mb-3">
                    CAL TRACKER{" "}
                  </h2>
                </a>
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
          <div className="grid grid-cols-1 md:grid-cols-2 items-center py-10">
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
                <a
                  href="https://sparkly-haupia-61a4d4.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h2 className="project-heading  text-center certain">
                    BORED
                  </h2>
                </a>
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
                  This project is give you ideas and activities to do when you
                  are bored.
                </p>
                <p>REACT, TAILWIND CSS, FRAMER MOTION, NETLIFY, BOREDAPI</p>
              </motion.div>
            </div>
          </div>
          <hr />
        </div>

        <div>
          <div className="p-5 mt-10 hidden md:block">
            <p className="text-xs md:text-md">
              INTERESTS &<br />
              ICE BREAKERS
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center text-left my-20 mb-20">
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opactiy: 0 }}
              transition={{ duration: 2 }}
            >
              <div className="hidden md:block">
                <img className="w-3/4 mx-auto" src={Pic} alt="" />
              </div>
            </motion.div>

            <div>
              <motion.div
                whileInView={{
                  y: 0,
                }}
                initial={{
                  y: -200,
                }}
                transition={{
                  duration: 1,
                }}
              >
                <div className="p-10">
                  <p className="mb-10">INTERESTS</p>
                  <p className="normal-text">
                    React JS, Framer Motion, Tailwind CSS, Django, UI Design,
                    Wire Framing, Graphic Design
                  </p>
                  <a
                    href="https://github.com/MwitaChacha"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p className="certain">PEEP MY GITHUB</p>
                  </a>
                </div>
              </motion.div>
              <motion.div
                whileInView={{
                  x: 0,
                }}
                initial={{
                  x: -200,
                }}
                transition={{
                  duration: 1,
                }}
              >
                <hr className="w-1/2" />
              </motion.div>
              <motion.div
                whileInView={{
                  y: 0,
                }}
                initial={{
                  y: -100,
                }}
                transition={{
                  duration: 1,
                }}
              >
                <div className="p-10">
                  <p className="mb-10">ICE BREAKERS</p>
                  <p className="normal-text">
                    I love puns, photography and videography. Thinking of
                    starting a podcast?
                  </p>
                  <a
                    href="https://theyearofchacha.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p className="certain">VIEW MY GALLERY</p>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div id="contact" className="text-center md:mt-72">
          <p>
            Do you have a project in mind? <br />
            Just want to say hi? Don’t feel shy!
          </p>
        </div>
        <div className="my-14">
          <hr />
          <a
            href="mailto:jonahhchacha@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <h2 className="heading text-center certain">LET'S TALK</h2>
          </a>
          <hr />
          <p className="text-center normal-text mt-10">
            jonahhchacha@gmail.com
          </p>
        </div>
        <div className="flex justify-around py-10 mb-5 items-center">
          <div className="hidden md:block">
            <p>Jonathan Mwita Chacha</p>
          </div>
          <div>
            <a
              href="https://twitter.com/Chacha1kanobi"
              target="_blank"
              rel="noreferrer"
            >
              <button className="border-2 border-gray-400 rounded-full px-5 py-1 md:mx-5 md:text-base text-xs">
                TWITTER
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/jonathan-chacha-19b154206/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="border-2 border-gray-400 rounded-full px-5 py-1 md:mx-5 md:text-base text-xs mx-2">
                LINKEDIN
              </button>
            </a>
            <a
              href="https://github.com/MwitaChacha"
              target="_blank"
              rel="noreferrer"
            >
              <button className="border-2 border-gray-400 rounded-full px-5 py-1 md:mx-5 md:text-base text-xs">
                GITHUB
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
};
export default Home;
