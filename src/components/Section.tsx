import React from 'react'

interface Props{
  title: string;
  fields?: string[];
}

const Section = ({title,fields}:Props) => {
  return (
    <div>{title}</div>
  )
}

export default Section