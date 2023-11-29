import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight, QuoteDown, QuoteUp } from "iconsax-react";
import { reviewsData } from "../Data/TestimonialData";
import Productmanageshortdetails from "@/app/solutions/productmanagement/productmanageshortdetails";

const Testimonial = () => {
  const sliderRef = useRef();
  const [selectedCardIndex, setSelectedCardIndex] = useState(1);

  const PrevArrow = (props) => (
    <button
      {...props}
      className="slick-arrow custom-prev"
      style={{
        backgroundColor: "#FFC729",
        borderRadius: "50%",
        height:"40px",
        width:"40px",
        position: "absolute",
        top: "40%",
        left: "-20px",
        transform: "translateY(-50%)",
      }}
    >
      <ArrowLeft size="20" color="black" variant="bold" />
    </button>
  );

  const NextArrow = (props) => (
    <button
      {...props}
      className="slick-arrow custom-next"
      style={{
        backgroundColor: "#FFC729",
        borderRadius: "50%",
        alignItems:"center",
    
        height:"40px",
        width:"40px",
        position: "absolute",
        top: "40%",
        right: "-20px",
        transform: "translateY(-50%)",
      }}
    >
      <ArrowRight size="20" color="black" variant="bold" />
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    afterChange: (currentSlide) => {
      setSelectedCardIndex(currentSlide + 1);
    },
  };

  const goToSlide = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <section className="pt-[160px] pb-[180px] text-center bg-center bg-cover h-full "  style={{ backgroundImage: `url("https://www.orangescrum.com/img/home/enterprise-solution-bg-layer.webp")` }}>
      <div className="container">
        <div className="subhero_title text-center leading-10 font-normal text-gray-700">
        <h2 className="text-[45px] font-semibold leading-[55px] text-[#24292f] font-sans mb-[15px]">Our customers trust us in a long run</h2>
          <p className="text-lg font-normal leading-[30px]">
            Orangescrum helped broad customers to build their successful
            workflow!
          </p>
        </div>
        <div className="mt_60 ">
        <div className="max-w-[1080px] m-auto">
          <Slider ref={sliderRef} {...settings}>
            {reviewsData.map((review, index) => (
              <div
                key={index}
                className="p-4"
                style={{
                  margin: "0 10px",
                  backgroundColor:
                    index === selectedCardIndex ? "#FFC729" : "white",
                }}
              >
                <article
                  className="w-full rounded-xl bg-white border-dotted border relative p-5 Pseudo_Card shadow-2xl"
                  style={{
                    background: index === selectedCardIndex && "#FFC729",
                  }}
                >
                  <div className="">
                    <span className="">
                      <QuoteUp size="12" color="black" variant="Bold" />
                    </span>
                    <p className=" text-gray-800 font-semibold">
                      {review.text}
                    </p>
                    <span className="">
                      <QuoteDown size="12" color="black" variant="Bold" />
                    </span>
                  </div>

                  <div className="absolute left-0 right-0 bottom-0 mx-auto z-1">
                    <div className="w-0 h-0 border-l-18  border-r-18 border-transparent border-t-32 border-white"></div>
                  </div>

                  <div className="absolute left-0 right-0 bottom-0 mx-auto z-1">
                    <div className="w-0 h-0 border-l-18  border-r-18 border-transparent border-t-32 border-d1cccc"></div>
                  </div>
                </article>

                <div className="cmny_logo_postion flex items-center mt-10">
                  <figure className="profile_image mr-4">
                    <img
                      src={review.image}
                      alt={review.name}
                      width="50"
                      height="50"
                      className="lazy rounded-full"
                    />
                  </figure>
                  <div className="tmonial_owner text-sm leading-5 font-normal text-gray-500 m-0">
                    <div className="mt-4 mb-[10] text-base leading-6 font-bold text-black">{review.name}</div>
                    <div className="address">{review.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <Productmanageshortdetails />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
