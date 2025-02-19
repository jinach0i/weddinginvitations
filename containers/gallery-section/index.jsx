"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

export default function Gallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section className="">
      <article className="relative">
        <h2 className="parisienne">Gallery</h2>
        <Swiper
        className="mainSwiper"
          style={{
            "--swiper-navigation-color": "var(--primary1)",
            "--swiper-pagination-color": "var(--primary1)",
          }}
          loop={true}
          centeredSlides={true}
          spaceBetween={10}
          navigation={{
            nextEl: ".nextBtn",
            prevEl: ".prevBtn",
          }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Navigation, Thumbs]}
        >
          <div className="prevBtn">
            <img
              src="/images/hearticon2.jpg"
              alt="하트"
            />
          </div>
          <div className="nextBtn">
            <img
              src="/images/hearticon2.jpg"
              alt="하트"
            />
          </div>
          <SwiperSlide>
            <Image
              alt="웨딩포토"
              width={400}
              height={600}
              src="/images/DSC00051_1.jpg"
              className="max-h-[80dvh]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="웨딩포토"
              width={400}
              height={600}
              src="/images/DSC00321_.jpg"
              className="max-h-[80dvh]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="웨딩포토"
              width={400}
              height={600}
              src="/images/DSC00468_1.jpg"
              className="max-h-[80dvh]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="웨딩포토"
              width={400}
              height={600}
              src="/images/DSC00743_1.jpg"
              className="max-h-[80dvh]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="웨딩포토"
              width={400}
              height={600}
              src="/images/DSC00159_.jpg"
              className="max-h-[80dvh]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="웨딩포토"
              width={400}
              height={600}
              src="/images/DSC00828_.jpg"
              className="max-h-[80dvh]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="웨딩포토"
              width={400}
              height={600}
              src="/images/DSC00828_.jpg"
              className="max-h-[80dvh]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="웨딩포토"
              width={400}
              height={600}
              src="/images/DSC00828_.jpg"
              className="max-h-[80dvh]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="웨딩포토"
              width={400}
              height={600}
              src="/images/DSC00828_.jpg"
              className="max-h-[80dvh]"
            />
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={8}
          slidesPerView={3}
          modules={[Navigation, Thumbs]}
          className="cursor-pointer absolute! w-[40dvw] left-[30%] mx-auto -bottom-[20%] **:min-w-[100px] **:max-w-[100px] **:h-[100px]"
        >
          <SwiperSlide>
            <Image
              alt="웨딩포토"
              width={100}
              height={100}
              src="/images/DSC00051_1.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="웨딩포토"
              width={100}
              height={100}
              src="/images/DSC00321_.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="웨딩포토"
              width={100}
              height={100}
              src="/images/DSC00468_1.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="웨딩포토"
              width={100}
              height={100}
              src="/images/DSC00743_1.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="웨딩포토"
              width={100}
              height={100}
              src="/images/DSC00159_.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="웨딩포토"
              width={100}
              height={100}
              src="/images/DSC00828_.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="웨딩포토"
              width={100}
              height={100}
              src="/images/DSC00828_.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="웨딩포토"
              width={100}
              height={100}
              src="/images/DSC00828_.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="웨딩포토"
              width={100}
              height={100}
              src="/images/DSC00828_.jpg"
            />
          </SwiperSlide>
        </Swiper>
      </article>
    </section>
  );
}
