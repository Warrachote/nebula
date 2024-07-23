import React from 'react'

interface Checkbox{
    title:string;
    id:string;
    name:string;
}

const Checkbox:React.FC<Checkbox> = ({title, id, name}) => {
  return (
    <div className="form-control ps-4 rounde mt-2 mr-5 rounded-lg bg-violet-700 hover:bg-violet-900 ">
       <label className="label cursor-pointer">
       <input id={id} type="checkbox" name={name} className="w-4 h-4 border-2 border-violet-300 radio checkbox-md checked:bg-violet-200"/>
       <span className="w-full py-2 ms-2 text-xl font-medium text-white">{title}</span>
       </label>
    </div>
  )
}

export default Checkbox