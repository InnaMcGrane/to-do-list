
import './App.css';
import image from './pic2.jpeg';
import image2 from './pic3.jpeg';
import { ToDoList } from "./ToDoList";

function App() {
  return (
    <div className="app">
      <div className="container">
        <img src={image} width="250px" alt="to-do-list" />
      </div>
      <h1 className="container"> To Do List</h1>
      <ToDoList />
      <div className="container">
        <img className="image1"src={image2} width="250px" alt="done" />
      </div>
    </div>
  );
}

export default App;
