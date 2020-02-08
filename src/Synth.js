import React from 'react';
import classnames from 'classnames';

import Key from './components/Key';
import OctaveControl from './components/OctaveControl';

import { soundTypes, keysToNotes } from './constants';
import { useKeysPress } from './hooks';

import './Synth.sass';

const SoundType = ({ type, active, onClick }) => (
    <div
        className={classnames('SoundType', { ActiveType: type === active })}
        onClick={() => onClick(type)}
    >
        {type}
    </div>
);

const Synth = () => {
    const [key] = useKeysPress();
    const [type, setType] = React.useState('sine');
    const [scale, setScale] = React.useState(0);

    React.useEffect(() => {
        if ('1234'.indexOf(key) >= 0) {
            setType(soundTypes['1234'.indexOf(key)]);
        } else if (key === '-') {
            setScale(scale - 1);
        } else if (key === '=') {
            setScale(scale + 1);
        }
    }, [key]);

    return (
        <div className="Container">
            <h1>react-synth</h1>
            <OctaveControl scale={scale} setScale={setScale} />
            <div>
                {soundTypes.map(t => (
                    <SoundType type={t} active={type} onClick={setType} />
                ))}
            </div>
            <div>
                {keysToNotes.map((key, index) => (
                    <Key
                        keyboardCode={key}
                        index={index}
                        scale={scale}
                        type={type}
                    />
                ))}
            </div>
            <footer>
                crafted with <span role="img">❤️</span> by{' '}
                <a href="http://borzeckid.com">borzecki</a>
            </footer>
        </div>
    );
};

export default Synth;
