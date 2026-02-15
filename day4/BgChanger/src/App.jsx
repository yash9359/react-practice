import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  function changeColor(newColor) {
    setColor(newColor);
  }

  return (
    <>
      <div
        className="w-full h-screen text-3xl"
        style={{ backgroundColor: color }}
      >
        <div className="fixed justify-center bottom-12 flex flex-wrap  inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl    ">
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
              style={{ backgroundColor: "red" }}
              onClick={() => changeColor("red")}
            >
              Red
            </button>

            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
              style={{ backgroundColor: "blue" }}
              onClick={() => changeColor("Blue")}
            >
              Blue
            </button>

            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
              style={{ backgroundColor: "Green" }}
              onClick={() => changeColor("Green")}
            >
              Green
            </button>

            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
              style={{ backgroundColor: "skyblue" }}
              onClick={() => changeColor("SkyBlue")}
            >
              SkyBlue
            </button>

            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
              style={{ backgroundColor: "black" }}
              onClick={() => changeColor("black")}
            >
              Black
            </button>

            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "violet" }}
              onClick={() => changeColor("violet")}
            >
              Violet
            </button>

            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "gray" }}
              onClick={() => changeColor("gray")}
            >
              Gray
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
