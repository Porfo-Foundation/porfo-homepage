// src/Slideshow.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import './style.css';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import SwiperCore, { Autoplay, EffectFade, EffectCoverflow, Pagination, Navigation } from 'swiper/core';

SwiperCore.use([EffectCoverflow, EffectFade, Pagination, Navigation, Autoplay]);

const slides = [
  'bitcoin',
  'ethereum',
  'bt_cash',
  'eos',
  'litecoin',
  'monero',
  'stellar',
  'tezos',
  'tron',
  'zcash',
  'cosmos',
  'ontology',
  'cardano',
  'binance',
  'nem',
  'dash',
  'ripple',
  'neo',
  'digibyte',
  'tether',
];

const Slideshow = () => {
  return (
    <div className="container">
      <Swiper
        effect="coverflow"
        grabCursor
        
        loop
        slidesPerView={6}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1.5,
        }}
        speed={1600}
        autoplay={{ delay: 600, disableOnInteraction: false }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={`/images/coins/${slide}.png`} alt={`slide_image_${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="heading">
        <h1 className="md:text-4xl lg:text-5xl font-semibold text-white">
          Highly interoperable with <span className="text-[#7a50bc]">bolt network</span>
        </h1>
        <div className="w-[50%]">
          <div className="text-2xl font-thin opacity-80">
            Connect effortlessly across multiple chains – experience unparalleled interoperability and fluidity in your
            crypto transactions.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
