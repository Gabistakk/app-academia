import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Metas() {
   
  const navigator = useNavigate()

  const [buttoGanharFixed, setButtonGanharFixed] = useState(null);
  const [buttoPerderFixed, setButtonPerderFixed] = useState(null);

  const handleButton = (name) => {
    name === "Ganhar"
      ? setButtonGanharFixed(true)
      : setButtonGanharFixed(false);
    name === "Perder"
      ? setButtonPerderFixed(true)
      : setButtonPerderFixed(false);

      navigator('/dietas')
  };

  
  

  return (
    <div className="w-[100%] h-[100vh] bg-fundo2 overflow-hidden flex justify-center items-center flex-col">
      <div className="h-[15%] w-full">
        <h1 className="text-5xl text-center text-white ">Você quer..</h1>
      </div>
      <div className="w-[50%] h-[50%] bg-fundo1 rounded-xl flex  justify-between px-32 items-center ">
          <button onClick={()=>{handleButton('Ganhar')}} className={`w-[30%] h-[30%] text-xl bg-fundo2 rounded-xl shadow-lg shadow-white transition hover:bg-transparent border-fundo2 border-[2px] text-white ${buttoGanharFixed ? 'bg-transparent border-fundo2 border-[2px] text-white' : ''}`}>Ganhar Peso</button>
          <button onClick={()=>{handleButton('Perder')}} className={`w-[30%] h-[30%] text-xl bg-fundo2 rounded-xl shadow-lg shadow-white transition hover:bg-transparent border-fundo2 border-[2px] text-white ${buttoPerderFixed ? 'bg-transparent border-fundo2 border-[2px] text-white' : ''}`}>Perder Peso</button>
      </div>

    </div>
  );
}
