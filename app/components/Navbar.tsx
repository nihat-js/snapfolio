export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-4 py-4 mb-5">
      <a className="inline-flex items-center space-x-2 cursor-pointer active">
        <span className="bg-black rounded-full">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            className="text-white p-1"
            height="30"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z">
            </path>
          </svg>
        </span>
        <span className="font-bold ">Nihat</span>
      </a>
      <div className="hidden lg:block">
        <ul className="inline-flex space-x-5">
          <li className="relative cursor-pointer font-[500] text-[18px] text-black">
            <a className="text-sm hover:underline font-semibold text-black cursor-pointer px-2 active">
              Home
            </a>
          </li>
          <li className="relative cursor-pointer font-[500] text-[18px] text-black">
            <a
              href="/games"
              rel="noreferrer"
              className="text-sm hover:underline font-semibold text-black cursor-pointer px-2"
            >
              Play Game
            </a>
          </li>
          <li className="relative cursor-pointer font-[500] text-[18px] text-black">
            <a className="text-sm hover:underline font-semibold text-black cursor-pointer px-2">
              Read my blog
            </a>
          </li>
        </ul>
      </div>
      <div className="hidden lg:block hover:underline">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.992 2.992 0 0019 12V8a7 7 0 10-14 0v4a2.992 2.992 0 00-.595 3.595L4 17h5m6 0v1a2 2 0 01-2 2H9a2 2 0 01-2-2v-1m6 0H9"
            />
          </svg>

          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">
            3
          </span>
        </div>
      </div>
      <div className="lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-menu h-6 w-6 cursor-pointer"
        >
          <line x1="4" x2="20" y1="12" y2="12"></line>
          <line x1="4" x2="20" y1="6" y2="6"></line>
          <line x1="4" x2="20" y1="18" y2="18"></line>
        </svg>
      </div>
    </div>
  );
}
