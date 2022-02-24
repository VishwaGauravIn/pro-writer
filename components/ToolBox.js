import React, { useState } from "react";
import Templates from "./Templates";

export default function ToolBox({ text, setText }) {
  const [isTemplateVisible, setIsTemplateVisible] = useState(false);
  function lowerCase() {
    setText(text.toLowerCase());
  }
  function upperCase() {
    setText(text.toUpperCase());
  }
  function capitalise() {
    let s = text;
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
    setText(s);
  }
  const TextFile = () => {
    const element = document.createElement("a");
    const file = new Blob([text], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "ProWriter.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };
  return (
    <>
      <div className="flex fixed flex-col md:flex-row -ml-4 px-2 flex-wrap bottom-0 h-16 w-full max-w-full overflow-x-auto justify-start md:justify-center items-center bg-zinc-900 overflow-y-hidden select-none">
        {/* Magic Spell */}
        <div
          className="inline-flex flex-col justify-center items-center w-28 cursor-pointer"
          onClick={magicSpell}
          title="Add relevant characters to your text to make it even more longer"
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
          className="inline-flex flex-col justify-center items-center w-28 cursor-pointer"
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
          className="inline-flex flex-col justify-center items-center ml-2 w-28 cursor-pointer"
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
          className="inline-flex flex-col justify-center items-center ml-2 w-28 cursor-pointer"
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
          className="inline-flex flex-col justify-center items-center ml-2 w-24 cursor-pointer"
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
          Save as .txt
        </div>
        {/* Temlpate */}
        <div
          className="inline-flex flex-col justify-center items-center ml-2 w-24 cursor-pointer h-max"
          onClick={() => setIsTemplateVisible(!isTemplateVisible)}
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
              d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
            />
          </svg>
          Templates
        </div>
        {isTemplateVisible && (
          <Templates
            setText={setText}
            onClose={() => setIsTemplateVisible(false)}
          />
        )}
        {/* Contribute */}
        <a
          className="inline-flex flex-col justify-center items-center ml-2 w-24 cursor-pointer"
          href="https://github.com/VishwaGauravIn/pro-writer"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="-0.5 -1 17 17"
            stroke="currentColor"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
          Contribute
        </a>
        {/* About */}
        <a
          className="inline-flex flex-col justify-center items-center ml-2 w-24 cursor-pointer"
          href="https://itsvg.in"
          target="_blank"
          rel="noreferrer"
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
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          About Us
        </a>
      </div>
    </>
  );
}
// Warning Non - DRY code
function magicSpell() {
  let earlyCount = document.getElementById("textarea").value.length;
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" good ", " outstanding ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" Good ", " Outstanding ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" GOOD ", " OUTSTANDING ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" new ", " latest ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" New ", " Latest ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" NEW ", " LATEST ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" this means ", " this actively illustrates that  ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" This means ", " This actively illustrates that ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" THIS MEANS ", " THIS ACTIVELY ILLUSTRATES THAT ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" because ", " the reason for this ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" Because ", " The reason for this ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" BECAUSE ", " THE REASON FOR THIS ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" so ", " thus, the conclusion is that ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" So ", " Thus, the conclusion is that ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" SO ", " THUS, THE CONCLUSION IS THAT ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" and ", " as well as ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" And ", " As well as ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" AND ", " AS WELL AS ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" linking ", " bridging the gap ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" Linking ", " Briding the gap ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" LINKING ", " BRIDGING THE GAP ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(
      " in conclusion ",
      " to sum up everything that has been stated "
    );
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(
      " In conclusion ",
      " To sum up everything that has been stated "
    );
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(
      " In Conclusion ",
      " To sum up everything that has been stated "
    );
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(
      " IN CONCLUSION ",
      " TO SUM UP EVERYTHING THAT HAS BEEN STATED "
    );
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" also ", " in addition to this ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" Also ", " In addition to this ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" ALSO ", " IN ADDITION TO THIS ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" yet ", " on the other hand ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" Yet ", " On the other hand ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" YET ", " ON THE OTHER HAND ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" about ", " in regards to ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" About ", " In regards to ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" ABOUT ", " IN REGARDS TO ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" even though ", " be that as it may ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" Even though ", " Be that as it may ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" EVEN THOUGH ", " BE THAT AS IT MAY ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" until ", " until such time as ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" Until ", " Until such time as ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" UNTIL ", " UNTIL SUCH TIME AS ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(
      " this suggest ",
      " therefore elucidating the impression that "
    );
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(
      " this suggests ",
      " therefore elucidating the impression that "
    );
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(
      " This suggests ",
      " therefore elucidating the impression that "
    );
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(
      " THIS SUGGESTS ",
      " THEREFORE ELUCIDATING THE IMPRESSION THAT "
    );
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" this means ", " this actively demonstrates that ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" it means ", " it actively demonstrates that ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(
      " in conclusion to ",
      " to sum up everything that has been stated so far "
    );
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(
      " In conclusion to ",
      " To sum up everything that has been stated so far "
    );
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" for ", " for the exact purpose of ");
  document.getElementById("textarea").value = document
    .getElementById("textarea")
    .value.replaceAll(" For ", " For the exact purpose of ");
  let finalCount = document.getElementById("textarea").value.length;
  if (finalCount - earlyCount > 0) {
    alert(
      "Magic Spell [BETA] applied, " +
        (finalCount - earlyCount) +
        " Characters added, Use it only 1 time per article"
    );
  } else {
    alert("Unable to apply Magic Spell, Add more suitable content");
  }
}
