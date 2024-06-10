import React, { useEffect } from 'react';
import './panel.css';

const ControlPanel = ({ onClose, onCreateBlackHole }) => {
    const handleCreateBlackHole = () => {
        onCreateBlackHole(
            document.getElementById('blackhole-mass').value,
            document.getElementById('multiplier').value
        );
    };

    useEffect(() => {
        if (window.MathJax) {
            window.MathJax.typeset();
        }
    }, []);
    return (
        <div className='panel draggable' id='control-panel'>
            <div className='tab' id='controls-header'>
                <p className='header'>
                    controls //&#32;
                    <span className='close' onClick={onClose}>
                        x
                    </span>
                </p>
            </div>
            <div className='controls-content'>
                <p className='info-controls-text'>control panel</p>
                <hr />
                <form className='inline-form'>
                    <label htmlFor='mass' className='input-label'>
                        mass:{' '}
                    </label>
                    <input
                        type='number'
                        name='mass'
                        id='blackhole-mass'
                        className='inline-input'
                        defaultValue='5.972'
                    />
                    <p className='math'>$$\times10$$</p>
                    <input
                        type='number'
                        name='multiplier'
                        id='multiplier'
                        className='inline-input'
                        defaultValue='24'
                    />
                </form>
                <div className='center-align'>
                    <button
                        type='button'
                        onClick={handleCreateBlackHole}
                        className='button'
                    >
                        submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ControlPanel;
