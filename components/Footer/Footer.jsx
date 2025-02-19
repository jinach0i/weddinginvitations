import { BsFillShareFill } from "react-icons/bs";

export default function Footer() {
    return (
        <footer className="w-full h-full text-center">
            <div className="share-box pt-8! pb-20! inline-block">
                <button className="w-[380px] h-[46px] flex items-center justify-center cursor-pointer p-4 border! border-secondary1! rounded-lg"><span className="mr-1! translate-y-0.5">공유하기</span><BsFillShareFill /></button>
            </div>
            <address className="text-sm">Copyright © 2025 최혜진 All rights reserved.</address>
        </footer>
    )
};
