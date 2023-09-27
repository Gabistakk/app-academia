import React, { useState } from 'react';

export default function Exercicios() {
  const [exercicios, setExercicios] = useState([
    { id: 1, nome: 'Exercício 1', concluido: false },
    { id: 2, nome: 'Exercício 2', concluido: false },
    { id: 3, nome: 'Exercício 3', concluido: false },
    { id: 4, nome: 'Exercício 4', concluido: false },
    { id: 5, nome: 'Exercício 5', concluido: false },
  ]);

  const exercicoConcluido = (id) => {
    setExercicios((prevExercicios) =>
      prevExercicios.map((exercicio) =>
        exercicio.id === id
          ? { ...exercicio, concluido: !exercicio.concluido }
          : exercicio
      )
    );
  };

  return (
    <div className="w-screen h-screen bg-fundo2 flex  justify-center items-center flex-col gap-10">
      <div>
        <h1 className='text-5xl'>Exercicios</h1>
      </div>
      <div className="bg-fundo1 rounded-xl  w-[30%] h-[50%] flex flex-col p-10">
        <h1 className="text-4xl text-white mb-4">Lista de Exercícios</h1>
        <ul className='flex flex-col gap-10  h-[90%] justify-center'>
          {exercicios.map((exercicio) => (
            <li key={exercicio.id} className="text-xl">
              <label className="flex items-center justify-between  text-white ">
                <div>
                <input
                  type="checkbox"
                  checked={exercicio.concluido}
                  onChange={() => exercicoConcluido(exercicio.id)}
                  className="mr-2"
                />
                {exercicio.nome}
                </div>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
