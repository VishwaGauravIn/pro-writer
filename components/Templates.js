import React from "react";

export default function Templates({ onClose, setText }) {
  function formalLetter() {
    setText(`
From: [Sender Name]
[Title] | [Company] | [Address] | [City] | [State] | [Zip]

[Date]

To: [Recipient Name]
[Title] | [Company] | [Address] | [City] | [State] | [Zip]

Dear [Recipient Name]:

// Letter Content

Sincerely,
[Your Name]
[Title]

        `);
  }
  function informalLetter() {
    setText(`
[Street]

[Area]

[City]

[Date]


Dear [Name],

// Letter Content

Lots of Love
[Your Name]
      `);
  }
  function referenceLetter() {
    setText(`
[Address of the person who is reffering]

[Date]

[Address of other company]

Dear [Name]: 

It's my pleasure to recommend [Name] for the position of [Position] at your company. [Name] and I worked together for just over [duration] years when she was a [position] in my department at [Company name]. 

// Other Content

I recommend [Name] without reservations. Please do not hesitate to reach out with any questions. You can reach me at [Email / Contact]

Sincerely, 

[Name] (signature hard copy letter)

[Name]
      `);
  }

  function coverLetter() {
    setText(`
[Today's Date]

[Hiring Manager's Name]
[Company's Address]
[Contact Details]

Dear [Mr./Ms./Mrs.] [Hiring Manager's Name],

[Intro]

[Body Paragraph]

[Call to Action / Closing ]

Sincerely,
[Your Name]
      `);
  }
  return (
    <div className="bg-zinc-900 p-2 fixed -mt-12 md:-mt-28 sm:rounded-t-md overflow-x-scroll overflow-y-hidden flex flex-col flex-wrap items-start max-w-[100vw] h-12 md:h-10">
      <div className="w-max h-max flex flex-row flex-wrap space-x-4">
        <p
          className="mb-1 cursor-pointer"
          onClick={() => formalLetter() & onClose()}
        >
          Formal Letter
        </p>
        <p
          className="mb-1 cursor-pointer"
          onClick={() => informalLetter() & onClose()}
        >
          Informal Letter
        </p>
        <p
          className="mb-1 cursor-pointer"
          onClick={() => referenceLetter() & onClose()}
        >
          Reference Letter
        </p>
        <p
          className="mb-1 cursor-pointer"
          onClick={() => coverLetter() & onClose()}
        >
          Cover Letter
        </p>
      </div>
    </div>
  );
}
