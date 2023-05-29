export default function NotesForm() {
  return (
    <form className="h-4/5">
      <input
        id="notes-field"
        type="text"
        placeholder="Insert Notes Here"
        className="border-4 rounded-md h-full"
      />
    </form>
  );
}
