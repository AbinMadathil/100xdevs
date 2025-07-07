import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { CreateToDo } from './components/CreateToDo';

function App() {
  //this is a basic todo app using React, that was built for studying purposes.

  const [toDos, setToDos] = useState([
    {
      title: "Learn React",
      description: "Learn React by building a simple app", 
      completed: false
    },
    {
      title:"Learn Node",
      description: "Learn Node by building a simple backend",
      completed: false
    }
  ]);

  function AddTODo(){
  setToDos([...toDos,{
    title:"Randodm ToDo",
    description: "This is a random ToDo item",
    completed: false
  }]);
}

  return (
    <div className="App">
      <CreateToDo />
          {/* <button onClick={AddTODo}> add a random todo</button>
      {toDos.map(function(todo){ 
        return <HandleAddToDo title={todo.title} description={todo.description} />
        })} */}
    </div>
  );
}

function HandleAddToDo(props){
  return <div>
      <h1>{props.title}</h1>
      <div>{props.description}</div>
    </div>
}

export default App;
