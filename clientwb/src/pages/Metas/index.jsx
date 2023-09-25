import React from "react";

export default function Metas() {
  const kilosOptions = Array.from({ length: 100 }, (_, valor) => valor + 1);

  return (
    <div className="w-[100%] h-[100vh] bg-fundo overflow-hidden flex justify-center items-center flex-col">
      <div className="h-[15%] w-full">
        <h1 className="text-5xl text-center text-white ">Metas</h1>
      </div>
      <div className="w-[50%] h-[50%] bg-destaque rounded-xl flex flex-col items-center justify-center">
        <div className="w-full h-[50%] flex items-center justify-between px-12 ">
          <div className=" border-[1px] border-white px-3 py-4 rounded-2xl w-[30%]">
            <input
              type="text"
              name=""
              id=""
              className="bg-transparent border-none outline-none caret-white text-fundo placeholder:text-white text-xl"
              placeholder="Peso.."
            />
          </div>
          <div className="border-[1px] border-white px-3 py-4 rounded-2xl  caret-white  text-fundo w-[30%]  ">
            <input
              type="text"
              name=""
              id=""
              className="bg-transparent border-none outline-none placeholder:text-white text-xl"
              placeholder="Gordura.."
            />
          </div>
          <div className="border-[1px] border-white px-3 py-4 rounded-2xl caret-white text-fundo w-[30%]  ">
            <input
              type="text"
              name=""
              id=""
              className="bg-transparent border-none outline-none placeholder:text-white text-xl "
              placeholder="Altura..."
            />
          </div>
        </div>
        <div className="w-full h-[50%] flex flex-col justify-center items-center gap-10">
          <div></div>
          <div className="flex gap-7">
            <details class="bg-gray-200 p-4 rounded-lg shadow-md">
              <summary class="font-semibold text-lg cursor-pointer">
                Você quer...
              </summary>
              <div class="mt-4">
                <h3>
                  <button class="bg-green-500 text-white px-4 py-2 rounded-md mr-2">
                    Ganhar
                  </button>
                  <button class="bg-red-500 text-white px-4 py-2 rounded-md">
                    Perder
                  </button>
                </h3>
              </div>
            </details>

            <details className="bg-gray-200 p-4 rounded-lg shadow-md">
              <summary className="font-semibold text-lg cursor-pointer">
                Kilos
              </summary>
              <div className="mt-4">
                <select className="border p-2 rounded-md">
                  {kilosOptions.map((kilo) => (
                    <option key={kilo} value={kilo}>
                      {kilo} kg
                    </option>
                  ))}
                </select>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
