import React, { useEffect, useState } from 'react';
import classnames from 'classnames';

import playSound from '../../playSound';
import { useKey } from '../../hooks';
import { octave } from '../../constants';

const blackKeys = 'wetyuop'.split('');

const Key = ({ keyboardCode, index, scale, type, message }) => {
    const isBlack = blackKeys.indexOf(keyboardCode) >= 0;
    const [mousePressed, setMousePressed] = useState(false);
    const keyPressed = useKey(keyboardCode);
    useEffect(() => {
        if (keyPressed) playSound(octave[index] * 2 ** scale, type);
    }, [keyPressed, index, scale, type]);
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
                playSound(octave[index] * 2 ** scale, type);
            }}
            onMouseUp={() => setMousePressed(false)}
        ></div>
    );
};

export default Key;
