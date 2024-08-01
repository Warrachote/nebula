'use client'
import React, { useState, useEffect } from 'react';
import { Range, getTrackBackground } from 'react-range';
import axios from 'axios';
import { useDebouce } from './Debouce';
import { getSessionID } from '../utils/session';

interface MultiRangeSlider {
  index:number;
}

const STEP = 1;
const MIN = 0;
const MAX = 100;

const MultiRangeSlider: React.FC<MultiRangeSlider> = ({index}) => {
  const [values, setValues] = useState<number[]>([20, 80]);
  const debouncedValues = useDebouce(values);
  const [sessionID, setSessionID] = useState<string | null>(null);


  useEffect(() => {
    // Retrieve the session ID from local storage
    const id = getSessionID();
    setSessionID(id);
  }, []);

  useEffect(() => {
    const fetchInitialValues = async () => {
           try {
        const response = await axios.get('/api/marigold/layer',
          {
            params : {
              sessionId: sessionID,
              start: MIN,
              end: MAX,
              index: {index}
            }
          }
        );
        setValues(response.data.values);
      } catch (error) {
        console.error('Error fetching initial values:', error);
      }
    };

    fetchInitialValues();
  }, []);

  // Update API when debounced values change
  useEffect(() => {
    const updateSliderValues = async () => {
      try {
        await axios.post('/api/marigold/layer', { values: debouncedValues });
      } catch (error) {
        console.error('Error updating slider values:', error);
      }
    };
    

    if (debouncedValues) {
      updateSliderValues();
    }
  }, [debouncedValues]);

  const handleInputChange = (index: number, value: string) => {
    const newValue = Math.max(MIN, Math.min(MAX, Number(value)));
    const newValues = [...values];
    newValues[index] = newValue;

    // Ensure min is always less than max
    if (newValues[0] >= newValues[1]) {
      if (index === 0) newValues[1] = newValue + 1;
      else newValues[0] = newValue - 1;
    }

    setValues(newValues);
  };

  return (
    <div className="sticky top-4 flex flex-col items-center w-full max-w-md p-4 bg-transparent rounded-md">
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="w-full h-2 rounded-md"
            style={{
              background: getTrackBackground({
                values,
                colors: ['#3F2B74', '#C4A7FF', '#3F2B74'],
                min: MIN,
                max: MAX,
              }),
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            className="w-5 h-5 bg-violet-500 rounded-full shadow"
          />
        )}
      />
      <div className="flex justify-between w-full mt-2 space-x-4">
        <div className="flex flex-col items-center">
          <input
            type="number"
            className="p-1 text-center text-violet-900 rounded-lg bg-violet-300"
            value={values[0]}
            onChange={(e) => handleInputChange(0, e.target.value)}
            min={MIN}
            max={values[1] - 1}
          />
          <span className="text-violet-200">Min</span>
        </div>
        <div className="flex flex-col items-center">
          <input
            type="number"
            className="p-1 text-center text-violet-900 rounded-lg bg-violet-300"
            value={values[1]}
            onChange={(e) => handleInputChange(1, e.target.value)}
            min={values[0] + 1}
            max={MAX}
          />
          <span className="text-violet-200">Max</span>
        </div>
      </div>
    </div>
  );
};

export default MultiRangeSlider;
