import React, { useEffect } from 'react';
import classnames from 'classnames';

import playSound from '../../playSound';
import { useKey } from '../../hooks';
import { notes, octave } from '../../constants';

const blackKeys = 'wetyu'.split('');

const Key = ({ keyboardCode, index, scale, type }) => {
    const isBlack = blackKeys.indexOf(keyboardCode) >= 0;

    const hook = useKey(keyboardCode);
    useEffect(() => {
        if (hook) playSound(octave[index] * 2 ** scale, type);
    }, [hook, index, scale, type]);
    return (
        <div
            className={classnames('Button', {
                Black: isBlack,
                Pressed: hook
            })}
            onClick={() => playSound(octave[index] * 2 ** scale, type)}
        >
            {notes[index]}
        </div>
    );
};

export default Key;
