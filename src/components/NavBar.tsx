import React from "react";
import NextImage from "next/image";
function NavBar(){
    return(
        <header className=" bg-header-custom">
            <div className="flex justify-between md:justify-center flex-row items-center gap-2 h-12">
                <NextImage src="/icon-portfolio.png" alt="imagem de logo" width={50} height={40} className="flex-1 self-start flex-grow-0" style={{ margin: '10px 3vw' }}/>
                <NextImage src="icon-menu.svg" alt="imagem de logo" width={50} height={40} className="flex md:hidden flex-1 self-start flex-grow-0" layout="intrinsic" style={{ margin: '10px 3vw' }}/>
                <ul className="hidden md:flex justify-center w-full gap-20">
                    <li className="inline decoration-none"><a href="#" className="text-white decoration-none hover:text-link-hover-color">HOME</a></li>
                    <li className="inline decoration-none"><a href="#" className="text-white decoration-none hover:text-link-hover-color">HABILIDADES</a></li>
                    <li className="inline decoration-none"><a href="#" className="text-white decoration-none hover:text-link-hover-color">SOBRE</a></li>
                    <li className="inline decoration-none"><a href="#" className="text-white decoration-none hover:text-link-hover-color">PROJETOS</a></li>
                    <li className="inline decoration-none"><a href="#" className="text-white decoration-none hover:text-link-hover-color">CONTATO</a></li>
                </ul>
            </div>
        </header>
    );
};
export default NavBar;