import React, { useState } from 'react';

const DraggablePanel = ({ children }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [initialX, setInitialX] = useState(0);
    const [initialY, setInitialY] = useState(0);
    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setOffsetY] = useState(0);

    const handleMouseDown = (event) => {
        setIsDragging(true);
        setInitialX(event.clientX - offsetX);
        setInitialY(event.clientY - offsetY);
    };

    const handleMouseMove = (event) => {
        if (isDragging) {
            setOffsetX(event.clientX - initialX);
            setOffsetY(event.clientY - initialY);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <div
            style={{ position: 'absolute', left: offsetX, top: offsetY }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            {children}
        </div>
    );
};

export default DraggablePanel;
