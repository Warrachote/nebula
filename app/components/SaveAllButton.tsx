// app/components/SaveAllButton.tsx
'use client'
import React, { useState, useEffect } from 'react';
import { Range, getTrackBackground } from 'react-range';
import axios from 'axios';
import { useDebouce } from './Debouce';

interface SaveAllButtonInterface {
    content: string;
}

const SaveAllButton: React.FC<SaveAllButtonInterface> = ({ content }) => {
    return (
        <button className='text-white font-extrabold py-2 px-4 m-2 bg-gradient-to-t from-pink-800 to-pink-300 rounded-lg hover hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-900'>{content}</button>)
};
export default SaveAllButton;