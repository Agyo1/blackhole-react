import React from 'react';

const ObjectPanel = ({ onClose, setObjectInfo }) => {
    const spawnObject = () => {
        let name = document.getElementById('object-name').value;
        let x = document.getElementById('object-x').value;
        let y = document.getElementById('object-y').value;
        let z = document.getElementById('object-z').value;
        let mass = document.getElementById('object-mass').value;

        setObjectInfo(name, x, y, z, mass);
    };

    return (
        <div className='panel draggable'>
            <div className='tab'>
                <p className='header'>
                    objects //&#32;
                    <span className='close' onClick={onClose}>
                        x
                    </span>
                </p>
            </div>
            <div className='objects-content'>
                <p className='p-text'>
                    <p className='info-controls-text'>Create an Object</p>
                    <hr />
                    <br />
                    <form>
                        <label htmlFor='name' className='input-label'>
                            name:{' '}
                        </label>
                        <input
                            type='text'
                            name='object-name'
                            id='object-name'
                            className='inline-input'
                        />
                        <br />
                        <br />
                        <label htmlFor='object-x' className='input-label'>
                            x:
                        </label>
                        <input
                            type='number'
                            name='object-x'
                            id='object-x'
                            className='inline-input'
                        />
                        <label htmlFor='object-y' className='input-label'>
                            y:
                        </label>
                        <input
                            type='number'
                            name='object-y'
                            id='object-y'
                            className='inline-input'
                        />
                        <label htmlFor='object-z' className='input-label'>
                            z:
                        </label>
                        <input
                            type='number'
                            name='object-z'
                            id='object-z'
                            className='inline-input'
                        />
                        <br />
                        <br />
                        <label htmlFor='mass' className='input-label'>
                            mass:{' '}
                        </label>
                        <input
                            type='number'
                            name='object-mass'
                            id='object-mass'
                            className='inline-input'
                        />
                        <button
                            type='button'
                            onClick={spawnObject}
                            className='button'
                        >
                            submit
                        </button>
                    </form>
                </p>
            </div>
        </div>
    );
};

export default ObjectPanel;
