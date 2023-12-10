import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const GameInfo = (props) => {
  const { state } = useLocation();
  return (
    <>
      <Navbar />
      <div>
        <section className="text-gray-600 body-font my-8">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img
              className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
              alt="hero"
              src={state.imageSrc}
            />
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-caccent">
                {state.title}
              </h1>
              <p className="mb-8 text-chighlights">{state.desc}</p>
              <div className="flex justify-center">
                <button className="inline-flex items-center text-chighlights bg-caccent hover:bg-orange-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  Buy
                </button>
                <p className="ml-4 inline-flex text-chighlights  py-2 px-6  text-lg">
                  {state.price}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default GameInfo;
