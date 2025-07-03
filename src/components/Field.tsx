import React from 'react'

interface Props{
  title: string;
  value?: string;
}

const Field = ({title, value=""}: Props) => {
  return (
    <div>{title}: {value}</div>
  )
}

export default Field