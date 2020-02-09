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
    let clonedSet;

    const onKeyDown = e => {
        setKey(e.key);
        setKeyPressed(keysPressed.add(e.key));
    };
    const onKeyUp = e => {
        setKey(null);
        clonedSet = new Set(keysPressed);
        clonedSet.delete(e.key);
        setKeyPressed(clonedSet);
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

export const useMedia = query => {
    let [matches, setMatches] = useState(window.matchMedia(query).matches);

    // cDM, cDU
    useEffect(() => {
        let media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        let listener = () => setMatches(media.matches);
        media.addListener(listener);
        return () => media.removeListener(listener);
    }, [query]);

    return matches;
};
