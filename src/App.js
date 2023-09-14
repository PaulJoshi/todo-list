import { useState } from 'react'
import './App.css';
import Card from './components/Card';
import Input from './components/Input';

const initialTasks = [
  {
    id: 0,
    text: "This is my first task",
  },
  {
    id: 1,
    text: "This is second task",
  },
  {
    id: 2,
    text: "Learn React",
  }
]

function App() {

  const [tasks, setTasks] = useState(initialTasks)

  const addTaskHandler = (enteredTask) => {
    setTasks(previousTasks => [
      ...previousTasks,
      {
        id: Math.random(),
        text: enteredTask,
      }
    ])
  }

  const deleteTaskHandler = (taskId) => {
    setTasks(previousTasks => previousTasks.filter(item => item.id !== taskId))
  }

  return (
    <div className="App">

      <header>
        <h1>My React App</h1>
        <h2>This is my first React App</h2>
      </header>

      <main>

        <div id="tasks">

          <Input onAddTask={addTaskHandler} />
          {
            tasks.map(item => (
              <Card key={item.id} task={item} onDeleteTask={deleteTaskHandler} />
            ))
          }
        </div>

      </main>

    </div>
  );
}

export default App;
