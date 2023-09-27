import React, { useState } from "react";

export default function Resultados() {
  const [peso, setPeso] = useState(null);
  const [pesoAuxiliar,setPesoAuxiliar] = useState(null)

  const handlePesoChange = (e) => {
    setPesoAuxiliar(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault(); 
    setPeso(pesoAuxiliar); 
  }

  return (
    <>
      {peso === null ? (
        <>
          <div className="w-screen h-screen bg-fundo2 overflow-hidden flex justify-center items-center flex-col">
            <div className=" w-[100%] h-[10%]">
              <h1 className="text-center text-5xl">Resultados</h1>
            </div>
            <form onSubmit={handleSubmit} className="w-1/2 h-[60%] bg-fundo1 rounded-xl flex flex-col items-center justify-around">
              <section className="testo w-[100%] flex justify-center items-center">
                <h1 className="text-white text-3xl">
                  digite seu peso atual apos ter feito dieta e exercicios
                </h1>
              </section>
              <section className="input w-[100%] flex  justify-center items-center">
                <div className="w-1/3">
                  <input
                    type="text"
                    className="w-full h-12 text-xl bg-fundo2 rounded-xl px-4 py-2 text-white focus:outline-none placeholder:text-black"
                    placeholder="Peso Kg.."
                    value={pesoAuxiliar}
                    onChange={handlePesoChange}
                  />
                </div>
              </section>
              <section className="botaSection ">
                <button
                  type="submit"
                  className="text-white border-white rounded-full border-[1px] h-[4vh] w-[20vh] transition  hover:bg-fundo2"
                >
                  Enviar
                </button>
              </section>
            </form>
          </div>
        </>
      ) : (
        <>
        <div className="w-screen h-screen bg-fundo2 overflow-hidden flex justify-center items-center flex-col">
            <div className=" w-[100%] h-[10%]">
              <h1 className="text-center text-5xl">Resultados</h1>
            </div>
            <div className="w-1/2 h-[60%] bg-fundo1 rounded-xl flex flex-col items-center justify-center">
                 <h1 className="text-5xl">Parabens</h1>
            </div>
          </div>
        </>
      )}
    </>
  );
}
