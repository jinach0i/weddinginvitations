"use client"
import { useRef } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { BsArrowThroughHeart } from "react-icons/bs";

export default function BankingInfo() {
    const targetRef = useRef(null);
    const getCopy = () => {
        const grabTarget = targetRef.current;
        if (grabTarget) {
            // 모든 txt를 선택하게 함:
            grabTarget.select();
            // 이론상 select한 txt의 시작 위치값과 끝 위치값 지정이나 실상 0과 99999고정 쓰임:
            grabTarget.setSelectionRange(0,99999);
            // 선택했으면 복사하게 함:
            navigator.clipboard.writeText(grabTarget.value)
              .then(() => alert(`${grabTarget.value} 라고 복사되었습니다`))
              .catch(err => console.error("복사 실패:", err))
        }
    };

  return (
    <div className="flex flex-col">
      <BsArrowThroughHeart />
      <h2 className="before:content-['미음'] before:absolute before:left-0 before:bg-blue relative">계좌번호</h2>
      <div className="divide-y">
        <div>
          <input ref={targetRef} defaultValue="111-1111-1111" className="select-none hover:scale-100 border-gray-300"/>
          <button onClick={getCopy} className="block -translate-x-[50px]"><IoCopyOutline /></button>
        </div>
        <div>
          <input ref={targetRef} defaultValue="111-1111-1111" className="select-none hover:scale-100 border-gray-300"/>
          <button onClick={getCopy} className="block -translate-x-[50px]"><IoCopyOutline /></button>
        </div>
      </div>
    </div>
  );
}
