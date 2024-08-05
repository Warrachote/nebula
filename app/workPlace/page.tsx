'use client'
import React, { useState } from 'react'
import Checkbox from '../components/Checkbox'
import DynamicSlider from '../components/DynamicSlider'
import SelectImageButton from '../components/SelectImageButton'
import Preview from '../components/Preview'
import SaveButton from '../components/SaveButton'
import SaveAllButton from '../components/SaveAllButton'

const workPlace = () => {
  const [previewurl, setPreviewurl] = useState('test')

  return (
    <div className='grid md:grid-cols-12 grid-cols-1 gap-1 w-full h-full'>
      <div className='min-h-[100px] sm:col-span-4 shadow bg-gradient-to-tl from-transparent via-violet-600/30 to-transparent p-5'>
        <div className='text-violet-300 font-extrabold text-3xl mt-7'>Layer</div>
        <div className='mb-10'></div>
        <div className='text-white font-extrabold text-2xl'>Layers</div>
        <div className='mb-7'></div>
        <div className='text-slate-400 font-black text-l'>NUMBER OF LAYER</div>
        <div className='mb-2'></div>
        <DynamicSlider previewurl={previewurl} setPreviewurl={setPreviewurl}/>
      </div>
      <div className='min-h-[100px] shadow sm:col-span-4 bg-gradient-to-tr from-transparent via-violet-600/30 to-transparent p-5 h-full'>
        <div className='text-violet-300 font-extrabold text-3xl mt-7'>Option</div>
        <div className='mb-10'></div>
        <div className='text-white font-extrabold text-2xl'>Adjust image</div>
        <div className='mb-7'></div>
        <div className='text-slate-400 font-black text-l'>FOR DETECT SPECIFIC OBJECT</div>
        <Checkbox title='Salient' id='masked' name='masked' disable={true} />

        <div className='mb-7'></div>
        <div className='w-full h-[1px] bg-slate-400 rounded-lg opacity-50'></div>

        <div className='mb-7'></div>
        <div className='text-slate-400 font-black text-l'>FOR CHANGE BACKGROUND COLOR OF THE IMAGE</div>
        <Checkbox title='Black background' id='blackBackground' name='blackBackground' disable={true} />
      </div>
      <div className='min-h-[100px] sm:col-span-4 shadow p-5 bg-gradient-to-tl from-transparent via-violet-600/30 to-transparent'>
        <div className='text-violet-300 font-extrabold text-3xl mt-7'>Preview</div>
        <div className='mb-12'></div>
        <Preview previewurl={previewurl}/>
        <div className='mb-7'></div>
        <div className='flex items-center justify-center'>
          <SelectImageButton title='Select other image' />
        </div>
        <div className='mb-5'></div>
        <div className='m-3 grid grid-cols-2 content-center'>
          <SaveButton content='Save this image' />
          <SaveAllButton content='Save all image' />
        </div>
      </div>
    </div>
  )
}

export default workPlace