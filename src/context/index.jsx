import { createContext, useState } from "react";

export const context = createContext();

export default function Provider({ children }) {
  const [initialTimerState, setInitialTimerState] = useState({
    minutes: 25,
    seconds: 0
  });
  const [initialTimerBreak, setInitialTimerBreack] = useState({
    minutes: 5,
    seconds: 0
  });
  const [sceneBackgroundColor, setSceneBackgroundColor] = useState(['#565656']);
  const [scenePointLightColor, setScenePointLightColor] = useState('#53b2ff');
  const [stopTimer, setStopTimer] = useState(true);
  const [resetTimer, setResetTimer] = useState(false);
  const [minutes, setMinutes] = useState(initialTimerState.minutes);
  const [seconds, setSeconds] = useState(initialTimerState.seconds);
  const [timerBreak, setTimerBreak] = useState(false);

  const value = {
    stopTimer, setStopTimer,
    resetTimer, setResetTimer,
    initialTimerState, setInitialTimerState,
    sceneBackgroundColor, setSceneBackgroundColor,
    scenePointLightColor, setScenePointLightColor,
    minutes, setMinutes,
    seconds, setSeconds,
    initialTimerBreak, setInitialTimerBreack,
    timerBreak, setTimerBreak
  };

  return (
    <context.Provider value={value}>
      {children}
    </context.Provider>
  );
}
