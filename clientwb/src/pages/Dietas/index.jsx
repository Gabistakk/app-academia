import { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [food2, setFood2] = useState("");
  const [foodsList, setFoodsList] = useState([]);



  const handleFood2Change = (e) => {
    setFood2(e.target.value);
  };


  const handleAddFood = () => {
    if (food2.trim() !== "") {
      setFoodsList([...foodsList, food2]);
      setFood2("");
    }
  };




  return (
    <div className="w-screen h-screen bg-fundo2 overflow-hidden flex justify-center items-center flex-col">
      <div className=" w-[100%] h-[10%]">
      <h1 className="text-center text-5xl">Dieta</h1>
      </div>
      <div className="w-1/2 h-[60%] bg-fundo1 rounded-xl flex flex-col items-center justify-around">
        <section className="testo w-[100%] flex justify-center items-center">
          <h1 className="text-white text-3xl">Digite nomes de alimentos para sua dieta</h1>
        </section>
        <section className="input w-[100%] flex  justify-center items-center">

          <div className="w-1/3">
            <input
              type="text"
              className="w-full h-12 text-xl bg-fundo2 rounded-xl px-4 py-2 text-white focus:outline-none placeholder:text-black"
              placeholder="Alimentos.."
              value={food2}
              onChange={handleFood2Change}
            />
          </div>

        </section>
        <section className="botaSection ">
          <button
            type="submit"
            className="text-white border-white rounded-full border-[1px] h-[4vh] w-[20vh] transition  hover:bg-fundo2"
            onClick={handleAddFood}
          >
            Adicionar
          </button>


          <Link to={"/resultados"}>
          <button
            type="submit"
            className="text-white border-white rounded-full border-[1px] h-[4vh] w-[20vh] transition  hover:bg-fundo2"
            onClick={handleAddFood}
          >
            Proximo
          </button>
          </Link>
        </section>
      </div>
    </div>
  );
}

export default App;
