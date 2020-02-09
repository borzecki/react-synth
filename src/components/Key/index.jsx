import React, { useEffect, useState } from 'react';
import classnames from 'classnames';

import playSound from '../../playSound';
import { useKey } from '../../hooks';
import { frequencies } from '../../constants';

const blackKeys = 'wetyuop'.split('');

const Key = ({ keyboardCode, index, octave, type, duration, message }) => {
    const isBlack = blackKeys.indexOf(keyboardCode) >= 0;
    const [mousePressed, setMousePressed] = useState(false);
    const keyPressed = useKey(keyboardCode);
    useEffect(() => {
        if (keyPressed)
            playSound(frequencies[index] * 2 ** octave, type, duration);
    }, [keyPressed, index, octave, type, duration]);
    return (
        <div
            aria-label={message}
            data-balloon-pos="up"
            className={classnames('Button', {
                Black: isBlack,
                Pressed: keyPressed,
                MousePressed: mousePressed
            })}
            onMouseDown={() => {
                setMousePressed(true);
                playSound(frequencies[index] * 2 ** octave, type, duration);
            }}
            onMouseUp={() => setMousePressed(false)}
        ></div>
    );
};

export default Key;
