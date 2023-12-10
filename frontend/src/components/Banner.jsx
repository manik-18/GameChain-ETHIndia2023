import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Spinner from './Spinner'; 

const Banner = () => {
  const [allGameData, setAllGameData] = useState([]);
  const [loading, setLoading] = useState(true);
  const typedRef = useRef(null);

  useEffect(() => {
    const fetchAllGames = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_BASE_URL;
        const response = await fetch(`${apiUrl}/crud/fetchallgames`);

        if (response.ok) {
          const data = await response.json();
          setAllGameData(data.allGameData);
        } else {
          console.error("Failed to fetch all games. Network response was not ok.");
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllGames();
  }, []);

  useEffect(() => {
    let cleanupTyped;

    const initializeTyped = () => {
      if (typedRef.current) {
        const options = {
          strings: [
            "Experience the latest arrivals in gaming right now!",
            "Explore by clicking 'View Now' to check them out.",
          ],
          typeSpeed: 50,
          showCursor: false,
        };

        const typed = new Typed(typedRef.current, options);

        cleanupTyped = () => {
          if (typed) {
            typed.destroy();
          }
        };
      }
    };

    initializeTyped();

    return cleanupTyped;
  }, [loading]);

  const lastThreeGames = allGameData.slice(-3);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <Carousel
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
            showThumbs={false}
            showArrows={false}
            className="p-12"
          >
            {lastThreeGames.map((item, index) => (
              <img
                key={index}
                className="object-cover h-full"
                src={item.data.imageSrc}
                alt={item.data.title}
              />
            ))}
          </Carousel>
          <div className="mt-4 md:mt-0">
            <h2
              ref={typedRef}
              className="mb-4 text-4xl tracking-tight font-extrabold text-caccent"
            ></h2>
            <p className="mb-6 font-light text-chighlights md:text-lg">
              Check out the latest and most exciting games that have just arrived.
              Discover new adventures, challenges, and thrills that will keep you
              entertained for hours. Whether you're a casual gamer or a hardcore
              enthusiast, there's something for everyone in our latest and
              exciting collection.
            </p>
            <Link
              to="/news"
              className="inline-flex items-center text-chighlights bg-caccent hover:bg-orange-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              View Now
              <FaArrowCircleRight className="ml-3" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
