import React from 'react';
import Key from '../Key';

import { keysToNotes, messages } from '../../constants';

const ButtonBox = ({ octave, duration, type, showMessages }) => (
    <div className="ButtonBox">
        {keysToNotes.map((key, index) => (
            <Key
                key={key}
                message={showMessages && messages[index]}
                keyboardCode={key}
                index={index}
                duration={duration}
                octave={octave}
                type={type}
            />
        ))}
    </div>
);

export default ButtonBox;
