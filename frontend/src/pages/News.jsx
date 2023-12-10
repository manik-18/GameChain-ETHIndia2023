import React, { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const News = () => {
  const [allGames, setAllGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllGames = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_BASE_URL;
        const response = await fetch(
          `${apiUrl}/crud/fetchallgames`
        );

        if (response.ok) {
          const data = await response.json();
          setAllGames(data.allGameData);
        } else {
          console.error(
            "Failed to fetch all games. Network response was not ok."
          );
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllGames();
  }, []);

  const sortedGames = allGames.sort(
    (a, b) => new Date(b.data.timestamp) - new Date(a.data.timestamp)
  );

  return (
    <>
    <Navbar/>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex justify-center items-center my-8">
          <section className="text-chighlights body-font overflow-hidden">
            <br />
            <h1 className="text-center text-4xl font-extrabold text-caccent -mb-12 mt-8">
              Latest Releases
            </h1>
            <div className="container px-5 py-24 mx-auto">
              {sortedGames.map((gameItem) => (
                gameItem.data.category &&
                gameItem.data.timestamp &&
                gameItem.data.imageSrc &&
                gameItem.data.title &&
                gameItem.data.desc ? (
                  <div
                    key={gameItem.data.title}
                    className="-my-8 divide-y-2 divide-gray-100"
                  >
                    <div className="py-8 flex flex-wrap md:flex-nowrap items-center">
                      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span className="font-semibold title-font text-chighlights">
                          {gameItem.data.category}
                        </span>
                        <span className="mt-1 text-caccent text-sm">
                          {new Date(gameItem.data.timestamp).toLocaleString()}
                        </span>
                        <span className="mt-1">
                          {gameItem.data.imageSrc && (
                            <img
                              src={gameItem.data.imageSrc}
                              alt={gameItem.data.title}
                              className="w-full h-auto mb-4 md:mb-0 md:w-64 md:h-auto md:mr-4"
                            />
                          )}
                        </span>
                      </div>
                      <div className="md:flex-grow">
                        <h2 className="px-4 text-2xl font-medium text-caccent title-font mb-2">
                          {gameItem.data.title}
                        </h2>
                        <p className="px-4 leading-relaxed text-justify">
                          {gameItem.data.desc.length > 400
                            ? `${gameItem.data.desc.slice(0, 400)}...`
                            : gameItem.data.desc}
                        </p>
                      </div>
                    </div>
                    <hr className="my-6 border-caccent sm:mx-auto lg:my-8" />
                  </div>
                ) : null
              ))}
            </div>
          </section>
        </div>
      )}
      <Footer/>
    </>
  );
};

export default News;
