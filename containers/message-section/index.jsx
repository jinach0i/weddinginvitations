"use client"

import Footer from "@/components/Footer/Footer";
import Board from "./Board";
import { SlEnvolopeLetter } from "react-icons/sl";

export default function MessageSec() {
  return (
    <section className="">
      <article className="inner1">
        <div className="logo"></div>
        <h2 className="parisienne">Guest book</h2>
        <div className="w-full divide-y divide-dashed divide-primary2">
          <h3 className="font-bold text-center text-lg pb-8!">축하 메시지</h3>
          <div className="write-box pt-10! pb-10! inline-block w-full">
            <button className="w-[380px] h-[46px] flex items-center justify-center cursor-pointer p-4 border! border-secondary1! rounded-lg mx-auto!">
              <span className="mr-1! translate-y-0.5">축하의 말 적기</span>
              <SlEnvolopeLetter />
            </button>
          </div>
        </div>
        <div className="comments px-12!">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              reiciendis dolorum sed sint accusantium est praesentium nemo deserunt.
              Autem beatae, recusandae consequuntur distinctio qui impedit minima
              sequi quos dolor numquam!
            </p>
            <hr />
        </div>
        <Board />
        <Footer />
      </article>
    </section>
  );
}
