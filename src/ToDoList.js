import { Component } from "react";
import icon from "./pic1.jpeg";

export class ToDoList extends Component {
  state = {
    userInput: "",
    list: [],
  };

  onChangeEvent(e) {
    this.setState({ userInput: e });
  
  }

  addItem(input) {
    if (input === '') {
      alert("Enter your to-do list ");
    } else {
      let listArray = this.state.list;
      listArray.push(input);
      this.setState({ list: listArray, userInput: '' });
    }
  }
  crossedWord(event) {
    const li = event.target;
    li.classList.toggle("crossed");
  }

  deleteItem() {
    let listArray = this.state.list;
    listArray = [];
    this.setState({ list: listArray });
  }
   onFormSubmit(e){
    e.preventDefault();
}


  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="container">
            <input
              type="text"
              placeholder="What are you planning on doing this week?"
              onChange={(e) => {
                this.onChangeEvent(e.target.value);
              }}
              value={this.state.userInput}
            />
          </div>
          <div className="container">
            <button
              onClick={() => this.addItem(this.state.userInput)}
              className="btn-add"
            >
              Add
            </button>
          </div>
          <ul>
            {this.state.list.map((item, index) => (
              <li onClick={this.crossedWord} key={index} alt ='done'>
                <img src={icon} width="25px" />
                {item}{" "}
              </li>
            ))}
          </ul>
          <div className="container">
            <button onClick={() => this.deleteItem()} className="btn-delete">
              Delete
            </button>
          </div>
        </form>
      </div>
    );
  }
}
