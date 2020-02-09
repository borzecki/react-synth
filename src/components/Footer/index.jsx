import React from 'react';
import heart from '../../static/heart.svg';

export default () => (
    <footer>
        crafted with <img className="heartIcon" src={heart} alt="Logo" /> by{' '}
        <a href="http://borzeckid.com">borzecki</a>
    </footer>
);
