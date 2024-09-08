import React from "react";
import NextImage from "next/image";
function Contatos(){
    return(
        <div className="flex flex-col">
            <div className="text-2xl px-2.5 py-4 bg-about-me">Contato</div>
            <div className="my-5 mb-10 p-5 max-w-3xl bg-box-bg-color rounded-lg self-center">
                <h4 className="ml-2 font-bold">ENVIE UMA MENSAGEM:</h4>
                <form className="flex flex-wrap">
                    <input type="text" className="p-2.5 m-2.5 rounded-lg border-none flex-1 text-preto" placeholder="Nome"/>
                    <input type="text" className="p-2.5 m-2.5 rounded-lg border-none flex-1 text-preto" placeholder="Número do célular"/>
                    <input type="text" className="basis-full p-2.5 m-2.5 rounded-lg border-none flex-1 text-preto" placeholder="Email"/>
                    <textarea className=" h-40 p-2.5 m-2.5 rounded-lg border-none flex-1 text-preto" placeholder="Mensagem"/>
                    <div className="flex p-2.5 justify-center align-center basis-full">
                      <a className="tracking-widest font-bold mt-4 transition-all duration-700 ease-in-out bg-btn-color1 text-white cursor-pointer rounded-lg p-2 text-sm  hover:bg-btn-color2 hover:text-btn-color1" href="#">ENTRE EM CONTATO</a>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Contatos;