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

const SelectImageButton: React.FC<SelectImageButton> = ({ title }) => {
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');
  const [sessionID, setSessionID] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Retrieve the session ID from local storage
    const id = getSessionID();
    setSessionID(id);
  }, []);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    console.log('Change detect');
    if (file) {
      console.log('Invoking upload')
      await handleSubmit(file);
    } else {
      console.log('selected file is null')
    }

  };

  const handleSubmit = async (file: File) => {
    console.log(`Invoked upload ${file}`)
    if (!file || !sessionID) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('sessionId', sessionID);

    setUploading(true);
    setMessage('');

    try {
      const response = await axios.post(`https://dynamic-202-239.informatik.uni-bremen.de:5000/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },

      });
      console.log(response);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
    try {
      await run_marigold(sessionID);
    } catch (error) {
      console.error('Error running model:', error);
    }
    try {
      await delete_layer(sessionID);
      setUploading(false);
      router.push("/WorkPlace")
    } catch (error) {
      console.error('Error deleting layer:', error);
    }


  };
  return (
    <div>
      <input
        type='file'
        id="file-upload"
        style={{ display: 'none' }}
        disabled={uploading}
        onChange={handleFileChange}
        accept='.jpg,.jpeg,.png'
      >
      </input>
      <label
        htmlFor="file-upload"
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
      {uploading && (
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>NEBULA working for you...</p>
        </div>
      )}
      {message && (
        <p style={{ whiteSpace: 'pre-line' }}>
        </p>
      )}
    </div>
  )
}

export default SelectImageButton