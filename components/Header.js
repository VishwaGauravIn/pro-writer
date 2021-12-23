import React from "react";

export default function Header() {
    function fuchsia(){
        document.documentElement.classList.add('fuchsia')
        document.documentElement.classList.remove('cyan')
        document.documentElement.classList.remove('rose')
        document.documentElement.classList.remove('amber')
        document.documentElement.classList.remove('green')
    }
    function cyan(){
        document.documentElement.classList.add('cyan')
        document.documentElement.classList.remove('fuchsia')
        document.documentElement.classList.remove('rose')
        document.documentElement.classList.remove('amber')
        document.documentElement.classList.remove('green')
    }
    function rose(){
        document.documentElement.classList.add('rose')
        document.documentElement.classList.remove('fuchsia')
        document.documentElement.classList.remove('cyan')
        document.documentElement.classList.remove('amber')
        document.documentElement.classList.remove('green')
    }
    function amber(){
        document.documentElement.classList.add('amber')
        document.documentElement.classList.remove('fuchsia')
        document.documentElement.classList.remove('rose')
        document.documentElement.classList.remove('cyan')
        document.documentElement.classList.remove('green')
    }
    function green(){
        document.documentElement.classList.add('green')
        document.documentElement.classList.remove('fuchsia')
        document.documentElement.classList.remove('rose')
        document.documentElement.classList.remove('amber')
        document.documentElement.classList.remove('cyan')
    }
  return (
    <div>
      <div className="flex flex-row">
        <p className="text-4xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
          Pro Writer
        </p>
        <div className="absolute right-4 flex flex-row pt-2 md:pt-0">
          <div className="w-4 h-4 m-1 rounded-full cursor-pointer active:scale-90  bg-fuchsia-400" onClick={fuchsia}></div>
          <div className="w-4 h-4 m-1 rounded-full cursor-pointer active:scale-90  bg-cyan-400" onClick={cyan}></div>
          <div className="w-4 h-4 m-1 rounded-full cursor-pointer active:scale-90  bg-rose-400" onClick={rose}></div>
          <div className="w-4 h-4 m-1 rounded-full cursor-pointer active:scale-90  bg-amber-400" onClick={amber}></div>
          <div className="w-4 h-4 m-1 rounded-full cursor-pointer active:scale-90  bg-green-400" onClick={green}></div>
        </div>
      </div>
    </div>
  );
}
