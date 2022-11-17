import { Grid, Slider } from '@mui/material';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import Graphviz from 'graphviz-react';
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
        // console.log(newValue);
        if(typeof newValue === 'number') {
            setB(newValue);
            return
        }
        setB(parseFloat(newValue));
    };

    const DOT_STRING = `digraph {
        node [style="rounded, filled", shape=polygon]
        rankdir="LR"
        forcelabels=true;
        Input[color="#1E441E", shape="cds", fontcolor="#D0DA19", fontsize="", height="1", width="0.9"]
        "${m}x" [color="#1E441E", sides=5, fontcolor="#D0DA19", fontsize="28", height="1", width="0.9"]
        "+${b}" [color="#1E441E", sides=4, fontcolor="#D0DA19", fontsize="28", height="1", width="0.9"]
        Output [color="#1E441E", shape="doublecircle", fontcolor="#D0DA19"]
        Input -> "${m}x"; 
        "${m}x"-> "+${b}"; 
        "+${b}"-> Output;
    }`
    
    return (
        <Grid container spacing={5} justifyContent='center' alignItems='center'>
            <Grid item xs={12} sm={6}>
                <Slider 
                    aria-label='value-m'
                    valueLabelDisplay='auto'
                    min={0}
                    max={100}
                    name="m"
                    value={m}
                    onChange={handleMChange}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <Slider 
                    aria-label='value-b'
                    valueLabelDisplay='auto'
                    min={0}
                    max={100}
                    name="b"
                    value={b}
                    onChange={handleBChange}
                />
            </Grid>
            <Grid item xs={12}>
                <MathJaxContext>
                    <MathJax style={{textAlign: 'center'}}>{`y = ${m}x + ${b}`}</MathJax>
                </MathJaxContext>
            </Grid>
            <Grid item xs={12} align='center'>
                <Graphviz dot={DOT_STRING} options={{fit: true, width: '40%', height: 'auto'}} />
            </Grid>
        </Grid>
    );
}

export default LinearRegressionsOne;