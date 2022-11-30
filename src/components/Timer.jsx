import { useBox } from "@react-three/cannon";
import { useLoader } from "@react-three/fiber";
import { useContext, useEffect, useMemo } from "react";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { context } from "../context";
import { extend } from "@react-three/fiber";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

extend({ TextGeometry });

export default function Timer({ fontPath, color }) {
  const [ref] = useBox(() => ({
    mass: 1
  }));
  const font = useLoader(FontLoader, fontPath);
  const config = useMemo(() => ({ font, size: 5, height: 2 }), [font]);
  const {
    initialTimerState,
    initialTimerBreak,
    minutes,
    seconds,
    setMinutes,
    setSeconds,
    resetTimer,
    stopTimer,
    setStopTimer,
    timerBreak,
    setTimerBreak
  } = useContext(context);

  const timerText = useMemo(() => {
    const minuteDigit = `${minutes}`.length === 1 ? `0${minutes}` : minutes;
    const secondDigit = `${seconds}`.length === 1 ? `0${seconds}` : seconds;

    return `${minuteDigit}:${secondDigit}`;
  }, [minutes, seconds]);

  useEffect(() => {
    if (resetTimer) {
      setStopTimer(true);
      setTimeout(() => {
        setMinutes(initialTimerState.minutes);
        setSeconds(initialTimerState.seconds);
      }, 1001)
    }
    let interval = !stopTimer ? setInterval(() => {
      clearInterval(interval);
      if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
        if (minutes === 0) {
          if (timerBreak) {
            setTimerBreak(false);
            setMinutes(initialTimerState.minutes);
            setSeconds(initialTimerState.seconds);
            setStopTimer(true);
          } else {
            setTimerBreak(true);
            setMinutes(initialTimerBreak.minutes - 1);
          }
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000) : null;
  }, [
    seconds,
    minutes,
    stopTimer,
    initialTimerState,
    resetTimer,
    setMinutes,
    setSeconds,
    setStopTimer,
    initialTimerBreak,
    setTimerBreak,
    timerBreak
  ]);

  return (
    <mesh ref={ref} receiveShadow castShadow>
      <textGeometry args={[timerText, config]} />
      <meshPhongMaterial color={color} />
    </mesh>
  );
}
