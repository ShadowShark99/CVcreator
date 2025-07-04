import React from 'react'

interface Props{
  handleClick: () => void;
}

const DeleteButton = ({handleClick}: Props) => {
  return (
    <button onClick={handleClick}>Delete</button>
  )
}

export default DeleteButton