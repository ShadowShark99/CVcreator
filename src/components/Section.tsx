import React from 'react'
import Field from './Field';

interface Props{
  title: string;
  fields?: string[];
}

const Section = ({title,fields = []}:Props) => {
  return (
    <>
    <div>{title}</div>
    <div>
      {
        fields.map((field) => (<Field title={field}></Field>))
      }
    </div>
    </>
    
    
  )
}

export default Section