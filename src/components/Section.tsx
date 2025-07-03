import React, { useState } from 'react'
import Field from './Field';
import EditButton from './EditButton';

interface Props{
  children: React.ReactNode;
  fields?: string[];
}

const Section = ({children,fields = []}:Props) => {
  const [isEdit,setIsEdit] = useState(false);

  const handleEdit = () =>{
    setIsEdit(true);
  };

  return (
    <>
    <div>{children}</div>
    {!isEdit && <EditButton setEdit={handleEdit}></EditButton>}
    <div>
      {
        fields.map((field) => (<Field title={field}></Field>))
      }
    </div>
    </>
    
    
  )
}

export default Section