import React, { useEffect, useState } from 'react';
import classnames from 'classnames';

import playSound from '../../playSound';
import { useKey } from '../../hooks';
import { notes, octave } from '../../constants';

const blackKeys = 'wetyu'.split('');

const Key = ({ keyboardCode, index, scale, type }) => {
    const isBlack = blackKeys.indexOf(keyboardCode) >= 0;
    const [depressed, setDepressed] = useState(false);
    const keyPressed = useKey(keyboardCode);
    useEffect(() => {
        if (keyPressed) playSound(octave[index] * 2 ** scale, type);
    }, [keyPressed, index, scale, type]);
    return (
        <div
            className={classnames('Button', {
                Black: isBlack,
                Pressed: keyPressed || depressed
            })}
            onMouseDown={() => {
                setDepressed(true);
                playSound(octave[index] * 2 ** scale, type);
            }}
            onMouseUp={() => setDepressed(false)}
        >
            {notes[index]}
        </div>
    );
};

export default Key;
