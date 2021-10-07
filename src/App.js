import { TaskItem } from "./TaskItem";

function App() {
  return (
  <main>
    <form>
      <input type="text" placeholder="Task name"/>
      <button>Create Task</button>
    </form>
    <ul>
      <TaskItem isChecked={true} taskName="Learn React"/>
      <TaskItem isChecked={false} taskName="Learn Hooks"/>
      <TaskItem isChecked={false} taskName="Keep On"/>
    </ul>
  </main>
  );
}

export default App;
