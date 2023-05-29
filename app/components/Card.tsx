interface cardProps {
  cardTitle: string;
  definition: string;
}

export default function Card({
  cardTitle = "Card Title",
  definition = "Long definition text",
}: cardProps) {
  return (
    <div id="card" className="m-2 p-2 rounded-lg bg-purple-300">
      <h3 className="px-2">{cardTitle}</h3>
      <p className=" py-10 px-5 bg-purple-200 rounded-lg">{definition}</p>
    </div>
  );
}
