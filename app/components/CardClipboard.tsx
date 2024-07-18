import React from 'react'
import Image from 'next/image';

interface cardProps{
    title?:string;
    head:string;
    description:string;
    source:string;
}

const CardClipboard:React.FC<cardProps> = ({title, head, description, source}) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl border border-slate-400 bg-slate-50/10">
      <div className='absolute left-1/2 transform -translate-x-1/2 -top-1 w-40 h-2 rounded-lg bg-violet-300 shadow-md shadow-violet-400'></div>
      <div className='grid grid-cols-2'>
      <div className="card-body">
        <h2 className="card-title text-white">{title}</h2>
        <h2 className='text-white'>{head}</h2>
        <p className='text-slate-400'>{description}</p>
      </div>
        <figure className='p-3'>
        <img
        src={source}
        alt="image"
        className='rounded-lg'
        />
        </figure>
      </div>
      </div>
  )
}

export default CardClipboard