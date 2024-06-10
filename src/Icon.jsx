import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ControlPanel from './panels/ControlPanel';
// Import other panel components here

const Icon = ({ icon, name, isActive, isSpinning, onClick }) => {
    const [isPanelOpen, setIsPanelOpen] = useState(false);

    const openPanel = () => {
        setIsPanelOpen(true);
    };

    const closePanel = () => {
        setIsPanelOpen(false);
    };
    const createBlackHole = () => {
        console.log('created black hole');
    };
    // You can define similar functions for other panels

    return (
        <>
            <li
                className={`icon ${isActive ? 'active' : ''}`}
                onClick={onClick}
            >
                <FontAwesomeIcon
                    icon={icon}
                    className={isSpinning ? 'fa-spin' : ''}
                />
                <div className='icon-tooltip'>{name}</div>
            </li>
        </>
    );
};

export default Icon;
