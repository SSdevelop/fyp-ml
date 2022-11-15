import { Slider } from '@mui/material';
import React, { useState } from 'react';

const LinearRegressionsOne = () => {
    const [m, setM] = useState(0);
    const [b, setB] = useState(50);

    const handleMChange = (event, newValue) => {
        if(typeof newValue === 'number') {
            setM(newValue);
            return
        }
        setM(parseFloat(newValue));
    };

    const handleBChange = (event, newValue) => {
        if(typeof newValue === 'number') {
            setB(newValue);
            return
        }
        setB(parseFloat(newValue));
    };
    
    return (
        <div>
            <Slider 
                aria-label='value-m'
                valueLabelDisplay='auto'
                min={0}
                max={100}
                name="m"
                value={m}
                onChange={handleMChange}
                
            />
            <Slider 
                aria-label='value-b'
                valueLabelDisplay='auto'
                min={0}
                max={100}
                name="b"
                value={b}
                onChange={handleBChange}
            />

        </div>
    );
}

export default LinearRegressionsOne;