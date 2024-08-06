'use client'
import React, { useRef, useEffect, useState } from 'react'
import Checkbox from '../components/Checkbox'
import DynamicSlider from '../components/DynamicSlider'
import SelectImageButton from '../components/SelectImageButton'
import Preview from '../components/Preview'
import SaveButton from '../components/SaveButton'
import SaveAllButton from '../components/SaveAllButton'
import { getSessionID } from '../utils/session'
import styles from '../components/SelectImageButton.module.css'
import GobackButton from '../components/GobackButton'

const WorkPlace = () => {
  const [previewurl, setPreviewurl] = useState('');
  const [componentCount, setComponentCount] = useState<number>(1);
  const [sessionID, setSessionID] = useState<string | null>(null);

  useEffect(() => {
    // Retrieve the session ID from local storage
    const id = getSessionID();
    setSessionID(id);
  }, []);
  if (sessionID != null) {
    return (

      <div className='grid md:grid-cols-12 grid-cols-1 gap-1 w-full h-full'>
        <div className='min-h-[100px] sm:col-span-4 shadow bg-gradient-to-tl from-transparent via-violet-600/30 to-transparent p-5'>
          <div className='text-violet-300 font-extrabold text-3xl mt-7'>Layer</div>
          <div className='mb-10'></div>
          <div className='text-white font-extrabold text-2xl'>Layers</div>
          <div className='mb-7'></div>
          <div className='text-slate-400 font-black text-lg'>NUMBER OF LAYER</div>
          <div className='mb-2'></div>
          <DynamicSlider previewurl={previewurl} setPreviewurl={setPreviewurl} componentCount={componentCount} setComponentCount={setComponentCount} />
        </div>
        <div className='min-h-[100px] shadow sm:col-span-4 bg-gradient-to-tr from-transparent via-violet-600/30 to-transparent p-5 h-full'>
          <div className='text-violet-300 font-extrabold text-3xl mt-7'>Option</div>
          <div className='mb-10'></div>
          <div className='text-white font-extrabold text-2xl'>Adjust image</div>
          <div className='mb-7'></div>
          <div className='text-slate-400 font-black text-lg'>FOR DETECT SPECIFIC OBJECT</div>
          <Checkbox title='Salient' id='masked' name='masked' disable={true} />
          <div className='text-slate-400 font-black text-xs'>*This will not avalible for BETA release version of NEBULA</div>

          <div className='mb-7'></div>
          <div className='w-full h-[1px] bg-slate-400 rounded-lg opacity-50'></div>

          <div className='mb-7'></div>
          <div className='text-slate-400 font-black text-lg'>FOR CHANGE BACKGROUND COLOR OF THE IMAGE</div>
          <Checkbox title='Black background' id='blackBackground' name='blackBackground' disable={true} />
          <div className='text-slate-400 font-black text-xs'>*This will not avalible for BETA release version of NEBULA</div>
        </div>
        <div className='min-h-[100px] sm:col-span-4 shadow p-5 bg-gradient-to-tl from-transparent via-violet-600/30 to-transparent'>
          <div className='text-violet-300 font-extrabold text-3xl mt-7'>Preview</div>
          <div className='mb-12'></div>
          <Preview previewurl={previewurl} />
          <div className='mb-7'></div>
          <div className='flex items-center justify-center'>
            {/* <SelectImageButton title='Select other image' /> */}
            <GobackButton title={'Select other image'} />
          </div>
          <div className='mb-5'></div>
          <div className='m-3 content-center'>
            {/* <SaveButton content='Save this image' /> */}
            <SaveAllButton content='Save all image' componentCount={componentCount} sId={sessionID} />
          </div>
        </div>
      </div>
    )
  } else {
    return <div>
      {(sessionID == null) && (
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>NEBULA working for you...</p>
        </div>
      )}
      {(
        <p style={{ whiteSpace: 'pre-line' }}>
        </p>
      )}
    </div>
  }
}

export default WorkPlace