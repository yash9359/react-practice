import { useState, useCallback ,useEffect,useRef} from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+-=[]{}|`/?~";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length+1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);


 const copyPasswordToClipboard = useCallback(()=>{

  passwordRef.current?.select();
  // passwordRef.current?.setSelectionRange(0,100);


  window.navigator.clipboard.writeText(password);
 },[password]) 

  useEffect( () => { passwordGenerator()

  }, [length,numberAllowed,charAllowed,setPassword])

  return (
    <>
      <div className="w-full max-w-lg mx-auto mt-10 p-5 rounded-2xl bg-gray-800 shadow-xl">
        <h1 className="text-white text-center text-2xl font-semibold mb-6 tracking-wide">
          🔐 Password Generator
        </h1>

        <div className="flex items-center bg-white rounded-xl shadow-inner overflow-hidden">
          <input
            type="text"
            value={password}
            className="outline-none w-full bg-transparent text-black px-4 py-3 text-lg placeholder-gray-700"
            placeholder="Generated password"
            readOnly
            ref = {passwordRef}
          />

          <button
            onClick={copyPasswordToClipboard}
            className="
              outline-none 
              bg-blue-700 
              text-white 
              px-3 py-4 
              shrink-0
              transition-all duration-300 ease-in-out
              hover:bg-blue-600
              hover:scale-105
              hover:shadow-lg
              active:scale-95
            "
          >
            Copy
          </button>

        </div>

        <div className="flex text-sm gap-x-2 my-1.5">
          <div className="flex h-2 items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursior-pointer "
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />

            <label className="text-cyan-300">Lenght: {length}</label>
          </div>

          <div className="flex h-2 items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />

            <label className="text-cyan-300">Number</label>
          </div>

          <div className="flex h-2 items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />

            <label
              className="text-cyan-400"
            >
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
