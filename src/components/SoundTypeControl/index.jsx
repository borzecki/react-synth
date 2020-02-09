import React from 'react';
import classnames from 'classnames';

import { soundTypes } from '../../constants';

const SoundType = ({ type, active, onClick }) => (
    <div
        className={classnames('PushButton', {
            ActivePushButton: type === active
        })}
        onClick={() => onClick(type)}
    >
        {type}
    </div>
);

const SoundTypeControl = ({ active, onClick }) => (
    <>
        {soundTypes.map(t => (
            <SoundType key={t} type={t} active={active} onClick={onClick} />
        ))}
    </>
);

export default SoundTypeControl;
