import React, { useState } from 'react';

import './App.css';

import IconList from './IconList';

import ControlPanel from './panels/ControlPanel';
import InfoPanel from './panels/InfoPanel';
import MathPanel from './panels/MathPanel';
import ObjectPanel from './panels/ObjectPanel';

import DraggablePanel from './panels/DraggablePanel';

import ThreeScene from './ThreeScene';

function App() {
    const [isControlPanelOpen, setIsControlPanelOpen] = useState(true);
    const [isInfoPanelOpen, setIsInfoPanelOpen] = useState(true);
    const [isMathPanelOpen, setIsMathPanelOpen] = useState(false);
    const [isObjectPanelOpen, setIsObjectPanelOpen] = useState(false);

    const [massMultiplier, setMassMultiplier] = useState({
        mass: 5.972,
        multiplier: 24,
    });
    const [objectInfo, setObjectInfo] = useState({
        name: 'default',
        x: 10,
        y: 10,
        z: 10,
        mass: 100,
    });

    const toggleMathPanel = () => {
        setIsMathPanelOpen(!isMathPanelOpen);
    };
    const closeMathPanel = () => {
        setIsMathPanelOpen(false);
    };
    const toggleInfoPanel = () => {
        setIsInfoPanelOpen(!isInfoPanelOpen);
    };
    const closeInfoPanel = () => {
        setIsInfoPanelOpen(false);
    };
    const toggleControlPanel = () => {
        setIsControlPanelOpen(!isControlPanelOpen);
    };
    const closeControlPanel = () => {
        setIsControlPanelOpen(false);
    };
    const toggleObjectPanel = () => {
        setIsObjectPanelOpen(!isObjectPanelOpen);
    };
    const closeObjectPanel = () => {
        setIsObjectPanelOpen(false);
    };

    const createBlackhole = (mass, multiplier) => {
        setMassMultiplier({
            mass: parseFloat(mass),
            multiplier: parseFloat(multiplier),
        });
    };
    const createObject = (name, x, y, z, mass) => {
        setObjectInfo({
            name: name,
            x: x,
            y: y,
            z: z,
            mass: mass,
        });
    };
    return (
        <>
            <ThreeScene />
            <IconList
                isControlPanelOpen={isControlPanelOpen}
                toggleControlPanel={toggleControlPanel}
                isInfoPanelOpen={isInfoPanelOpen}
                toggleInfoPanel={toggleInfoPanel}
                isMathPanelOpen={isMathPanelOpen}
                toggleMathPanel={toggleMathPanel}
                isObjectPanelOpen={isObjectPanelOpen}
                toggleObjectPanel={toggleObjectPanel}
            />
            {isControlPanelOpen && (
                <DraggablePanel>
                    <ControlPanel
                        onClose={closeControlPanel}
                        onCreateBlackHole={createBlackhole}
                    />
                </DraggablePanel>
            )}
            {isInfoPanelOpen && (
                <DraggablePanel>
                    <InfoPanel onClose={closeInfoPanel} />
                </DraggablePanel>
            )}
            {isMathPanelOpen && (
                <DraggablePanel>
                    <MathPanel
                        onClose={closeMathPanel}
                        massMultiplier={massMultiplier}
                        objectInfo={objectInfo}
                    />
                </DraggablePanel>
            )}
            {isObjectPanelOpen && (
                <DraggablePanel>
                    <ObjectPanel
                        onClose={closeObjectPanel}
                        setObjectInfo={createObject}
                    />
                </DraggablePanel>
            )}
        </>
    );
}

export default App;
