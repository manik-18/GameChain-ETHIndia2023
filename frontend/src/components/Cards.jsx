import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";

const Cards = ({ cards }) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(3, cards.length),
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(2, cards.length),
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: Math.min(1, cards.length),
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div>
      <section className="text-chighlights body-font">
        <div className="container px-5 py-4 mx-auto">
          {cards.length > 0 ? (
            <Slider {...settings}>
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="border-2 border-caccent lg:w-1/4 md:w-1/2 p-4 w-full"
                >
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt={card.data.title}
                      className="object-cover object-center w-full h-full block"
                      src={card.data.imageSrc}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-chighlights text-xs tracking-widest title-font mb-1">
                      {card.data.timestamp}
                    </h3>
                    <h2 className="text-caccent title-font text-lg font-medium">
                      {card.data.title}
                    </h2>
                    <p className="mt-1">{card.data.price}</p>
                    <Link
                      to="/gameinfo"
                      state={{
                        title: card.data.title,
                        imageSrc: card.data.imageSrc,
                        price: card.data.price,
                        desc: card.data.desc,
                      }}
                      className="inline-flex items-center text-chighlights bg-caccent hover:bg-orange-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-2"
                    >
                      View
                      <MdOutlineRemoveRedEye className="ml-2 mt-[2px]" />
                    </Link>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <p className="text-center text-2xl text-chighlights">Data not found!</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Cards;
