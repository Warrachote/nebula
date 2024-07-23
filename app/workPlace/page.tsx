import React from 'react'
import Checkbox from '../components/Checkbox'
import RangeSlider from '../components/RangeSlider'
import SelectNumber from '../components/SelectNumber'
import Link from 'next/link'
import SelectImageButton from '../components/SelectImageButton'
import Displaylayer from '../components/DisplayIayer'
import MultiRangeSlider from '../components/MultiRangeSlider'
import Test from '../components/DynamicSlider'
import DynamicComponent from '../components/DynamicComponent'
import DynamicSlider from '../components/DynamicSlider'

const workPlace = () => {
  return (
    <div>
    <div className='grid sm:grid-cols-12 gap-2 m-7'>
      <div className='min-h-[100px] shadow sm:col-span-4 p-5 bg-transparent'>
        <div className='text-violet-300 font-extrabold text-3xl'>Layer</div>
        <div className='mb-10'></div>
        <div className='text-white font-extrabold text-2xl'>Layers</div>
        <div className='mb-7'></div>
        <div className='text-slate-500 font-black text-l'>NUMBER OF LAYER</div>
        <div className='mb-2'></div>
        <DynamicSlider/>
        <div className='h-96 w-96'></div>
        <div className='h-96 w-96'></div>
        <div className='h-96 w-5'></div>
        <div className='h-96 w-5'></div>
      </div>
      
      <div className='min-h-[100px] shadow sm:col-span-4 bg-gradient-to-tr from-transparent via-violet-400/20 to-transparent p-5 h-full'>
        <div className='text-violet-300 font-extrabold text-3xl'>Option</div>
        <div className='mb-10'></div>
        <div className='text-white font-extrabold text-2xl'>Adjust image</div>
        <div className='mb-7'></div>
        <div className='text-slate-400 font-black text-l'>FOR MASKED IMAGE</div>

        <Checkbox title='Salient' id='masked' name='masked'/>
        <Checkbox title='White' id='masked' name='masked'/>

        <div className='mb-7'></div>
        <div className='text-slate-400 font-black text-l'>FOR OUTLINE THE IMAGE</div>
        <Checkbox title='Outline' id='outline' name='outline'/>

        <div className='mb-7'></div>
        <div className='w-full h-[1px] bg-slate-400 rounded-lg opacity-50'></div>

        <div className='mb-3'></div>
        <div className='text-white font-extrabold text-2xl'>Border</div>
        <div className='mb-3'></div>
        <div className='text-slate-400 font-black text-l'>BORDER</div>
        <RangeSlider title="All"/>
        <RangeSlider title="Top"/>
        <RangeSlider title="Left"/>
        <RangeSlider title="Right"/>
        <RangeSlider title="Bottom"/>
      </div>
      
      <div className='min-h-[100px] shadow sm:col-span-4 p-5'>
        <div className='text-violet-300 font-extrabold text-3xl'>Preview</div>
        <div className='mb-16'></div>
        <Displaylayer source="/Daisy.jpg"/>
        <div className='mb-5'></div>
        <div className='flex items-center justify-center'>
        <SelectImageButton title="Select other image" path=""/>
        </div>
        <div className='m-3 grid grid-cols-2 content-center'>
        <button className='text-white font-extrabold py-2 px-4 m-2 bg-gradient-to-t from-pink-800 to-pink-300 rounded-full hover hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-900'>Save this image</button>
        <button className='text-white font-extrabold py-2 px-4 m-2 bg-gradient-to-t from-violet-800 to-violet-300 rounded-full hover hover:bg-gradient-to-r hover:from-violet-500 hover:to-violet-900'>Save all image</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default workPlace