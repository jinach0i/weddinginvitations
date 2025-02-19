import Link from "next/link"
import { IoHome } from "react-icons/io5";

export default function NotFound() {
    return (
        <div className="w-full h-full bg-[url(/images/pinktree.jpg)] bg-no-repeat bg-cover flex flex-col justify-evenly text-white">
            <h2 className="parisienne mt-3!">Not Found</h2>
            <p className="text-center mb-8!  text-2xl">페이지를 찾을 수 없습니다</p>
            <Link href="/" className="mx-auto flex justify-center w-fit py-3 px-8 items-center border border-primary1 h-fit rounded-lg hover:bg-primary1 hover:text-white">처음으로 돌아가기<IoHome className="ml-2 -translate-y-px "/></Link>
        </div>
    )
};
