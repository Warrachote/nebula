'use client'
import React from 'react';
import { useState, ChangeEvent } from 'react';

interface RangeSliderProps {
  title: string;
}

const RangeSlider: React.FC<RangeSliderProps> = ({ title }) => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.max(0, Math.min(100, Number(event.target.value)));
    setValue(newValue);
  };

  return (
    <div className="grid grid-cols-6 gap-2 h-10">
      <div className="min-h-[100px] rounded-lg shadow sm:col-span-1">
        <p className="mt-2 text-violet-300">{title}</p>
      </div>
      <div className="min-h-[100px] rounded-lg shadow sm:col-span-3 pt-2">
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={handleChange}
          className="w-full bg-violet-200 appearance-none cursor-pointer range [--range-shdw:#664EAE] range-xs"
        />
      </div>
      <div className="min-h-[100px] ml-12 rounded-lg shadow sm:col-span-1">
        <input
          type="number"
          value={value}
          onChange={handleInputChange}
          className="text-center p-1 text-violet-900 rounded-full bg-violet-300"
          min="0"
          max="100"
        />
      </div>
    </div>
  );
};

export default RangeSlider;
