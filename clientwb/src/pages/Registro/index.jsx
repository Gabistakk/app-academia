import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Registro() {
    const [formaData, setFormdata] = useState({
        email: "",
        senha: "",
        nome: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormdata((data) => ({
            ...data,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://10.112.240.187:8000/user", {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify(formaData),
            });

            const responseData = await response.json();
            console.log(responseData);
            setDataLogin({
                email: "",
                senha: "",
                nome: "",
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="w-[100%] h-[100vh] overflow-hidden bg-fundo2 flex justify-center items-center">
            <div className="w-[40%] h-[80%] bg-fundo1 rounded-xl flex flex-col items-center justify-center">
                <div className="h-[20%] w-[100%] text-center flex items-center justify-center">
                    <h1 className="text-4xl text-white">Registro</h1>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="h-[80%] w-[100%] flex flex-col   justify-center gap-24 items-center bg-fundo1 rounded-xl"
                >
                    <div className="flex flex-col gap-2">
                        <div>
                            <label htmlFor="ip1" className="text-white">
                                Nome:
                            </label>
                        </div>
                        <div className="w-[40vh] border-fundo1 border-[1px] flex items-center justify-center h-[50%] rounded-full transition shadow-white shadow-lg hover:shadow-lg  ">
                            <input
                                type="text"
                                name="nome"
                                value={formaData.nome}
                                onChange={handleInputChange}
                                placeholder="name.."
                                className="w-[93%] text-white rounded-full h-[60%] border-white outline-0 bg-transparent p-3 placeholder:text-white"
                            />
                        </div>
                    </div>

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
                                className="w-[93%] text-white  rounded-full h-[60%] border-white outline-0 bg-transparent p-3 placeholder:text-white"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div>
                            <label htmlFor="ip1" className="text-white">
                                Senha
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
                        Registrar
                    </button>
                </form>
            </div>
        </div>
    );
}
