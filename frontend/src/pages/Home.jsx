import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";
import Banner from "../components/Banner";
import Spinner from "../components/Spinner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const [allGameData, setAllGameData] = useState([]);
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
          setAllGameData(data.allGameData);
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

  return (
    <>
    <Navbar/>
      {loading ? (
        <Spinner />
      ) : (
        <div className="mt-4">
          <Banner />
          <div>
            <h1 className="text-center text-caccent font-extrabold text-4xl">
              Categories
            </h1>
          </div>
          <div className="px-3 py-16">
            <h1 className="text-caccent font-bold text-2xl ml-12 ">Free</h1>
            <Cards
              cards={allGameData.filter(
                (card) => card.data.category === "free"
              )}
            />
          </div>
          <div className="px-3 py-16">
            <h1 className="text-caccent font-bold text-2xl ml-12 ">General</h1>
            <Cards
              cards={allGameData.filter(
                (card) => card.data.category === "general"
              )}
            />
          </div>
          <div className="px-3 py-16">
            <h1 className="text-caccent font-bold text-2xl ml-12 ">
              Multiplayer
            </h1>
            <Cards
              cards={allGameData.filter(
                (card) => card.data.category === "multiplayer"
              )}
            />
          </div>
          <div className="px-3 py-16">
            <h1 className="text-caccent font-bold text-2xl ml-12 ">Action</h1>
            <Cards
              cards={allGameData.filter(
                (card) => card.data.category === "action"
              )}
            />
          </div>
          <div className="px-3 py-16">
            <h1 className="text-caccent font-bold text-2xl ml-12 ">
              Adventure
            </h1>
            <Cards
              cards={allGameData.filter(
                (card) => card.data.category === "adventure"
              )}
            />
          </div>
        </div>
      )}
      <Footer/>
    </>
  );
};

export default Home;
