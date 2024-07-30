// components/DynamicComponent.tsx
import React from 'react';
import MultiRangeSlider from './MultiRangeSlider';
import Displaylayer from './DisplayIayer';

interface DynamicComponent {
  label:number;
  index:number;
}

const DynamicComponent: React.FC<DynamicComponent> = ({label, index}) => {
  return (
    <div>
    <label className='text-violet-200 font-bold text-3xl'>Layer {label}</label>
    <Displaylayer source='/Daisy.jpg'/>
    <div className='mb-2'></div>
    <MultiRangeSlider index={index}/>
    </div>
  );
};

export default DynamicComponent;