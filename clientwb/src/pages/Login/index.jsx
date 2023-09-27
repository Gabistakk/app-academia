import React, { useState } from "react";

export default function Login() {



    const [formaData,setFormdata] = useState({
        email : "",
        senha : "",
      })
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormdata((data) => ({
          ...data,
          [name]: value,
        }));
      };






  return (
    <div className="w-[100%] h-[100vh] overflow-hidden bg-fundo2 flex justify-center items-center">
      <div className="w-[40%] h-[70%] bg-fundo1 rounded-xl flex flex-col items-center justify-center">
        <form className="h-[100%] w-[100%] flex flex-col   justify-center  items-center bg-fundo1 rounded-xl">
          <section className=" w-[100%] h-[100%] flex flex-col items-center justify-center gap-24 ">
            <h1 className="text-4xl text-white">Login</h1>

            <div className="flex flex-col gap-2">
              <div>
                <label htmlFor="ip1" className="text-white">
                  E-Mail:
                </label>
              </div>
              <div className="w-[40vh] border-fundo1 border-[1px] flex items-center justify-center h-[50%] rounded-full transition shadow-white shadow-lg hover:shadow-lg  ">
                <input
                  type="text"
                  name="email"
                  value={formaData.email}
                  onChange={handleInputChange}
                  placeholder="name@example.com.."
                  className="w-[93%] text-white rounded-full h-[60%]   outline-0 bg-transparent p-3 placeholder:text-white"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div>
                <label htmlFor="ip1" className="text-white">
                  Senha:
                </label>
              </div>
              <div className="w-[40vh] border-fundo1 border-[1px] flex items-center justify-center h-[50%] rounded-full transition shadow-white shadow-lg hover:shadow-lg  ">
                <input
                  type="text"
                  name="senha"
                  value={formaData.senha}
                  onChange={handleInputChange}
                  placeholder="password.."
                  className="w-[93%] text-white  rounded-full h-[60%] border-white outline-0 bg-transparent p-3 placeholder:text-white"
                />
              </div>
            </div>

            <button
            type="submit"
            className="border-fundo2 text-white rounded-full border-[1px] h-[4vh] w-[20vh] transition hover:text-white hover:bg-fundo2"
          >
            Logar
          </button>
          </section>
        </form>
      </div>
    </div>
  );
}
