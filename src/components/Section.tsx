import React, { useState } from 'react'
import Field from './Field';
import EditButton from './EditButton';
import SubButton from './SubButton';

interface Props{
  children: React.ReactNode;
  fields?: string[];
}

const Section = ({children,fields = []}:Props) => {
  const [isEdit,setIsEdit] = useState(false);

  const handleEdit = () =>{
    setIsEdit(true);
  };

  const submit = () =>{
    setIsEdit(false);
  };

  return (
    <>
    <div>{children}</div>
    {!isEdit && <EditButton setEdit={handleEdit}></EditButton>}
    {isEdit && <SubButton handleClick={submit}></SubButton>}
    <div>
      {
        fields.map((field) => (<Field title={field} isEdit={isEdit}></Field>))
      }
    </div>
    </>
    
    
  )
}

export default Section