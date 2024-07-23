// components/DynamicComponent.tsx
import React from 'react';
import MultiRangeSlider from './MultiRangeSlider';
import Displaylayer from './DisplayIayer';

const DynamicComponent: React.FC = () => {
  return (
    <div>
    <Displaylayer source='/Daisy.jpg'/>
    <div className='mb-2'></div>
    <MultiRangeSlider/>
    </div>
  );
};

export default DynamicComponent;