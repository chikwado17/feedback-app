import React from 'react';
import spinner  from '../assets/spinner.gif';

const Spinner = () => {
    return (
        <img src={spinner} alt='loading' style={{width:'100px', display: 'block', margin: 'auto' }} />
    )
}

export default Spinner;
