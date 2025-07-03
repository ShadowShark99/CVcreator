import React from 'react'
import "../styles/Fields.css";
interface Props{
  title: string;
  value?: string;
  isExpandable?: boolean;
}

const Field = ({title, value="", isExpandable=false}: Props) => {
  return (
    <div className="field">{title}: {value}</div>
  )
}

export default Field