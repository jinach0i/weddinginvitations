"use client"

import { useState, useEffect } from "react";
import { FaHeart } from 'react-icons/fa';
import {AnimateHeartCanvas} from "animate-heart-canvas"

export default function Entrance({
  hMin,
  hMax,
  countHeart,
  sizeMin,
  sizeMax,
  bgColor
}) {
  const [height, setHeight] = useState(0);
  let animateHeartCanvas = new AnimateHeartCanvas(hMin, hMax, countHeart, sizeMin, sizeMax, bgColor)

  useEffect(() => {
    let animateHeartCanvas = new AnimateHeartCanvas(
     0,10,'5px','8px',"red"
  );
    setHeight(window.innerHeight);
    animateHeartCanvas = new AnimateHeartCanvas();
    const clearEffect = setTimeout(() => {
      AnimateHeartCanvas.stop();
    }, 3000);
    return () => {
      clearTimeout(clearEffect);
        animateHeartCanvas.stop();
    };
}, [hMin, hMax, countHeart, sizeMin, sizeMax, bgColor]);

  return (
    <section className="">
      <article className="" style={{ height }} hMin={0} hMax={360} countHeart={50} sizeMin={10} sizeMax={30} bgColor="#fff" >
        <FaHeart />
        <div className="top before:content-['태규'] after:content-['혜진'] after:right-0"></div>
        <div className="stacked">
          ㅁㄴㅇㅁㄴㅇ
        </div>

      </article>
    </section>
  )
};
