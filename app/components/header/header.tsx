import React from "react";

export default function Header() {
  return (
    <header>
      <div className="grid place-items-center mx-auto h-32 w-16 text-center align-middle  md:w-32 lg:w-48">
        <h1 className="underline underline-offset-8 decoration-4 decoration-indigo-500 font-sans font-bold text-5xl">
          QNotes
        </h1>
      </div>
    </header>
  );
}
