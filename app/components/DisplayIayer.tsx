import React from 'react'

interface Displaylayer{
    source:string;
}

const Displaylayer:React.FC<Displaylayer> = ({source}) => {
  return (
    <div className='flex flex-col items-center my-3'>
        <img
        src={source}
        alt="image"
        className='max-w-96 border border-violet-400'
        />
    </div>
  )
}

export default Displaylayer