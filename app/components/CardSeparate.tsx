import React from 'react'

interface cardProps{
    title?:string;
    head:string;
    description:string;
    // image?:string;
}

const CardSeparate:React.FC<cardProps> = ({title,head,description}) => {
  return (
    <div className="card bg-base-100 shadow-xl border border-slate-400 bg-slate-50/10">
      <div className='absolute left-1/2 transform -translate-x-1/2 -top-1 w-40 h-2 rounded-lg bg-violet-300 shadow-md shadow-violet-400'></div>
      <div className="card-body">
        <h2 className="card-title text-white">{title}</h2>
        <h2 className='text-white'>{head}</h2>
        <p className='text-slate-400'>{description}</p>
      </div>
      <div className='grid sm:grid-cols-2'>
        <div>
        <figure className='p-3'>
        <img
        src="/0.png"
        alt="Movie"/>
        </figure>
        <figure className='p-3'>
        <img
        src="/2.png"
        alt="Movie"/>
        </figure>
        </div>
        <div>
        <figure className='p-3'>
        <img
        src="/1.png"
        alt="Movie"/>
        </figure>
        <figure className='p-3'>
        <img
        src="/3.png"
        alt="Movie"/>
        </figure>
        </div>
      </div>
      </div>
  )
}

export default CardSeparate