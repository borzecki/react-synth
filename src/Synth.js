import React from 'react';

import NumericControl from './components/NumericControl';
import SoundTypeControl from './components/SoundTypeControl';
import ButtonBox from './components/ButtonBox';
import Footer from './components/Footer';

import { soundTypes } from './constants';
import { useKeysPress } from './hooks';

import './Synth.sass';
import 'balloon-css';

const Separator = () => <div className="Separator" />;

const Synth = () => {
    const [key] = useKeysPress();
    const [type, setType] = React.useState('triangle');
    const [octave, setOctave] = React.useState(0);
    const [duration, setDuration] = React.useState(1.5);

    // control octave and filters
    React.useEffect(() => {
        if ('1234'.indexOf(key) >= 0) {
            setType(soundTypes['1234'.indexOf(key)]);
        } else if ('-z'.indexOf(key) >= 0) {
            setOctave(octave - 1);
        } else if ('=x'.indexOf(key) >= 0) {
            setOctave(octave + 1);
        }
    }, [key]);

    return (
        <>
            <SoundTypeControl active={type} onClick={setType} />
            <Separator />
            <NumericControl
                min={-4}
                max={5}
                increment={1}
                value={octave}
                setValue={setOctave}
                message="this is octave control"
            />
            <NumericControl
                min={0.5}
                increment={0.5}
                value={duration}
                setValue={setDuration}
                message="sound duration control"
            />
            <ButtonBox
                octave={octave}
                duration={duration}
                type={type}
                showMessages={true}
            />
            <Footer />
        </>
    );
};

export default Synth;
