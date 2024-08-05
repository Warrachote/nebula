'use client';
import React, { useState } from 'react';
import Displaylayer from './DisplayIayer';
import SelectImageButton from './SelectImageButton';

interface Preview {
    previewurl:string;
}

const ChangeImage: React.FC<Preview> = ({previewurl}) => {
    return (
        <div>
            <Displaylayer source={previewurl}/>
        </div>
    );
};

export default ChangeImage;
