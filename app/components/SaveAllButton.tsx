// app/components/SaveAllButton.tsx
'use client'
import React, { useState, useEffect } from 'react';
import { Range, getTrackBackground } from 'react-range';
import axios from 'axios';
import { useDebouce } from './Debouce';
import { download_all } from '../utils/download';
import { sign } from 'crypto';

interface SaveAllButtonInterface {
    content: string;
    componentCount: number;
    sId: string;
}

const SaveAllButton: React.FC<SaveAllButtonInterface> = ({ content, componentCount, sId }) => {
    const handleclick = async () => {
        console.log(componentCount)
        const s = await download_all(sId = sId, componentCount = componentCount);
        if (s) {
            console.log('Download started');
        } else {
            console.error('Download failed');
        }

    };

    return (
        <button className='text-white font-extrabold py-2 px-4 m-2 bg-gradient-to-t from-pink-800 to-pink-300 rounded-lg hover hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-900 w-full'
            onClick={handleclick}>{content}</button>)
};
export default SaveAllButton;