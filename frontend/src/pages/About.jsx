import React from "react";
import vite from "../assets/vite.svg";
import reactImg from "../assets/react.svg";
import firebase from "../assets/firebase.svg"
import tailwindcss from "../assets/tailwind.svg"
import lighthouse from "../assets/lighthouse.png"
import videogame from "../assets/videogame.svg"
import pushprotocol from "../assets/push.png"
import node from "../assets/node.svg"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <>
    <Navbar/>
    
    <div>
      <div className="mt-24">
        <section className="bg-cgrey">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl lg:text-4xl text-caccent">
              About GameChain
            </h1>
            <p className="text-center my-[30px] text-lg font-normal lg:text-xl sm:px-16 xl:px-38 text-chighlights">
              Welcome to GameChain, a cool gaming platform that's not like your
              usual game stores. Here, you get something special - real
              ownership of your in-game stuff, thanks to fancy blockchain tech.
              GameChain has a bunch of exclusive games that use blockchain magic
              to make your gaming even more awesome. You pay with
              cryptocurrency, making things smoother and cheaper. Security is a
              big deal here - we've got tough measures to stop pirates and keep
              both game makers and players safe. Come be part of GameChain,
              where gaming and blockchain team up to change how we play, own
              things, and hang out together. It's a gaming revolution! 🎮🔗
            </p>

            <div className="flex justify-center items-center mt-24 ">
              <img src={videogame} alt="videogame" className="w-96 h-96" />
            </div>

            <h1 className="mt-[100px] mb-[30px] text-2xl font-bold tracking-tight leading-none md:text-3xl lg:text-4xl text-caccent">
              Developed by
            </h1>

            <div className="container mx-auto p-4">
              <div className="flex flex-wrap justify-center">
                <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
                  <div className="bg-cgrey rounded-lg shadow-lg border-chighlights border-2 p-6">
                    <img
                      src="https://avatars.githubusercontent.com/u/102967918?v=4"
                      alt="Manik Gupta"
                      className="w-32 h-32 mx-auto rounded-full mb-4 border-chighlights border-2"
                    />
                    <h2 className="text-caccent font-semibold">Manik Gupta</h2>
                    <p className="text-chighlights">Frontend Developer</p>
                    <div className="mt-4 flex items-center justify-center gap-3">
                      <a
                        href="https://www.linkedin.com/in/manik1810/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin size={32} color="white" />
                      </a>
                      <a
                        href="https://github.com/manik-18"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub size={32} color="white" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
                  <div className="bg-cgrey rounded-lg shadow-lg border-chighlights border-2 p-6">
                    <img
                      src="https://media.licdn.com/dms/image/D5603AQHDCoW4mzKsyQ/profile-displayphoto-shrink_200_200/0/1680330502499?e=1707350400&v=beta&t=cPb4JSALjNJaGvLs88WgdTCa1zlRrdEVVQfrorZqre8"
                      alt="Nipun Khajuria"
                      className="w-32 h-32 mx-auto rounded-full mb-4 border-chighlights border-2"
                    />
                    <h2 className="text-caccent font-semibold">Nipun Khajuria</h2>
                    <p className="text-chighlights">Backend Developer</p>
                    <div className="mt-4 flex items-center justify-center gap-3">
                      <a
                        href="https://www.linkedin.com/in/nipun-khajuria-4a88131b0/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin size={32} color="white" />
                      </a>
                      <a
                        href="https://github.com/Nipun404"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub size={32} color="white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="mt-[100px] mb-[30px] text-2xl font-bold tracking-tight leading-none  md:text-3xl lg:text-4xl text-caccent">
              Integrated Technologies
            </h1>
            <div className="flex flex-wrap justify-center">
              <div className="flex flex-col items-center m-3">
                <img src={vite} alt="vite" className="w-32 h-32" />
                <p className="mt-2  text-chighlights font-medium">Vite</p>
              </div>
              <div className="flex flex-col items-center m-3">
                <img src={reactImg} alt="reactImg" className="w-32 h-32" />
                <p className="mt-2  text-chighlights font-medium">React</p>
              </div>
              <div className="flex flex-col items-center m-3">
                <img src={tailwindcss} alt="tailwindcss" className="w-32 h-32" />
                <p className="mt-2  text-chighlights font-medium">Tailwind</p>
              </div>
              <div className="flex flex-col items-center m-3">
                <img src={firebase} alt="firebase" className="w-32 h-32" />
                <p className="mt-2  text-chighlights font-medium">Firebase</p>
              </div>
              <div className="flex flex-col items-center m-3">
                <img src={lighthouse} alt="firebase" className="w-32 h-32" />
                <p className="mt-2  text-chighlights font-medium">Light House</p>
              </div>
              <div className="flex flex-col items-center m-3">
                <img src={pushprotocol} alt="push" className="w-32 h-32" />
                <p className="mt-2  text-chighlights font-medium">Push Protocol</p>
              </div>
              <div className="flex flex-col items-center m-3">
                <img src={node} alt="node" className="w-32 h-32" />
                <p className="mt-2  text-chighlights font-medium">Node</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;
