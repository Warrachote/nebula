// app/components/SaveButton.tsx
'use client'
import React, { useState, useEffect } from 'react';
import { Range, getTrackBackground } from 'react-range';
import axios from 'axios';
import { useDebouce } from './Debouce';


interface SaveButtonInterface {
    content: string;
}

const SaveButton: React.FC<SaveButtonInterface> = ({ content }) => {
    return (
        <button className='text-white font-extrabold py-2 px-4 m-2 bg-gradient-to-t from-violet-800 to-violet-300 rounded-lg hover hover:bg-gradient-to-r hover:from-violet-500 hover:to-violet-900'>{content}</button>)
};
export default SaveButton;