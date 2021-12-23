import React from "react";

export default function ToolBox() {
  function lowerCase() {
    document.getElementById("textarea").value = document
      .getElementById("textarea")
      .value.toLowerCase();
  }
  function upperCase() {
    document.getElementById("textarea").value = document
      .getElementById("textarea")
      .value.toUpperCase();
  }
  function capitalise() {
    let s = document.getElementById("textarea").value;
    s = s.toLowerCase();
    s = s.charAt(0).toUpperCase() + s.slice(1);
    // Advanced Word Count ~ VishwaGauravIn
    for (let i = 0; i < s.length; i++) {
      if (s.charAt(i) === ".") {
        if (i + 1 < s.length && s.charAt(i + 1) === " ") {
          if (i + 2 < s.length) {
            s =
              s.substring(0, i + 2) +
              s.charAt(i + 2).toUpperCase() +
              s.substring(i + 2 + 1);
          }
        }
      }
    }
    document.getElementById("textarea").value = s;
  }
  const TextFile = () => {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById("textarea").value], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "ProWriter.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };
  return (
    <div className="flex fixed flex-row bottom-0 h-16 w-full justify-center items-center">
      {/* Magic Spell */}
      <div
        className="flex flex-col justify-center items-center w-28 cursor-pointer"
        // onClick={lowerCase}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
        Magic Spell
      </div>
      {/* Lowercase */}
      <div
        className="flex flex-col justify-center items-center w-28 cursor-pointer"
        onClick={lowerCase}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
          />
        </svg>
        lowercase
      </div>
      {/* Uppercase */}
      <div
        className="flex flex-col justify-center items-center ml-2 w-28 cursor-pointer"
        onClick={upperCase}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
        UPPERCASE
      </div>
      {/* Capitalise */}
      <div
        className="flex flex-col justify-center items-center ml-2 w-28 cursor-pointer"
        onClick={capitalise}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="m2.244 13.081.943-2.803H6.66l.944 2.803H8.86L5.54 3.75H4.322L1 13.081h1.244zm2.7-7.923L6.34 9.314H3.51l1.4-4.156h.034zm9.146 7.027h.035v.896h1.128V8.125c0-1.51-1.114-2.345-2.646-2.345-1.736 0-2.59.916-2.666 2.174h1.108c.068-.718.595-1.19 1.517-1.19.971 0 1.518.52 1.518 1.464v.731H12.19c-1.647.007-2.522.8-2.522 2.058 0 1.319.957 2.18 2.345 2.18 1.06 0 1.716-.43 2.078-1.011zm-1.763.035c-.752 0-1.456-.397-1.456-1.244 0-.65.424-1.115 1.408-1.115h1.805v.834c0 .896-.752 1.525-1.757 1.525z" />
        </svg>
        Capitalise
      </div>
      {/* Save TXT */}
      <div
        className="flex flex-col justify-center items-center ml-2 w-24 cursor-pointer"
        onClick={TextFile}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 16v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2h2m3-4H9a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-1m-1 4l-3 3m0 0l-3-3m3 3V3"
          />
        </svg>
        save as .txt
      </div>
    </div>
  );
}
