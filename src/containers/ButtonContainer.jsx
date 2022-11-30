import { useContext } from "react";
import Button from "../components/Button";
import { context } from "../context";

export default function ButtonContainer() {
  const {
    stopTimer,
    setStopTimer,
    resetTimer,
    setResetTimer,
    setTimerBreak
  } = useContext(context);

  return (
    <>
      <Button color={"#b7b7ad"} position={[5, -2, 9]} args={[4, 1, 4]} onClick={() => setStopTimer(!stopTimer)} />
      <Button color={"#f26262"} position={[12, -2, 9]} args={[4, 1, 4]} onClick={() => {
        setResetTimer(!resetTimer);
        setTimerBreak(false);
      }} />
    </>
  );
}
