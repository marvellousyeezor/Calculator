import { clear } from "@testing-library/user-event/dist/clear";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };
  const clear = (e) => {
    setResult("");
  };
  const backspace = (e) => {
    setResult(result.slice(0, result.length-1));
  };
  const calculate = (e) => {
    try{setResult(eval(result).toString());

    } catch(err){setResult("Error")}
  }
  return (
    <section className="container">
      <div className="secondContainer">
        <form>
          <input type="text" value={result} />
        </form>
        <div className="firstKeypad">
          <button className="btn" onClick={clear} id="clear">
            C
          </button>
          <button className="btn" name="/" id='sign' onClick={handleClick}>
            &divide;
          </button>

          <button className="specialButton" onClick={backspace} id="backspace">
            Del
          </button>

          <div className="secondKeypad">
            <button className="btn" name="7" onClick={handleClick}>
              7
            </button>
            <button className="btn" name="8" onClick={handleClick}>
              8
            </button>
            <button className="btn" name="9" onClick={handleClick}>
              9
            </button>
            <button className="btn" name="-" id='sign' onClick={handleClick}>
              &minus;
            </button>
          </div>
          <div className="thirdKeypad">
            <button className="btn" name="4" onClick={handleClick}>
              4
            </button>
            <button className="btn" name="5" onClick={handleClick}>
              5
            </button>
            <button className="btn" name="6" onClick={handleClick}>
              6
            </button>
            <button className="btn" name="+" id='sign' onClick={handleClick}>
              +
            </button>
          </div>
          <div className="fourthKeypad">
            <button className="btn" name="1" onClick={handleClick}>
              1
            </button>
            <button className="btn" name="2" onClick={handleClick}>
              2
            </button>
            <button className="btn" name="3" onClick={handleClick}>
              3
            </button>
            <button className="btn" name="*" id='sign' onClick={handleClick}>
              &times;
            </button>
          </div>
          <div className="fifthKeypad">
            <button className="btn" name="." onClick={handleClick}>
              .
            </button>
            <button className="btn" name="0" onClick={handleClick}>
              0
            </button>
            <button className="specialButton" onClick={calculate}>=</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
