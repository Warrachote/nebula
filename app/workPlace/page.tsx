import React from 'react'
import Checkbox from '../components/Checkbox'
import RangeSlider from '../components/RangeSlider'
import Displaylayer from '../components/DisplayIayer'
import DynamicSlider from '../components/DynamicSlider'
import WaitForAPI from '../components/WaitForAPI'
import SelectImageButton from '../components/SelectImageButton'
import SaveButton from '../components/SaveButton'

const workPlace = () => {
  return (
    <body className='w-full h-full'>
    
    <div className='grid sm:grid-cols-12 grid-cols-1 gap-1'>
      <div className='min-h-[100px] sm:col-span-4 shadow bg-gradient-to-tl from-transparent via-violet-600/30 to-transparent p-5'>
        <div className='text-violet-300 font-extrabold text-3xl mt-7'>Layer</div>
        <div className='mb-10'></div>
        <div className='text-white font-extrabold text-2xl'>Layers</div>
        <div className='mb-7'></div>
        <div className='text-slate-400 font-black text-l'>NUMBER OF LAYER</div>
        <div className='mb-2'></div>
        <DynamicSlider/>
      </div>
      <div className='min-h-[100px] shadow sm:col-span-4 bg-gradient-to-tr from-transparent via-violet-600/30 to-transparent p-5 h-full'>
        <div className='text-violet-300 font-extrabold text-3xl mt-7'>Option</div>
        <div className='mb-10'></div>
        <div className='text-white font-extrabold text-2xl'>Adjust image</div>
        <div className='mb-7'></div>
        <div className='text-slate-400 font-black text-l'>FOR DETECT SPECIFIC OBJECT</div>
        <Checkbox title='Salient' id='masked' name='masked'/>

        <div className='mb-7'></div>
        <div className='w-full h-[1px] bg-slate-400 rounded-lg opacity-50'></div>
       
        <div className='mb-7'></div>
        <div className='text-slate-400 font-black text-l'>FOR CHANGE BACKGROUND COLOR OF THE IMAGE</div>
        <Checkbox title='Black background' id='blackBackground' name='blackBackground'/>

        

        {/* <div className='mb-3'></div>
        <div className='text-white font-extrabold text-2xl'>Border</div>
        <div className='mb-3'></div>
        <div className='text-slate-400 font-black text-l'>BORDER</div>
        <RangeSlider title="All"/>
        <RangeSlider title="Top"/>
        <RangeSlider title="Left"/>
        <RangeSlider title="Right"/>
        <RangeSlider title="Bottom"/> */}
      </div>
      
      <div className='min-h-[100px] sm:col-span-4 shadow p-5 bg-gradient-to-tl from-transparent via-violet-600/30 to-transparent'>
        <div className='text-violet-300 font-extrabold text-3xl mt-7'>Preview</div>
        <div className='mb-16'></div>
        <Displaylayer source="/Daisy.jpg"/>
        <div className='mb-5'></div>
        <div className='flex items-center justify-center'>
        <SelectImageButton title='Select other image'/>
        </div>
        <div className='m-3 grid grid-cols-2 content-center'>
        <button className='text-white font-extrabold py-2 px-4 m-2 bg-gradient-to-t from-pink-800 to-pink-300 rounded-full hover hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-900'>Save this image</button>
        <button className='text-white font-extrabold py-2 px-4 m-2 bg-gradient-to-t from-violet-800 to-violet-300 rounded-full hover hover:bg-gradient-to-r hover:from-violet-500 hover:to-violet-900'>Save all image</button>
        </div>
      </div>
    </div>
    </body>
  )
}

export default workPlace