

interface Props{
  handleClick: () => void;
}

const SubButton = ({handleClick}: Props) => {
  return (
    <button onClick={handleClick}>Submit</button>
  )
}

export default SubButton