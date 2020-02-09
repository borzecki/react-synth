import React, { useState } from 'react';
import classnames from 'classnames';

import minus from '../../static/minus.svg';
import plus from '../../static/plus.svg';

const OctaveControl = ({ scale, setScale }) => {
    const [pushedButton, setPushedButton] = useState(null);
    return (
        <>
            <span
                className={classnames('PushButton', {
                    ActivePushButton: pushedButton === 'up'
                })}
                onMouseDown={() => {
                    setPushedButton('up');
                }}
                onMouseUp={() => {
                    setPushedButton();
                }}
                onClick={() => setScale(scale + 1)}
            >
                <img src={plus} alt="plus" />
            </span>
            <span className="OctaveControl">{scale}</span>
            <span
                className={classnames('PushButton', {
                    ActivePushButton: pushedButton === 'down'
                })}
                onMouseDown={() => {
                    setPushedButton('down');
                }}
                onMouseUp={() => {
                    setPushedButton();
                }}
                onClick={() => setScale(scale - 1)}
            >
                <img src={minus} alt="minus" />
            </span>
        </>
    );
};

export default OctaveControl;
