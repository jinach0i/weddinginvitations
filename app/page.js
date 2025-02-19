"use client"

import Gallery from "@/containers/gallery-section";
import MessageSec from "@/containers/message-section";
import SupportSec from "@/containers/support-section";
import Calendar from "@/containers/calendar-section";
import Location from "./location/page";
import Movie from "@/containers/landing-section";
import Entrance from "./entrance/page";

import { BiSolidUpArrow } from "react-icons/bi"

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';
import { Navigation, History, EffectCreative } from 'swiper/modules';


export default function Home() {
  return (
    <Swiper
    slidesPerView={1}
    spaceBetween={10}
      navigation={{
        prevEl: '.prevBtn1',
        nextEl: '.nextBtn1'
      }}
      direction="vertical"
      history={{
        key: 'wedding',
      }}
      modules={[Navigation, History]}
      rewind={true}
    >
      <SwiperSlide data-history="movie"><Movie /></SwiperSlide>
      <SwiperSlide data-history="entrance"><Entrance /></SwiperSlide>
      <SwiperSlide data-history="calendar"><Calendar /></SwiperSlide>
      <SwiperSlide data-history="gallery"><Gallery /></SwiperSlide>
      <SwiperSlide data-history="location"><Location /></SwiperSlide>
      <SwiperSlide data-history="support"><SupportSec /></SwiperSlide>
      <SwiperSlide data-history="comments"><MessageSec /></SwiperSlide>
      <div className="prevBtn1"><BiSolidUpArrow className="mx-auto h-full text-primary1 content-center" /></div>
      <div className="nextBtn1 hidden"></div>
    </Swiper>
  );
}
