import React from 'react'
import Field from './Field';

interface Props{
  children: React.ReactNode;
  fields?: string[];
}

const Section = ({children,fields = []}:Props) => {
  return (
    <>
    <div>{children}</div>
    <div>
      {
        fields.map((field) => (<Field title={field}></Field>))
      }
    </div>
    </>
    
    
  )
}

export default Section