import AddToDo from './components/AddToDo';
import Filters from './components/Filters';
import ToDoList from './components/ToDoList';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState(() => {
    // gets the Todos item from the local storage
    const localStorageItems = localStorage.getItem('Todos');
    // if such an item exists, it returns it in a parsed form
    if (localStorageItems) {
      return JSON.parse(localStorageItems);
    }
    // otherwise it returns an empty array
    return [];
  });
  const [filter, setFilter] = useState('all');

  function addItemToList(userInput) {
    // creates a new object with some properties
    const newItem = {
      id: todos.length + 1,
      itemText: userInput,
      completed: false,
    };

    // saves the new item in the todos list
    setTodos((prev) => {
      // create a new variable for the updated list of todos, being
      // an array containing everything before, plus the new item
      const updatedTodos = [...prev, newItem];
      // saves the updated list to the local storage
      localStorage.setItem('Todos', JSON.stringify(updatedTodos));
      // returns the new list to be set in the state
      return updatedTodos;
    });
  }

  function toggleTodo(id) {
    // updates the todos list with the setTodos state function
    // takes the previous list as an argument, then it uses the map method
    // to loop through each item in the previous list; map() will return a new array
    // for each element that is meeting the condition to have the id
    // equal to the id that is given as an argument, we are creating a
    // new object for it, bt copying all the properties and then
    // override the completed property to a new value
    // if the condition is not met, we just copy the object as it is in the new array]
    setTodos((prev) => {
      // we save the new array created with map() in a variable
      const updatedTodos = prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      // once the loop through all the items is completed, we set the new
      // array updatedTodos to be the `Todos` item in the local storage
      localStorage.setItem('Todos', JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  }

  // declare new variable for filtered Todos and use the filter()
  // method to loop over all the todos and return a new array with
  // the items meeting the conditions: if filter is set to all, return a
  // new array with all the items, unchanged;
  // if the filter is set to completed the the items has the completed property
  // set to true, include it in the array etc.
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true;
    if (filter === 'completed' && todo.completed) return true;
    if (filter === 'active' && !todo.completed) return true;
    return false;
  });

  return (
    <div className="max-w-3xl mx-auto p-4">
      <AddToDo addItem={addItemToList} />
      <Filters setFilter={setFilter} />
      {/* pass down the filters list of todos */}
      <ToDoList todos={filteredTodos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
