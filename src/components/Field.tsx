import  { useState } from 'react'
import "../styles/Field.css";
import FieldInput from './FieldInput';
interface Props{
  title: string;
  initValue?: string;
  isEdit: boolean;
}

const Field = ({title, initValue="", isEdit}: Props) => {

  const [value,setValue] = useState(initValue);

  return (
    <div className="fieldDiv">
      <div className="field">{title}:</div> 
      <div>
        {!isEdit && <div>{value}</div>}
        {isEdit && <FieldInput val={value} setVal={setValue}></FieldInput>}
      </div>
      
    </div>
    
  )
}

export default Field