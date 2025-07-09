

interface Props{
  val: string;
  setVal: (e: any) => void;

}

const FieldInput = ({val,setVal}: Props) => {


  return (
    <input type="text" value={val} onChange = {(e) => setVal(e.target.value)}/>
  )
}

export default FieldInput