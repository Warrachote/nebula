'use client';
import React from 'react'
import { getSessionID } from '../utils/session';
import axios from 'axios';
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { run_marigold } from '../utils/marigold';
import styles from './SelectImageButton.module.css'
import { delete_layer } from '../utils/delete_layer';

interface SelectImageButton {
    title: string;
}

const GobackButton: React.FC<SelectImageButton> = ({ title }) => {
    const router = useRouter();
    const handleClick = () => {
        router.push("/");
    }


    return (
        <div>
            <button onClick={handleClick} id={'button'}>

            </button>
            <label
                htmlFor='button'
                className="
          cursor-pointer
          bg-transparent
          hover:bg-gradient-to-r
          hover:from-pink-300
          hover:to-violet-400
          text-pink-300
          font-semibold
          hover:text-black
          py-2
          px-4
          border
          border-violet-500
          hover:border-transparent
          rounded-full
          shadow-lg
          shadow-violet-400/55
          text-center">
                {title}
            </label>
        </div>
    )
}

export default GobackButton