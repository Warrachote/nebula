import Link from 'next/link'
import CardClipboard from './components/CardClipboard'
import CardSeparate from './components/CardSeparate'
import SelectImageButton from './components/SelectImageButton';


const Home: React.FC = () => {
  return (
    <body>
      <div className='grid sm:grid-cols-12 grid-cols-1'>

        <div className='min-h-[100px] shadow sm:col-span-4 bg-gradient-to-tl from-transparent via-violet-400/30 to-transparent'>

          {/* <div className='absolute insert-0 flex items-center justify-center pointer-events-none -right-10 -bottom-20'>
       <div className='w-[500px] h-[500px] rounded-full bg-gradient-radial from-violet-400 via-transparent'></div>
       </div>
        <div className='absolute insert-0 flex items-center justify-center pointer-events-none bottom-4 -left-32'>
       <div className='w-[600px] h-[400px] bg-gradient-to-b from-black via-black/80 to-pink-600/80'></div>
        </div>
        <div className='absolute insert-0 flex items-center justify-center pointer-events-none -bottom-96 -left-32'>
       <div className='w-[600px] h-[400px] bg-gradient-to-t from-black via-black/80 to-pink-600/80'></div>
        </div> */}
          <div className='absolute insert-0 flex items-center justify-cente pointer-events-none -left-96 -top-96'>
            <div className='w-[800px] h-[800px] rounded-full bg-gradient-radial from-violet-500 via-transparent'></div>
          </div>
          <div className='relative m-4'>
            <h2 className='text-6xl text-violet-300 font-extrabold left-10 top-24'>Explore your</h2>
            <h2 className='text-6xl text-pink-200 font-extrabold left-10 top-24'>ideas</h2>

            <div className='mb-28'></div>
            <p className='text-xl text-slate-300 font-semibold left-10 top-24'>Make a 2.5D art style by separate layer
              and outline each layer of the image.
              Multi materials for each layer for more
              colorful art.</p>

            <div className='mb-10'></div>
            <SelectImageButton title="Select an image from your device" path="/workPlace" />

            <div className='mb-10'></div>
            <h2 className='text-violet-200 font-extrabold text-4xl'>Tutorial video</h2>
            <div className='mb-20'></div>

            <iframe width="500" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=IMPDNweJs6tRKEB8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>

          </div>
        </div>

        <div className='min-h-[100px] shadow sm:col-span-8 bg-gradient-to-tr from-transparent via-violet-400/30 to-transparent'>
          <div className='grid sm:grid-cols-8 gap-2 mt-10'>

            <div className='sm:col-span-4'>
              <CardClipboard title="ORIGINAL" head="Original image" description="You can chose any file from your computer
         to see what our website can do." source='/Daisy.jpg'></CardClipboard>
              <div className='m-5'></div>
              <CardClipboard title="SALIENT" head="Salient image" description="The salient will recognize the most important
        object in the image." source='/white.png'></CardClipboard>
              <div className='m-5'></div>
              <CardClipboard title="OUTLINE" head="Outline image" description="The outline can make a  specific shape
        for cut with laser cutter." source='/trace.png'></CardClipboard>

            </div>
            <div className='sm:col-span-4'>
              <CardSeparate title='SEPARATE LAYER' head='Separate image to layer' description='Chose number of layer and adjust coverage area in each layer.'></CardSeparate>
              <div className='m-5'></div>
              <CardClipboard title="SALIENT+OUTLINE" head="Perfect for laser cut" description="Salient the object in the image and outline the image.
        Perfect for laser cut a specific object." source='/Perfect.jpg'></CardClipboard>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
};

export default Home;
