import React from 'react';
import Sky from './Sky';
import Ground from './Ground';
import Tank from '../img/tank.svg';

const Canvas = () => {
    const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
    return (
        <svg
        id="history-game"
        preserveAspectRatio="xMaxYMax none"
        viewBox={viewBox}
        >
        <Sky />
        <Ground />
        <Tank />
        <circle cx={0} cy={0} r={50} />
        </svg>
     );
};

export default Canvas;