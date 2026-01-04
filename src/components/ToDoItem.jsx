export default function ToDoItem({ todo, toggleTodo }) {
  return (
    // ternary operator to cross out the text if the item is completed or not
    <li className={`flex items-center mb-2 ${todo.completed ? 'line-through' : ''}`}>
      <label>
        {/* Each item is getting the values for the completed 
        and itemText keys to build the element */}
        <input
          type="checkbox"
          checked={todo.completed}
          // when the checkbox is ticked, i am triggering the function
          // for the item with the id that was clicked
          onChange={() => toggleTodo(todo.id)}
          className="mr-2"
        />
        {todo.itemText}
      </label>
    </li>
  );
}
