import CalBody from "./CalBody";
import style from "../components/App.module.css";
import Display from "./Display";
import CalButton from "./CalButton";
import { useState } from "react";
function App() {
  const [inputValue, setInputValue] = useState("");
  function onClickHandle(event) {
    const btnsValue = event.target.value;
    if (btnsValue === "←") {
      setInputValue((prevValue) => prevValue.slice(0, -1));
    } else if (btnsValue === "AC") {
      setInputValue("");
    } else if (btnsValue === "=") {
      setInputValue(eval(inputValue));
    } else {
      const totalValue = inputValue + btnsValue;
      setInputValue(totalValue);
    }
  }

  return (
    <>
      <center>
        <div className={style.ParentDiv}>
          <CalBody />
          <Display inputValue={inputValue} />
          <br />
          <CalButton onClickHandle={onClickHandle} />
        </div>
      </center>
    </>
  );
}

export default App;
