import React from "react";

export default function Header() {
  return (
    <div>
      <div className="">
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
      </div>
    </div>
  );
}
