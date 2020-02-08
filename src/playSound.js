const context = new AudioContext();

export default (frequency, type) => {
    const o = context.createOscillator();
    let g = context.createGain();

    o.type = type;
    o.connect(g);
    o.frequency.value = frequency;
    g.connect(context.destination);
    o.start(0);
    g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 2);
};
