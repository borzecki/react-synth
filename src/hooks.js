import { useState, useEffect } from 'react';

export const useSequence = () => {
    const [sequence, setSequence] = useState(new Set([]));

    const toggleSequence = (index, value) => {
        if (value) {
            setSequence(sequence.add(index));
        } else {
            sequence.delete(index);
            setSequence(sequence);
        }
    };
    return [sequence, toggleSequence];
};

export const useKey = targetKey => {
    const [pressed, setPressed] = useState(false);
    const onKeyDown = ({ key }) => {
        if (targetKey === key) setPressed(true);
    };
    const onKeyUp = ({ key }) => {
        if (targetKey === key) setPressed(false);
    };
    useEffect(() => {
        window.addEventListener('keydown', onKeyDown);
        window.addEventListener('keyup', onKeyUp);

        return () => {
            window.removeEventListener('keydown', onKeyDown);
            window.removeEventListener('keyup', onKeyUp);
        };
    }, []);
    return pressed;
};

export const useKeysPress = () => {
    const [key, setKey] = useState();
    const [keysPressed, setKeyPressed] = useState(new Set([]));
    const onKeyDown = e => {
        setKey(e.key);
        setKeyPressed(keysPressed.add(e.key));
    };
    const onKeyUp = e => {
        setKey(null);
        keysPressed.delete(e.key);
        setKeyPressed(keysPressed);
    };
    useEffect(() => {
        window.addEventListener('keydown', onKeyDown);
        window.addEventListener('keyup', onKeyUp);

        return () => {
            window.removeEventListener('keydown', onKeyDown);
            window.removeEventListener('keyup', onKeyUp);
        };
    }, []);
    return [key, keysPressed];
};
