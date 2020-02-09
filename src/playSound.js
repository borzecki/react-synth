let AudioContext =
    window.AudioContext || // Default
    window.webkitAudioContext || // Safari and old versions of Chrome
    false;
let playSound;

if (AudioContext) {
    const context = new AudioContext();
    playSound = (frequency, type, duration) => {
        const oscillator = context.createOscillator();
        const gain = context.createGain();
        const now = context.currentTime;

        oscillator.type = type;
        oscillator.connect(gain);
        oscillator.frequency.value = frequency;

        gain.connect(context.destination);

        gain.gain.setValueAtTime(1, now);
        gain.gain.exponentialRampToValueAtTime(0.00001, now + duration);

        oscillator.start(now);
        oscillator.stop(now + duration);
    };
} else {
    alert(
        'Sorry, but the Web Audio API is not supported by your browser. Please, consider upgrading to the latest version or downloading Google Chrome or Mozilla Firefox'
    );
    playSound = () => {};
}

export default playSound;
