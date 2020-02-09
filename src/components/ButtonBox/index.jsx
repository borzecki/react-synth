import React from 'react';
import Key from '../Key';

import { keysToNotes, messages } from '../../constants';

const ButtonBox = ({ scale, type, showMessages }) => (
    <div className="ButtonBox">
        {keysToNotes.map((key, index) => (
            <Key
                key={key}
                message={showMessages && messages[index]}
                keyboardCode={key}
                index={index}
                scale={scale}
                type={type}
            />
        ))}
    </div>
);

export default ButtonBox;
