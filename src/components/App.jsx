import CalBody from "./CalBody";
import style from "../components/App.module.css";
import Display from "./Display";
import CalButton from "./CalButton";
import { useState } from "react";
function App() {
  const [inputValue, setInputValue] = useState("");
  function numberValue(event) {
    setInputValue((prevValue) => prevValue + event.target.value);
  }
  function onEqualHandle() {
    if (inputValue === "") {
      setInputValue("");
    } else {
      setInputValue(eval(inputValue));
    }
  }
  function allClear() {
    setInputValue("");
  }
  function backValue() {
    setInputValue((prevValue) => prevValue.slice(0, -1));
  }
  return (
    <>
      <center>
        <div className={style.ParentDiv}>
          <CalBody />
          <Display inputValue={inputValue} />
          <br />
          <CalButton
            numberValue={numberValue}
            onEqualHandle={onEqualHandle}
            allClear={allClear}
            backValue={backValue}
          />
        </div>
      </center>
    </>
  );
}

export default App;
