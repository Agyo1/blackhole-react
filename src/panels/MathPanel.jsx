import React, { useEffect } from 'react';

import { SchwarzschildBlackHole } from '../blackholes';

const MathPanel = ({ onClose, massMultiplier, objectInfo }) => {
    const { mass, multiplier } = massMultiplier;
    const { name, x, y, z, objMass } = objectInfo;

    let blackhole = new SchwarzschildBlackHole(mass * Math.pow(10, multiplier));

    useEffect(() => {
        if (window.MathJax) {
            window.MathJax.typeset();
        }
    }, []);
    return (
        <div className='panel draggable'>
            <div className='tab'>
                <p className='header' id='math-header'>
                    math //&#32;
                    <span className='close' onClick={onClose}>
                        x
                    </span>
                </p>
            </div>
            <div className='math-content'>
                {blackhole && (
                    <>
                        <p className='p-text'>
                            Schwarszchild Radius:{' '}
                            <span id='radius-output'>
                                {blackhole.roundScientificNumber(
                                    blackhole.calcSchwarzschildRadius(),
                                    3
                                )}{' '}
                                km
                            </span>
                        </p>
                        <p className='p-text'>
                            Innermost Stable Circular Orbit:{' '}
                            <p className='math'>
                                \(r=\){' '}
                                <span id='isco-output'>
                                    {blackhole.calcISCO()} km
                                </span>
                            </p>
                        </p>
                        <p className='p-text'>Distance to {name}: </p>
                    </>
                )}
            </div>
        </div>
    );
};

export default MathPanel;
