import React, { useState } from 'react';
import Icon from './Icon';
import {
    faCog,
    faMap,
    faSquareRootVariable,
    faInfo,
    faCube,
} from '@fortawesome/free-solid-svg-icons';
import { faMap as farMap } from '@fortawesome/free-regular-svg-icons'; // Font Awesome regular icons
import './IconList.css'; // Import CSS file for styling

const IconList = ({
    isControlPanelOpen,
    toggleControlPanel,
    isInfoPanelOpen,
    toggleInfoPanel,
    isMathPanelOpen,
    toggleMathPanel,
    isObjectPanelOpen,
    toggleObjectPanel,
}) => {
    return (
        <ul className='icons'>
            <Icon
                icon={faCog}
                name='<< controls'
                isActive={isControlPanelOpen}
                isSpinning={isControlPanelOpen}
                onClick={toggleControlPanel}
            />
            <Icon icon={farMap} name='<< penrose diagram' isActive={false} />
            <Icon
                icon={faSquareRootVariable}
                name='<< math'
                isActive={isMathPanelOpen}
                onClick={toggleMathPanel}
            />
            <Icon
                icon={faInfo}
                name='<< info'
                isActive={isInfoPanelOpen}
                onClick={toggleInfoPanel}
            />
            <Icon
                icon={faCube}
                name='<< object spawner'
                onClick={toggleObjectPanel}
                isActive={isObjectPanelOpen}
            />
        </ul>
    );
};

export default IconList;
