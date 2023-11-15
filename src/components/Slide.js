import React, { useRef } from "react";
import Slider from "react-slick";
import { ArrowCircleLeft, ArrowCircleRight } from "iconsax-react";
import { Sliderdata } from "./Data/slide";

function Slide() {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="pt-70px bg-gray-100">
      <div className="px-4">
        <div className="mb-20 flex justify-center">
          <h2 className="text-5xl font-bold">What our customers say</h2>
        </div>
        <div className="w-[40%] m-auto mb-8">
          <div className="container bg-white rounded-[20px] p-10 shadow-md">
            <Slider ref={sliderRef} {...settings}>
              {Sliderdata.map((item, index) => (
                <div key={index}>
                  <div className="text-base leading-7 mb-0 text-[18px] rounded-lg bg-white">
                    {/* <span className="text-xl">"</span> */}
                    <p className="text-base leading-7 text-center before:content-['!'] after:content-['!'] p-1 ">{item.text}</p>
                    {/* <span className="text-xl">"</span> */}
                  </div>
                  <div className="m-auto w-[110%] mt-4">
                    <h3 className="m-auto w-[55%] text-lg text-center text-red-400 font-bold mb-2">
                      {item.name}
                    </h3>
                    <p className="text-center">{item.position}</p>
                  </div>
                </div>
              ))}

              {/* <div>
              <div className="text-base leading-7 mb-0 text-[18px] rounded-lg bg-white">
                  <span className="text-xl">"</span>
                  <p className="text-base leading-7">
                    My team (Hailstorm-Development) and I LOVE Orangescrum! We
                    are a flextime remote business solution specialist agency,
                    and this tool has enabled us to actually create this company.
                    Without you all, we wouldn't even exist!
                  </p>
                  <span className="text-xl">"</span>
                </div>
                <div className="m-auto w-[55%]">
                  <h3 className="m-auto w-[55%] text-lg text-red-400 font-bold mb-2">
                    Hayley Turner
                  </h3>
                  <p>(Founder & CEO, United States, Michigan)</p>
                </div>
              </div>
              <div>
              <div className="text-base leading-7 mb-0 text-[18px] rounded-lg bg-white">
                  <span className="text-xl">"</span>
                  <p className="text-base leading-7">
                    My team (Hailstorm-Development) and I LOVE Orangescrum! We
                    are a flextime remote business solution specialist agency,
                    and this tool has enabled us to actually create this company.
                    Without you all, we wouldn't even exist!
                  </p>
                  <span className="text-xl">"</span>
                </div>
                <div className="m-auto w-[55%]">
                  <h3 className="m-auto w-[55%] text-lg text-red-400 font-bold mb-2">
                    Hayley Turner
                  </h3>
                  <p>(Founder & CEO, United States, Michigan)</p>
                </div>
              </div>
              <div>
              <div className="text-base leading-7 mb-0 text-[18px] rounded-lg bg-white">
                  <span className="text-xl">"</span>
                  <p className="text-base leading-7">
                    My team (Hailstorm-Development) and I LOVE Orangescrum! We
                    are a flextime remote business solution specialist agency,
                    and this tool has enabled us to actually create this company.
                    Without you all, we wouldn't even exist!
                  </p>
                  <span className="text-xl">"</span>
                </div>
                <div className="m-auto w-[55%]">
                  <h3 className="m-auto w-[55%] text-lg text-red-400 font-bold mb-2">
                    Hayley Turner
                  </h3>
                  <p>(Founder & CEO, United States, Michigan)</p>
                </div>
              </div> */}
            </Slider>
          </div>
        </div>
        <div className="flex justify-center mb-5 pb-4">
          <button onClick={previous}>
            <ArrowCircleLeft
              size="48"
              color="#8CB5F2"
              className="hover:scale-125 hover:text-blue-600"
              variant="Bold"
            />
          </button>
          &nbsp;&nbsp;
          <button onClick={next}>
            <ArrowCircleRight
              size="48"
              color="#8CB5F2"
              className="hover:scale-125 hover:text-blue-600"
              variant="Bold"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Slide;
