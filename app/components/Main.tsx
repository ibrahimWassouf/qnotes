import React from "react";
import Card from "./Card";

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
          <Card />
        </div>
      </div>
    </main>
  );
}
