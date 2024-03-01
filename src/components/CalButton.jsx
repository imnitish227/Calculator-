import style from "../components/CalButton.module.css";
function CalButton({ onClickHandle}) {
  const buttonList = [
    { label: "AC", className: style.BtnStlClr },
    { label: "←", className: style.BtnStlClr},
    { label: "%", className: style.BtnStlClr },
    { label: "/", className: style.BtnStlClr},
    { label: "7", className: style.BtnStl },
    { label: "8", className: style.BtnStl },
    { label: "9", className: style.BtnStl },
    { label: "*", className: style.BtnStl },
    { label: "4", className: style.BtnStl },
    { label: "5", className: style.BtnStl },
    { label: "6", className: style.BtnStl },
    { label: "-", className: style.BtnStl },
    { label: "1", className: style.BtnStl },
    { label: "2", className: style.BtnStl },
    { label: "3", className: style.BtnStl },
    { label: "+", className: style.BtnStl },
    { label: "0", className: style.BtnStl },
    { label: ".", className: style.BtnStl },
    { label: "=", className: style.Submit },
  ];

  return (
    <>
      {buttonList.map((btns, index) => (
        <button
          value={btns.label}
          key={index}
          className={btns.className}
          onClick={onClickHandle}
        >
          {btns.label}
        </button>
      ))}
    </>
  );
}
export default CalButton;
