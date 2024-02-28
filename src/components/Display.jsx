import style from "../components/Display.module.css";
function Display({ inputValue }) {
  return (
    <>
      <input className={style.Display} value={`${inputValue}`} readOnly></input>
    </>
  );
}

export default Display;
