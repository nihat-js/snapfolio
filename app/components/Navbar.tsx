import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-4 py-4 mb-5">
      <a className="inline-flex items-center space-x-2 cursor-pointer active">
        <span className="bg-blue-300 rounded-full">
          <Image src="/nav-logo.svg" width={24} height={24} alt="logo" />
        </span> 
        {/* {/* <span className="font-bold ">Nihat</span> */}
      </a>
      <div className="hidden lg:block">
        <ul className="inline-flex space-x-5">
          <li className="relative cursor-pointer font-[500] text-[18px] text-black">
            <Link
              href="/games"
              rel="noreferrer"
              className="text-sm hover:underline font-semibold text-black cursor-pointer px-2"
            >
              Play Game
            </Link>
          </li>

          <li className="relative cursor-pointer font-[500] text-[18px] text-black">
            <Link
              href="/"
              className="text-sm hover:underline font-semibold text-black cursor-pointer px-2 active"
            >
              Home
            </Link>
          </li>

          <li className="relative cursor-pointer font-[500] text-[18px] text-black">
            <Link
              href={"/blogs"}
              className="text-sm hover:underline font-semibold text-black cursor-pointer px-2"
            >
              Learn
            </Link>
          </li>
        </ul>
      </div>
      <div className="hidden lg:block hover:underline">

        <div className="relative">
          <Image
            src="./notification.svg"
            width={32}
            height={32}
            alt="notification"
          />
          <span className="absolute top-0 right-0 bg-red-500 text-white w-4 h-4 text-xs rounded-full px-2 py-1">
            1
          </span>
        </div>
      </div>
      <div className="lg:hidden">
        <Image src="./mobile-menu.svg" width={32} height={32} alt="menu" />
      </div>
    </div>
  );
}
