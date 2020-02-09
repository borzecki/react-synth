import React from 'react';
import Key from '../Key';

import { keysToNotes } from '../../constants';

const ButtonBox = ({ scale, type }) => (
    <div className="ButtonBox">
        {keysToNotes.map((key, index) => (
            <Key
                key={key}
                keyboardCode={key}
                index={index}
                scale={scale}
                type={type}
            />
        ))}
    </div>
);

export default ButtonBox;
