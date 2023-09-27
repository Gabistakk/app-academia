import React from "react";

export default function Login() {
  return (
    <div className="w-[100%] h-[100vh] overflow-hidden bg-fundo1 flex justify-center items-center">
      <div className="w-[40%] h-[70%] bg-fundo2 rounded-xl flex flex-col items-center justify-center">
        <form className="h-[100%] w-[100%] flex flex-col   justify-center  items-center bg-fundo2 rounded-xl">
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
                  placeholder="name@example.com.."
                  className="w-[93%] rounded-full h-[60%] border-white outline-0 bg-transparent p-3 placeholder:text-white"
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
                  name="email"
                  placeholder="password.."
                  className="w-[93%] rounded-full h-[60%] border-white outline-0 bg-transparent p-3 placeholder:text-white"
                />
              </div>
            </div>

            <button
              type="submit"
              className="border-fundo1 rounded-full border-[1px] h-[4vh] w-[20vh] transition hover:text-white hover:bg-rose-500"
            >
              Registrar
            </button>
          </section>
        </form>
      </div>
    </div>
  );
}
