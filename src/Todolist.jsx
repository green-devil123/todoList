import React from 'react';

const ToDoList = (props)=>{
    const deleteItem = ()=>{
        props.onSelect(props.id)
    }
    return (
        <div className="todo_style" key={props.key} id={props.id}>
            {/* <i className="fa fa-times" aria-hidden="true"
                onClick={deleteItem}
            /> */}
            <i className="fa fa-times" aria-hidden="true"
                onClick={()=>{
                    props.onSelect(props.id)
                }}
            />
            <li>{props.text}</li>
        </div>
    )
}
export  default ToDoList;