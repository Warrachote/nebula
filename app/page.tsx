import Link from 'next/link'
import CardClipboard from './components/CardClipboard'
import CardSeparate from './components/CardSeparate'
import SelectImageButton from './components/SelectImageButton';


const Home: React.FC = () => {
  return (
    <main>
      <img src='' />
      <div className='grid sm:grid-cols-12 gap-2 m-5 grid-cols-1'>
        <div className='min-h-[100px] rounded-lg shadow sm:col-span-4'>
          <div className='absolute insert-0 flex items-center justify-center pointer-events-none -right-10 -bottom-20'>
            <div className='w-[500px] h-[500px] rounded-full bg-gradient-radial from-violet-400 via-transparent'></div>
          </div>
          <div className='absolute insert-0 flex items-center justify-center pointer-events-none -bottom-28 -left-32 size-[600px]'>
            <img src='https://as2.ftcdn.net/v2/jpg/02/45/37/73/1000_F_245377357_2d74nft8lDVBjHPQPKFqWy9ibb0Pp8Ph.jpg'></img>
          </div>
          <div className='absolute insert-0 flex items-center justify-center pointer-events-none -bottom-3 -left-32'>
            <div className='w-[600px] h-[400px] bg-gradient-to-br from-black via-black/80 to-pink-600/80'></div>
          </div>
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
            <SelectImageButton
              title="Select an image from your device"
              path="/workPlace" />
            <div className='mb-10'></div>
            <h2 className='text-violet-200 font-extrabold text-4xl'>Tutorial video</h2>
            <div className='mb-20'></div>

            <iframe width="420" height="240" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=IMPDNweJs6tRKEB8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
          </div>
        </div>
        <div className='min-h-[100px] rounded-lg shadow bg-black sm:col-span-8'>
          <div className='grid sm:grid-cols-8 gap-2'>
            <div className='sm:col-span-4'>
              <CardClipboard
                title="ORIGINAL"
                head="Original image"
                description="You can chose any file from your computer to see what our website can do."
                source='/Daisy.jpg'></CardClipboard>
              <div className='m-5'></div>
              <CardClipboard
                title="SALIENT"
                head="Salient image"
                description="The salient will recognize the most important object in the image."
                source='/white.png'></CardClipboard>
              <div className='m-5'></div>
              <CardClipboard
                title="OUTLINE"
                head="Outline image"
                description="The outline can make a  specific shape for cut with laser cutter."
                source='/trace.png'></CardClipboard>
            </div>
            <div className='sm:col-span-4'>
              <CardSeparate
                title='SEPARATE LAYER'
                head='Separate image to layer'
                description='Chose number of layer and adjust coverage area in each layer.'></CardSeparate>
              <div className='m-5'></div>
              <CardClipboard
                title="SALIENT+OUTLINE"
                head="Perfect for laser cut"
                description="Salient the object in the image and outline the image. Perfect for laser cut a specific object."
                source='/Perfect.jpg'></CardClipboard>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
};

export default Home;
