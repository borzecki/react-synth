import React, { useState } from 'react';
import classnames from 'classnames';

import minus from '../../static/minus.svg';
import plus from '../../static/plus.svg';

const NumericControl = ({ value, setValue, increment, message, min, max }) => {
    const [pushedButton, setPushedButton] = useState(null);
    const conditionMax = max ? value + increment <= max : true;
    const conditionMin = min ? value - increment >= min : true;
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
                onClick={() => conditionMin && setValue(value - increment)}
            >
                <img src={minus} alt="minus" />
            </span>
            <span
                aria-label={message}
                data-balloon-pos="up"
                className="OctaveControl"
            >
                {value}
            </span>
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
                onClick={() => conditionMax && setValue(value + increment)}
            >
                <img src={plus} alt="plus" />
            </span>
        </>
    );
};

export default NumericControl;
