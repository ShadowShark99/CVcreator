

interface Props{
  setEdit: () => void;
}

const EditButton = ({setEdit}: Props) => {
  return (
    <button onClick={setEdit}>Edit</button>
  )
}

export default EditButton