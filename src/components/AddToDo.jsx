export default function AddToDo({ addItem }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // targets the element with the name property == "todo" and
    // it takes the value inputted and trims it before saving it
    // in the `value` variable
    const value = e.target.elements.todo.value.trim();
    // if submitting while no text, return an alert
    if (!value) return alert('Please enter a to-do item');

    addItem(value);

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex">
      <input
        type="text"
        name="todo"
        placeholder="Add a new to-do"
        className="flex-1 border rounded px-2 py-1 mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add
      </button>
    </form>
  );
}
