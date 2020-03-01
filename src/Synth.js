import React from 'react';

import NumericControl from './components/NumericControl';
import SoundTypeControl from './components/SoundTypeControl';
import ButtonBox from './components/ButtonBox';
import Footer from './components/Footer';

import { soundTypes } from './constants';
import { useKeysPress, useMedia } from './hooks';

import './Synth.sass';
import 'balloon-css';

export const SoundContext = React.createContext();
const Separator = () => <div className="Separator" />;

const Synth = () => {
    const largeSceen = useMedia('(min-width: 800px)');
    const [key] = useKeysPress();
    const [type, setType] = React.useState('triangle');
    const [octave, setOctave] = React.useState(0);
    const [duration, setDuration] = React.useState(1.5);

    // control octave and filters
    React.useEffect(() => {
        if ('1234'.indexOf(key) >= 0) {
            setType(soundTypes['1234'.indexOf(key)]);
        } else if ('-z'.indexOf(key) >= 0) {
            setOctave(Math.max(octave - 1, -4));
        } else if ('=x'.indexOf(key) >= 0) {
            setOctave(Math.min(octave + 1, 5));
        } else if ('['.indexOf(key) >= 0) {
            setDuration(Math.max(duration - 0.5, 0.5));
        } else if (']'.indexOf(key) >= 0) {
            setDuration(Math.min(duration + 0.5, 10));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [key]);

    return (
        <SoundContext.Provider value={{ octave, duration, type }}>
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
                max={10}
                increment={0.5}
                value={duration}
                setValue={setDuration}
                message="sound duration control"
            />
            <ButtonBox showMessages={largeSceen} />
            <Footer />
        </SoundContext.Provider>
    );
};

export default Synth;
