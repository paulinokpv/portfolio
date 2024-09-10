import React from "react";
import NextImage from "next/image";
function Projetos(){
    return(
        <div className="mb-10">
            <div className="text-2xl px-2.5 py-4 bg-about-me">PROJETOS</div>
            <div className="md:flex justify-around flex-wrap">
                <a className="max-w-45% color-branco">
                <NextImage src="/projetos-login.png" alt="imagem de logo" width={500} height={500} className="m-2 mt-2 h-auto max-w-full md:px-0 px-10" layout="intrinsic"/>
                </a>
                <a className="max-w-45% color-branco">
                <NextImage src="/projetos-todo-list.png" alt="imagem de logo" width={500} height={500} className="m-2 mt-2 h-auto max-w-full md:px-0 px-10" layout="intrinsic"/>
                </a>
                <a className="max-w-45% color-branco">
                <NextImage src="/projetos-plataforma.png" alt="imagem de logo" width={500} height={500} className="m-2 mt-2 h-auto max-w-full md:px-0 px-10" layout="intrinsic"/>
                </a>
                <a className="max-w-45% color-branco">
                <NextImage src="/projetos-nft.png" alt="imagem de logo" width={500} height={500} className="m-2 mt-2 h-auto max-w-full md:px-0 px-10" layout="intrinsic"/>
                </a>
                <a className="max-w-45% color-branco">
                <NextImage src="/projetos-ecommerce.png" alt="imagem de logo" width={500} height={500} className="m-2 mt-2 h-auto max-w-full md:px-0 px-10" layout="intrinsic"/>
                </a>
                <a className="max-w-45% color-branco">
                <NextImage src="/projetos-agendamento.png" alt="imagem de logo" width={500} height={500} className="m-2 mt-2 h-auto max-w-full md:px-0 px-10" layout="intrinsic"/>
                </a>
            </div>
        </div>
    );
};
export default Projetos;