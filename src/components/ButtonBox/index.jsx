import React from 'react';
import Key from '../Key';

import { keysToNotes, messages } from '../../constants';

const ButtonBox = ({ showMessages }) => (
    <div className="ButtonBox">
        {keysToNotes.map((key, index) => (
            <Key
                key={key}
                message={showMessages ? messages[index] : null}
                keyboardCode={key}
                index={index}
            />
        ))}
    </div>
);

export default ButtonBox;
