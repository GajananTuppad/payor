"use client";
// external
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FreeMode,
  Thumbs,
  Controller,
  EffectFade,
  Pagination,
  Navigation,
} from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
// internal
import { SliderHighlight } from "@/svg";
import slider_bg_1 from "/public/assets/img/slider/CP005_DATAISM_CC_S_25.jpg";

import { HeaderSocial } from "@/components/social";


// slider items
const slider_items = [
  {
    bg: slider_bg_1,
    title: (
      <>
        <div className="hero-video">
        Health plans for life&apos;s moments
        </div>
      </>
    ),
    subtitle:
      "Our plans are made to deliver what matters, from quality coverage to caring support. Find a plan option that works for you.",
    isVideoBannerRequired: false,
    videoSrc: "assets/video/Hero_video.mp4",
  },

];

const ArchitectureBanner = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <section className="slider__area p-relative">
        <div className="slider__social d-none d-lg-block">
          <ul>
            <HeaderSocial />
          </ul>
          <span>Follow Us</span>
        </div>
        {/* main slider */}
        <Swiper
          className="slider__active swiper-container"
          slidesPerView={1}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          loop={true}
          effect="fade"
          modules={[
            Pagination,
            EffectFade,
            Controller,
            FreeMode,
            EffectFade,
            Thumbs,
            Navigation,
          ]}
          // If we need pagination
          pagination={{
            el: ".main-slider-dot, .main-slider-dot-8",
            clickable: true,
            renderBullet: function (index, className) {
              return `<span className=${className}>
                <button>${index < 9 ? "0" : ""}${index + 1}</button>
               </span>`;
            },
          }}
          // Navigation arrows
          navigation={{
            nextEl: ".slider-button-next, .slider-button-8-next",
            prevEl: ".slider-button-prev, .slider-button-8-prev",
          }}
          a11y={false}
        >
          {slider_items.map((item, i) => (
            <SwiperSlide
              key={i}
              className="slider__item-8 p-relative z-index-1 slider__height-8 d-flex align-items-center"
            >
              {item.isVideoBannerRequired ? (
                <div className="slider__bg-8 include-bg">
                  <video className="video-fit" autoPlay muted loop>
                    <source src={item.videoSrc} type="video/mp4" />
                  </video>
                </div>
              ) : (
                <div
                  className="slider__bg-8 include-bg"
                  style={{ backgroundImage: `url(${item.bg.src})` }}
                ></div>
              )}
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xxl-10 col-xl-8 col-lg-9">
                    <div className="slider__content-8">
                      <h3 className="slider__title-8">{item.title}</h3>
                      <p>{item.subtitle}</p>

                      <div className="slider__btn-8">
                        <Link
                          href="/contact"
                          className="tp-btn-4 tp-style-border"
                        >
                          Shop for a plan{" "}
                          <i class="fa-light fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="main-slider-dot-8 d-none d-sm-flex"></div>
        </Swiper>

        {/*  slider__nav */}

        <div className="mouse-scroll mouse-scroll-8">
          <a href="#tpabout" className="mouse-scroll-btn"></a>
        </div>
      </section>
    </>
  );
};

export default dynamic(() => Promise.resolve(ArchitectureBanner), {
  ssr: false,
});
