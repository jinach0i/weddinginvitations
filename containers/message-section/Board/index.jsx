import { GoHeart } from "react-icons/go";

export default function Board() {
  return <div className="board-box">
    <Ment className />
  </div>;
}


const Ment = () => {
    return(
        <div className="px-[5dvw]">
            <div className="top flex justify-between items-center">
                <div className="left flex">
                    <div className="icon-box"><GoHeart /></div>
                    <div className="name-box">이름</div>
                </div>
                <div className="date-box">월 일</div>
            </div>
            <div className="bot">여기 멘트</div>
        </div>
    )
}