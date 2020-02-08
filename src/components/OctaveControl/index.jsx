import React from 'react';

const OctaveControl = ({ scale, setScale }) => {
    return (
        <div>
            <span className="OctaveControl" onClick={() => setScale(scale - 1)}>
                -
            </span>
            <span className="OctaveControl">{scale}</span>
            <span className="OctaveControl" onClick={() => setScale(scale + 1)}>
                +
            </span>
        </div>
    );
};

export default OctaveControl;
