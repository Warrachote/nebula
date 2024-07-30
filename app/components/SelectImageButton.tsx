'use client';
import React from 'react'
import { getSessionID } from '../utils/session';
import axios from 'axios';
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { run_marigold } from '../utils/marigold';
import styles from './SelectImageButton.module.css'

interface SelectImageButton {
  title: string;
}

const SelectImageButton: React.FC<SelectImageButton> = ({title}) => {
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
      console.log('select file is null')
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
      const response = await axios.post(`api/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },

      });
      setMessage('File uploaded successfully');
      await run_marigold(sessionID);

    } catch (error) {
      setMessage('Error uploading file');
      console.error('Error uploading file:', error);
    } finally {
      setUploading(false);
      router.push('/workPlace');
    }
  };
  return (
    <div>
      <input
        type='file'
        id="file-upload"
        style={{display: 'none'}}
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
          {message}
        </p>
      )}
    </div>
  )
}

export default SelectImageButton