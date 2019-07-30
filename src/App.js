import React,{Component} from 'react';
import Custom from './Custom.css';


class App extends Component {

  constructor(props){
    super(props);

    this.state = {

      toDoList:"", 
      toDoListArr:[]   

    }
  }
  
  updateInput(id, value){
    // update react state
    this.setState({
      [id]: value
    });
  }


  addToDoList() {
    //create todolist with uniqued id

    const toDoList = {
          id : 1 + Math.random(),
          value : this.state.toDoList.slice()
    };

    // copy of current todolist 

    const toDoListArr = [...this.state.toDoListArr];

    //add new todo to todolist

    

    toDoListArr.push(toDoList);

    // update state with new todo list and reset new todolist
    this.setState({
      toDoListArr,
      toDoList : ""
    });

  }

  deleteToDoItem(id){
    // copy current list of items
    const toDoListArr = [...this.state.toDoListArr]

    //filter out to do item being deleted

    const updatedToDOList = toDoListArr.filter(item => item.id !== id)

    this.setState({toDoListArr : updatedToDOList});
  }

  render(){
    return (
      <div className="container">
        <div className="ToDoList">
        <h1>To Do List</h1>
        <hr/>
        <input
          type = "text"
          placeholder = "Type to do list"
          value = {this.state.toDoList}
          onChange = {e => this.updateInput("toDoList", e.target.value)}
        />
        
        < button id = "add"
          onClick = {() => this.addToDoList()} 
        >
          Add
        </button>
        <hr/>
        <ul>
          {this.state.toDoListArr.map(item => { 
            return(
              <li key = {item.id} >
                        {item.value}
                        <button id="dlt"
                          onClick = {() => this.deleteToDoItem(item.id)}
                        >
                        X
                        </button>
              </li>
            )
          })}
        </ul>


        </div>
      </div>
    );
  }

}
  


export default App;
