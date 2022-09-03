import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App(props) {

  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    console.log("cliqueaste");
    setCounter(counter + 1)
  }

  return (
<div className='contenedor'>
      <div className='contador'>
        <strong> contador: {counter} </strong>
      </div>
      <button onClick={handleClick} className="boton">Haz clik aqui</button>
</div>


  );
}

export default App;
