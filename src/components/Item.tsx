import { useState } from 'react'
import Field from './Field'
import EditButton from './EditButton';
import SubButton from './SubButton';


interface Props{
  fields: string[];
}

const Item = ({fields}: Props) => {
  const [isEdit,setIsEdit] = useState(false);
   const handleEdit = () =>{
    setIsEdit(true);
  };

  const submit = () =>{
    setIsEdit(false);
  };
  

  return (
    <>
      {!isEdit && <EditButton setEdit={handleEdit}></EditButton>}
      {isEdit && <SubButton handleClick={submit}></SubButton>}
      <div className="fields">
          {
            fields.map((field) => (<Field title={field} isEdit={isEdit}></Field>))
          }
      </div>
    </>
    
  )
}

export default Item