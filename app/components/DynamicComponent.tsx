// components/DynamicComponent.tsx

import React, { useEffect, useState } from 'react';
import MultiRangeSlider from './MultiRangeSlider';
import Displaylayer from './DisplayIayer';
import { fetchImageWithFallback } from './ImageRequest';
import axios from 'axios';
import { useDebouce } from './Debouce';
import styles from './SelectImageButton.module.css'
import { make_outline } from '../utils/outline';
interface DynamicComponent {
  label: number;
  index: number;
  sId: string;
  previewurl:string;
  setPreviewurl: (url:string) => void;
}

const DynamicComponent: React.FC<DynamicComponent> = ({ label, index, sId, previewurl, setPreviewurl }) => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [sliderValues, setsliderValues] = useState<number[]>([20, 80]);
  const debouncedValues = useDebouce(sliderValues);
  const [fetch, setFetch] = useState(false);
  const [load, setload] = useState(false);
  const update_layer_image = async (debouncedValues: number[]) => {
    setload(true);
    try {
      const response = await axios.get('https://dynamic-202-239.informatik.uni-bremen.de:5000/marigold/layer',
        {
          params: {
            sessionId: String(sId),
            start: String(debouncedValues[0]),
            end: String(debouncedValues[1]),
            index: String(index)
          }
        }
      );
      console.log(response)
      await make_outline(sId, debouncedValues[1], index);
      setFetch(true);
    } catch (error) {
      console.error('Error updating slider values:', error);
      setload(false);
    }
  };
  const fetchImage = async () => {
    const url = await fetchImageWithFallback(sId, index);
    setImageUrl(url);
    setFetch(false);
    setload(false);
    setPreviewurl(url);
  };

  const changeIm = () => {
    setPreviewurl('/0.png');
  }

  useEffect(() => {
    update_layer_image(debouncedValues);

  }, [debouncedValues]);

  useEffect(() => {
    if (fetch == true) {
      fetchImage();
    }
  }, [fetch])


  return (
    <div>
      <label className='text-violet-200 font-bold text-3xl'>Layer {label}</label>
      <Displaylayer source={imageUrl} />
      <div className='mb-2'></div>
      <MultiRangeSlider
        index={index}
        sessionID={sId}
        setValues={setsliderValues}
        values={sliderValues}
        debouncedValues={debouncedValues}/>
      {/* <button onClick={changeIm}>click me</button> */}
      <div>
        {load && (
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
    </div>

  );
};

export default DynamicComponent;