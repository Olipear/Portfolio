const TIMINGFUNC_MAP = {
  "linear": (t) => t,
  "ease-in": (t) => t * t,
  "ease-out": (t) => t * (2 - t),
  "ease-in-out": (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  "ease-out-quart": (t) => 1 - Math.pow( 1 - t, 4 ),
};

/**
 * Scroll from initY to 0
 * @param {number} initY - initial scroll Y
 * @param {number} duration - transition duration
 * @param {string} timingName - timing function name. Can be one of linear, ease-in, ease-out, ease-in-out
 */
const scrollToSmooth = (
  destinationY,
  duration = 300,
  timingName = "linear"
) => {

  const timingFunc = TIMINGFUNC_MAP[timingName];

  const [srollPos, setScrollPos] = useState(0);

  useEffect(() => {
    setScrollPos(window.scrollY)
  }, []);

  let start = null;
  const step = (timestamp) => {
    start = start || timestamp;
    const progress = timestamp - start,
    // Growing from 0 to 1
    time = Math.min(1, (timestamp - start) / duration);
    window.scrollTo(0, srollPos + (timingFunc(time) * (destinationY - srollPos)) );
    if (progress < duration) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
};

export default scrollToSmooth;
