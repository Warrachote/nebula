// pages/index.tsx
'use client'

import React, { useState } from "react";
import { NextPage } from 'next';
import Link from 'next/link';
import DynamicComponent from './DynamicComponent';
import RangeSlider from './RangeSlider';

const DynamicSlider: NextPage = () => {
  const [componentCount, setComponentCount] = useState<number>(1);

  const handleIncrement = () => {
    setComponentCount(prevValue => prevValue + 1);
  };

  const handleDecrement = () => {
    setComponentCount(prevValue => (prevValue > 1 ? prevValue - 1 : 1));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComponentCount(Number(event.target.value));
  };

  return (
    <div className="">
        <div className="bg-violet-950 rounded-lg mt-2">
    <div className="w-full flex justify-between items-center gap-x-1">
      <div className="grow py-2 px-3">
      <input
      className="w-full p-0 bg-transparent"
      type="text"
      value={componentCount}
      onChange={handleInputChange}/>
      </div>
       <div className="flex items-center -gap-y-px divide-x divide-violet-300 border-s border-violet-300">
        <button
        type="button"
        className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-medium last:rounded-e-lg bg-violet-800 text-white hover:bg-violet-600 disabled:opacity-50 disabled:pointer-events-none"
        onClick={handleDecrement}>
        <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14"></path>
        </svg>
        </button>
        <button
        type="button"
        className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-medium last:rounded-e-lg bg-violet-800 text-white hover:bg-violet-600 disabled:opacity-50 disabled:pointer-events-none"
        onClick={handleIncrement}>
        <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14"></path>
          <path d="M12 5v14"></path>
        </svg>
        </button>
        </div>
    </div>
  </div>
  <div className='max-h-screen overflow-y-auto'>
      <div className="mt-6 w-full">
        {Array.from({ length: componentCount }).map((_, index) => (
          <DynamicComponent key={index} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default DynamicSlider;