import React, { useState } from 'react'
import Field from './Field';
import EditButton from './EditButton';
import SubButton from './SubButton';
import "../styles/Section.css";
import Item from './Item';
import AddButton from './AddButton';
import DeleteButton from './DeleteButton';
 
interface Props{
  children: React.ReactNode;
  fields?: string[];
  isExpandable?: boolean;
}

const Section = ({children,fields = [], isExpandable = false}:Props) => {
  
  const [items, setItems] = useState(1);//original only 1, can move up or down
  
  const mult = [];
  for(let i = 0; i < items; i++)
  {
    mult.push(0);
  }

  const addItem = () => {
    setItems(items + 1);
  }

  const deleteItem = () => {
    setItems(items ? items - 1 : items);
  }

  return (
    <div className="section">
      
      <div>{children}</div>
      <div className="item-list">
          {
            mult.map(() => (<Item fields={fields}></Item>))
          }
        </div>
          {isExpandable && <AddButton handleClick={addItem}/>}
          {isExpandable && <DeleteButton handleClick={deleteItem}/>}
      
      
    </div>
    
    
  )
}

export default Section