"use client"

import { useRef } from "react";
import BankingInfo from "./BankingInfo";
import { IoCopyOutline } from "react-icons/io5";

export default function SupportSec() {
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
    <section className="bg-[#fefbf2]">
      <article className="inner1">
        <h2 className="parisienne">Exchangeable support</h2>
        <div className="w-full divide-y divide-dashed divide-primary2">
          <h3 className="subtitle">
            마음을 전하실 곳
          </h3>
        </div>
        <div className="text-center seoulNamsan pb-9!">
          <p>멀리서도 축하의 마음을</p>
          <p>전하고 싶으신 분들을 위해</p>
          <p>계좌번호를 안내해드립니다.</p>
          <p>소중한 축하를 보내주셔서 감사드리며,</p>
          <p>따뜻한 마음을 보답할 것을 약속드립니다.</p>
        </div>
        <details className="border border-secondary1 not-focus:border-b-0 rounded-lg">
          <summary className="border-b border-secondary1  py-3!">신랑측</summary>
          <ul className="*:border-b *:border-dashed *:border-secondary1 *:last:border-solid *:p-6!">
            <li>
              <div>신랑 <em>양태규</em></div>
              <div className="flex w-full justify-between">
                <div>
                  <span className="mr-2">신한은행</span>
                                <input ref={targetRef} defaultValue="111-1111-1111" className="select-none hover:scale-100 border-gray-300"/>
                </div>
                <button onClick={getCopy} className="flex -translate-x-[50px]"><IoCopyOutline />복사</button>
                </div>
            </li>
            <li>
              <div>아버지 <em>양 근</em></div>
              <div className="flex w-full justify-between">
                <div>
                  <span className="mr-2">신한은행</span>
                                <input ref={targetRef} defaultValue="111-1111-1111" className="select-none hover:scale-100 border-gray-300"/>
                </div>
                <button onClick={getCopy} className="flex -translate-x-[50px]"><IoCopyOutline />복사</button>
                </div>
            </li>
            <li>
              <div>어머니 <em>박미서</em></div>
              <div className="flex w-full justify-between">
                <div>
                  <span className="mr-2">신한은행</span>
                                <input ref={targetRef} defaultValue="111-1111-1111" className="select-none hover:scale-100 border-gray-300"/>
                </div>
                <button onClick={getCopy} className="flex -translate-x-[50px]"><IoCopyOutline />복사</button>
                </div>
            </li>
          </ul>
        </details>
        <details className="mt-2 border border-secondary1 not-focus:border-b-0 rounded-lg">
          <summary className="border-b border-secondary1  py-3!">신랑측</summary>
          <ul className="*:border-b *:border-dashed *:border-secondary1 *:last:border-solid *:p-6!">
            <li>
              <div>신랑 <em>양태규</em></div>
              <div className="flex w-full justify-between">
                <div>
                  <span className="mr-2">신한은행</span>
                                <input ref={targetRef} defaultValue="111-1111-1111" className="select-none hover:scale-100 border-gray-300"/>
                </div>
                <button onClick={getCopy} className="flex -translate-x-[50px]"><IoCopyOutline />복사</button>
                </div>
            </li>
            <li>
              <div>아버지 <em>양 근</em></div>
              <div className="flex w-full justify-between">
                <div>
                  <span className="mr-2">신한은행</span>
                                <input ref={targetRef} defaultValue="111-1111-1111" className="select-none hover:scale-100 border-gray-300"/>
                </div>
                <button onClick={getCopy} className="flex -translate-x-[50px]"><IoCopyOutline />복사</button>
                </div>
            </li>
            <li>
              <div>어머니 <em>박미서</em></div>
              <div className="flex w-full justify-between">
                <div>
                  <span className="mr-2">신한은행</span>
                                <input ref={targetRef} defaultValue="111-1111-1111" className="select-none hover:scale-100 border-gray-300"/>
                </div>
                <button onClick={getCopy} className="flex -translate-x-[50px]"><IoCopyOutline />복사</button>
                </div>
            </li>
          </ul>
        </details>
        <BankingInfo />
      </article>
    </section>
  );
}
