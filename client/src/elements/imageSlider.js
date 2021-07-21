import React, { useState, useEffect, useRef } from 'react'
import DemoImage from "../assets/pr-18.jpg"
import Slider from "react-slick";

export const ImageSlider = () => {
  var settings1 = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  var settings2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  };
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  return (
    <>
      <div className="col-span-1">
        <Slider
          asNavFor={nav1}
          ref={slider2}
          swipeToSlide={true}
          focusOnSelect={true}
          {...settings2}
        >
          <div>
            <img src={DemoImage} alt="img" className="object-cover w-full" />
          </div>
          <div>
            <img src={DemoImage} alt="img" className="object-cover w-full" />
          </div>
          <div>
            <img src={DemoImage} alt="img" className="object-cover w-full" />
          </div>
          <div>
            <img src={DemoImage} alt="img" className="object-cover w-full" />
          </div>
        </Slider>
      </div>

      <div className="col-span-3">
        <Slider asNavFor={nav2} ref={slider1} {...settings1}>
          <div>
            <img src={DemoImage} alt="img" className="object-cover w-full" />
          </div>
          <div>
            <img src={DemoImage} alt="img" className="object-cover w-full" />
          </div>
          <div>
            <img src={DemoImage} alt="img" className="object-cover w-full" />
          </div>
          <div>
            <img src={DemoImage} alt="img" className="object-cover w-full" />
          </div>
        </Slider>
      </div>
    </>
  );
};