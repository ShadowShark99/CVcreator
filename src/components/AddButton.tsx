

interface Props{
  handleClick: () => void;
}

const AddButton = ({handleClick}: Props) => {
  return (
    <button onClick={handleClick}>Add</button>
  )
}

export default AddButton