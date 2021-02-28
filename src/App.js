import React,{useState} from 'react';
import ToDoList from './Todolist';

const App = ()=>{
  const [inputList,setInputList] = useState('');
  const [Items, setItems] = useState([]) 
  const inputEvent = (e)=>{
    setInputList(e.target.value);
  }

  const listOfItem =()=>{
    setItems((oldItems)=>{
      return [...oldItems,inputList];
    });
    setInputList('');
  }
  const deleteItem =(id)=>{
    console.log("id=",id);
    setItems((oldItems)=>{
      return oldItems.filter((ele,index)=>{
        return id !== index;
      })
    })
  }
  
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br/>
          <h1>ToDo List</h1>
          <br/>
          <input type="text" placeholder="Add a items" value={inputList}
          onChange={inputEvent}/>
          <button type="button" onClick={listOfItem}> + </button>

          <ol>
            {
              Items.map((ele,index,arr)=>{
                return <ToDoList text={ele}
                id={index} key={index} onSelect ={deleteItem} />
              })
            }
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;