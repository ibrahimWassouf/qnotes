import React from "react";

export default function main() {
  return (
    <main className="flex flex-row max-w-7xl h-[50rem] justify-around">
      <div id="notes" className="relative flex justify-center w-1/3 h-full">
        <form className="h-4/5">
          <input
            id="notes-field"
            type="text"
            placeholder="Insert Notes Here"
            className="border-4 rounded-md h-full"
          />
        </form>
      </div>
      <div id="q-cards" className="relative flex flex-col w-1/3 h-full">
        <h2>Your cards</h2>
        <div id="card-list" className="h-80px w-80px">
          <div id="card" className="m-2 p-2 rounded-lg bg-purple-300">
            <h3 className="px-2">Card Title</h3>
            <p className=" py-10 px-5 bg-purple-200 rounded-lg">
              Long definition text
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
