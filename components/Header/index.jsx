"use client"

import Image from "next/image";
import Nav from "./nav";
import { useState } from "react";

export default function Header() {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <header className="w-full fixed bottom-0 left-0 bg-blue z-20">
            {/* <div 
            className="heart cursor-pointer"
            onClick={() => {setIsClicked==!isClicked;}}
            >
              <Image width={50} height={50} src="/images/hearticon2.png" alt="메뉴"/>  
            </div>
            <div className="header-contents">
                <div className="hamberger"></div>
            </div>
            <Nav /> */}
        </header>
    )
}