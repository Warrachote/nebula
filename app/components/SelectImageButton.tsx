'use client';
import React from 'react'
import Link from 'next/link';

interface SelectImageButton {
  title:string;
  path:string;
}

const SelectImageButton:React.FC<SelectImageButton> = ({title, path}) => {
  return (
    <Link href={path}>
    <button className="bg-transparent hover:bg-gradient-to-r hover:from-pink-300 hover:to-violet-400 text-pink-300 font-semibold hover:text-black py-2 px-4 border border-violet-500 hover:border-transparent rounded-full shadow-lg shadow-violet-400/55">
    {title}
    </button>
    </Link>
  )
}

export default SelectImageButton