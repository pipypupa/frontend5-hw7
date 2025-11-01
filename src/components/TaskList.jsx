import { Component } from "react";
import "../components/TaskList.css";

class TaskList extends Component {
  static tasks = [
    { id: 1, text: "Вивчити React" },
    { id: 2, text: "Створити компонент" },
    { id: 3, text: "Протестувати додаток" },
  ];

  addTask = () => {
    const newText = prompt("Введіть нове завдання:");
    if (newText) {
      const newTask = {
        id: Date.now(),
        text: newText,
      };
      TaskList.tasks.push(newTask);
      this.forceUpdate();
    }
  };

  deleteTask = (id) => {
    TaskList.tasks = TaskList.tasks.filter((task) => task.id !== id);
    this.forceUpdate();
  };

  render() {
    return (
      <div className="task-list">
        <h2>Список завдань</h2>
        <ul>
          {TaskList.tasks.map((task) => (
            <li key={task.id}>
              <span>{task.text}</span>
              <button onClick={() => this.deleteTask(task.id)}>Видалити</button>
            </li>
          ))}
        </ul>
        <button className="add-btn" onClick={this.addTask}>
          Додати завдання
        </button>
      </div>
    );
  }
}

export default TaskList;
