import React, { useState } from 'react'
import "../styles/Fields.css";
import FieldInput from './FieldInput';
interface Props{
  title: string;
  initValue?: string;
  isExpandable?: boolean;
  isEdit: boolean;
}

const Field = ({title, initValue="", isExpandable=false, isEdit}: Props) => {

  const [value,setValue] = useState(initValue);

  return (
    <>
      <div className="field">{title}:</div> 
      {!isEdit && <div>{value}</div>}
      {isEdit && <FieldInput val={value} setVal={setValue}></FieldInput>}
    </>
    
  )
}

export default Field