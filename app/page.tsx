import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import selectImageButton from './components/selectImage/selectImageButton'

export default function Home() {
  return (
   <main>
    <body>
      <div className='grid sm:grid-cols-10 gap-2 m-4 grid-cols-1'>
      <div className='min-h-[100px] rounded-lg shadow sm:col-span-3'>
      <div className=''></div>
      <div className='text-6xl text-violet-300 font-extrabold left-10 top-24'>Explore your</div>
      <div className='text-6xl text-pink-200 font-extrabold left-10 top-24'>ideas</div>
      <div className='mb-48'></div>
      <div className='text-xl text-slate-300 font-semibold left-10 top-24'>Make a 2.5D art style by separate layer 
      and outline each layer of the image.
      Multi materials for each layer for more
      colorful art.</div>
      <div className='mb-20'></div>
      <button className="bg-transparent hover:bg-gradient-to-r from-pink-300 via-purple-400 to-purple-600 text-pink-300 font-semibold hover:text-black py-2 px-4 border border-violet-500 hover:border-transparent rounded-full shadow-lg shadow-violet-400/55">
      Select an image from your device
      </button>
      </div>
      <div className='min-h-[100px] rounded-lg shadow bg-yellow-100 sm:col-span-7'>
      <div className='text-6xl text-violet-400 font-extrabold left-10 top-24'>ideas</div>
      <div className='text-6xl text-violet-300 font-extrabold left-9 top-24'>ideas</div>
      </div>
      </div>
    </body>
  </main>
  )
}
