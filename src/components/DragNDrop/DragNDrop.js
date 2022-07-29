import React, { useState, useRef } from 'react';
import '../DragNDrop/DragNDrop.css'

export default function DragNdrop(props){

  let draggedItem = null;
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [listItem,setList] = useState(['Item45','Item','Item43','Item','Item','Item']);

  const dragStart = (e, position)=> {
    dragItem.current =position;
    setTimeout(function() {
        dragItem.style.display = 'none';
    }, 0)
  };
  const dragEnter = (e,position)=>{
    dragOverItem.current=position;
    setTimeout(function(){
      dragItem.style.backgroundColor = 'rgba(0,0,0,0.2)';
      dragOverItem.style.backgroundColor = 'rgba(0,2,3,0.2)';
    })
  }
  const drop = (e) => {
    const copyItems = [...listItem];
    const dragItemContent = copyItems[dragItem.current];
    setTimeout(function() {
        dragItem.style.display = 'block';
        dragItem = null;
      }, 0)
    copyItems.splice(dragItem.current, 1);
    copyItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setList(copyItems);
  }
  
  function addNew() {
    setList(prev => [...listItem, 'Item'])
  }

  return (
<>
    {
    listItem &&
    listItem.map((item, index) => (
      <div className = "list">
        <div className="list-item"
            onDragStart={(e) => dragStart(e, index)}
            onDragEnter={(e) => dragEnter(e, index)}
            onDragEnd={drop}
            key={index}
            draggable>
            {item}
            <button className="btn-add"  onClick={addNew}> Add New</button>
        </div>
      </div>
      ))}
  </>
  );
}

// onClick="addNew"