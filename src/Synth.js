import React from 'react';

import OctaveControl from './components/OctaveControl';
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
    const [scale, setScale] = React.useState(0);

    // control octave and filters
    React.useEffect(() => {
        if ('1234'.indexOf(key) >= 0) {
            setType(soundTypes['1234'.indexOf(key)]);
        } else if ('-z'.indexOf(key) >= 0) {
            setScale(scale - 1);
        } else if ('=x'.indexOf(key) >= 0) {
            setScale(scale + 1);
        }
    }, [key]);

    return (
        <>
            <SoundTypeControl active={type} onClick={setType} />
            <Separator />
            <OctaveControl scale={scale} setScale={setScale} />
            <ButtonBox scale={scale} type={type} showMessages={true} />
            <Footer />
        </>
    );
};

export default Synth;
