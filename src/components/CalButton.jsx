import style from "../components/CalButton.module.css";
function CalButton({ numberValue, onEqualHandle, allClear, backValue }) {
  const buttonList = [
    { label: "AC", className: style.BtnStlClr, onclick: allClear },
    { label: "←", className: style.BtnStlClr, onclick: backValue },
    { label: "%", className: style.BtnStlClr, onclick: numberValue },
    { label: "/", className: style.BtnStlClr, onclick: numberValue },
    { label: "7", className: style.BtnStl, onclick: numberValue },
    { label: "8", className: style.BtnStl, onclick: numberValue },
    { label: "9", className: style.BtnStl, onclick: numberValue },
    { label: "*", className: style.BtnStl, onclick: numberValue },
    { label: "4", className: style.BtnStl, onclick: numberValue },
    { label: "5", className: style.BtnStl, onclick: numberValue },
    { label: "6", className: style.BtnStl, onclick: numberValue },
    { label: "-", className: style.BtnStl, onclick: numberValue },
    { label: "1", className: style.BtnStl, onclick: numberValue },
    { label: "2", className: style.BtnStl, onclick: numberValue },
    { label: "3", className: style.BtnStl, onclick: numberValue },
    { label: "+", className: style.BtnStl, onclick: numberValue },
    { label: "0", className: style.BtnStl, onclick: numberValue },
    { label: ".", className: style.BtnStl, onclick: numberValue },
    { label: "=", className: style.Submit, onclick: onEqualHandle },
  ];

  return (
    <>
      {buttonList.map((btns, index) => (
        <button
          value={btns.label}
          key={index}
          className={btns.className}
          onClick={btns.onclick}
        >
          {btns.label}
        </button>
      ))}
    </>
  );
}
export default CalButton;
