import React, { useEffect, useState } from "react";

export default function ParentBox() {
    useEffect(() => {
        if(localStorage.getItem('proWriter-lastSave')){
            document.getElementById('textarea').value = localStorage.getItem('proWriter-lastSave');
            onChange()
        }
    }, [])
    const[letterCount, setLetterCount] = useState(0)
    const[wordCount, setWordCount] = useState(0)
    const[lineCount, setLineCount] = useState(0)
    function onChange(){
        setLetterCount(document.getElementById('textarea').value.length)
        localStorage.setItem('proWriter-lastSave', document.getElementById('textarea').value)
        if(document.getElementById('textarea').value.length != 0){
            setWordCount(document.getElementById('textarea').value.match(/(\w+)/g).length )
            setLineCount(document.getElementById('textarea').value.split(/\r\n|\r|\n/).length )
        }else{
            setWordCount(0)
            setLineCount(0)
        }
    }
  return (
    <div className="flex flex-col md:flex-row">
      <div className="my-2 py-4 self-start">
        <textarea
          name=""
          id="textarea"
          cols="30"
          rows="10"
          placeholder="Enter Your Text here..."
          className="bg-transparent outline-none text-xl placeholder-fuchsia-400 placeholder-opacity-60 selection:bg-fuchsia-500 selection:text-fuchsia-50"
          onChange={onChange}
        ></textarea>
      </div>
      {/* Text Stats */}
      <div className="text-stats w-full h-max flex flex-col items-center justify-center text-center">
        <p className="flex-row flex text-3xl font-normal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.2}
              d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
            />
          </svg>
          Statistics
        </p>
        <div className="flex flex-col">
            <p className="mt-4">{letterCount} characters</p>
            <p className="mt-4">{wordCount} words</p>
            <p className="mt-4">{lineCount} lines</p>
            <p className="mt-4"></p>
        </div>
      </div>
    </div>
  );
}
