export default function Share() {
    return(
        <div className="modalBg w-full h-full absolute top-0 left-0 bg-gray-50/50">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-full text-base tracking-tighter dialog">
            <div className="inner">
                <div className="icons"></div>
                <div className="closeBtn">
                    <button className="closeBtn">닫기</button>
                </div>
            </div>
            </div>
        </div>
    )
};
