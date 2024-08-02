'use client';
import React, { useState } from 'react';
import Displaylayer from './DisplayIayer';
import SelectImageButton from './SelectImageButton';

const ChangeImage = () => {
    const [stage, setStage] = useState('true');
    const [source, setSource] = useState('/Daisy.jpg');
    const [label, setLable] = useState('Swap to outline image')

    const handleChange = () => {
        if (stage === 'true') {
            setStage('false');
            setSource('/0.png');
            setLable('Swap to original image')
        } else {
            setStage('true');
            setSource('/Daisy.jpg');
            setLable('Swap to outline image')
        }
    };

    return (
        <div>
            <Displaylayer source={source}/>
            <div className='flex items-center justify-center'>
            <button onClick={handleChange} 
            className="
          absolute
          transform -translate-y-1/2
          cursor-pointer
          bg-gradient-to-r
          from-violet-300
          to-violet-400
          text-black
          font-semibold
          hover
          hover:bg-gradient-to-l
          hover:from-violet-400
          hover:to-violet-600
          hover:text-white
          py-1/2
          px-4
          mx-3
          hover:border-transparent
          rounded-full
          text-center">{label}</button>
          </div>
        </div>
    );
};

export default ChangeImage;
