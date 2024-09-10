import React from "react";
import NextImage from "next/image";
function Info(){
    return(
           <div className="md:flex justify-between mb-9">
            <div className="md:flex-1">
                <div className="bg-about-me p-2.5 px-7.5 text-4xl my-0 mb-5">Sobre mim</div>
                <p className="m-8 mr-12 text-xl font-light">Sou um desenvolvedor Fullstack com habilidades abrangentes em desenvolvimento web fullstack.</p>
                <p className="m-8 mr-12 text-xl font-light">Aceito trabalhar no modo PJ, CLT ou Freenlacer.</p>
                <p className="m-8 mr-12 text-xl font-light">Sou capaz de entregar projetos de alta qualidade que abrangem tanto o front-end quanto o back-end, garantindo excelência em todas as etapas do desenvolvimento.</p>
                <div className="flex">
                    <a href="#" className="text-branco"><NextImage src="/icon-linkedin.png" alt="imagem de logo" width={30} height={30} className="ml-10 hover:w-10 transition-all duration-500"/></a>
                    <a href="#" className="text-branco"><NextImage src="/icon-github.png" alt="imagem de logo" width={30} height={30} className=" ml-5 hover:w-10 transition-all duration-500"/></a>
                    <a href="#" className="text-branco"><NextImage src="/icon-instagram.png" alt="imagem de logo" width={30} height={30} className=" ml-5 hover:w-10 transition-all duration-500"/></a>
                </div>
            </div>
            <div className="mr-8 mt-10 md:-mt-12 flex-1 z-100">
                <div className="p-5 ml-5 md:ml-0 bg-box-bg-color rounded-lg">
                    <h3 className="pb-2 text-2xl md:text-4xl font-bold">Desenvolvedor Fullstack</h3>
                    <p className="pb-4 text-md md:text-xl font-extralight">Com expertise Fullstack, proporciono projetos de alta qualidade, abrangendo front-end e back-end.</p>
                    <a className="tracking-widest font-bold mt-4 transition-all duration-700 ease-in-out bg-btn-color1 text-white cursor-pointer rounded-lg p-2 text-sm  hover:bg-btn-color2 hover:text-btn-color1" href="#">ENTRE EM CONTATO</a>
                </div>
                <h3 className="pl-4 pt-6 text-3xl">HABILIDADES</h3>
                <div className="my-5 mx-3 md:mx-0 py-3 px-3 md:py-5 md:px-5 bg-box-bg-color rounded-lg flex justify-stretch items-center">
                    <NextImage src="/icon-html5.png" alt="imagem de logo" width={40} height={40} className="flex-1 self-start flex-grow-0"/>
                    <div className="w-full pl-4 flex flex-col justify-between gap-1.25">
                        <span>HTML</span>
                        <div className="h-3 md:h-5 rounded-xl bg-bar-color1">
                            <div className="h-3 md:h-5 rounded-xl bg-bar-color2"></div>
                        </div>
                    </div>
                </div>
                <div className="my-5 mx-3 md:mx-0 py-3 px-3 md:py-5 md:px-5 bg-box-bg-color rounded-lg flex justify-stretch items-center">
                    <NextImage src="/icon-css3.png" alt="imagem de logo" width={40} height={40} className="flex-1 self-start flex-grow-0"/>
                    <div className="w-full pl-4 flex flex-col justify-between gap-1.25">
                        <span>CSS</span>
                        <div className="h-3 md:h-5 rounded-xl bg-bar-color1">
                            <div className="h-3 md:h-5 rounded-xl bg-bar-color2"></div>
                        </div>
                    </div>
                </div>
                <div className="my-5 mx-3 md:mx-0 py-3 px-3 md:py-5 md:px-5 bg-box-bg-color rounded-lg flex justify-stretch items-center">
                    <NextImage src="/icon-javascript.png" alt="imagem de logo" width={40} height={40} className="flex-1 self-start flex-grow-0"/>
                    <div className="w-full pl-4 flex flex-col justify-between gap-1.25">
                        <span>Javascript</span>
                        <div className="h-3 md:h-5 rounded-xl bg-bar-color1">
                            <div className="h-3 md:h-5 rounded-xl w-[80%] bg-bar-color2"></div>
                        </div>
                    </div>
                </div>
                <div className="my-5 mx-3 md:mx-0 py-3 px-3 md:py-5 md:px-5 bg-box-bg-color rounded-lg flex justify-stretch items-center">
                    <NextImage src="/icon-github.png" alt="imagem de logo" width={40} height={40} className="flex-1 self-start flex-grow-0"/>
                    <div className="w-full pl-4 flex flex-col justify-between gap-1.25">
                        <span>Git & Github</span>
                        <div className="h-3 md:h-5 rounded-xl bg-bar-color1">
                            <div className="h-3 md:h-5 rounded-xl w-[90%] bg-bar-color2"></div>
                        </div>
                    </div>
                </div>
                <div className="my-5 mx-3 md:mx-0 py-3 px-3 md:py-5 md:px-5 bg-box-bg-color rounded-lg flex justify-stretch items-center">
                    <NextImage src="/icon-typescript.png" alt="imagem de logo" width={40} height={40} className="flex-1 self-start flex-grow-0"/>
                    <div className="w-full pl-4 flex flex-col justify-between gap-1.25">
                        <span>Typescript</span>
                        <div className="h-3 md:h-5 rounded-xl bg-bar-color1">
                            <div className="h-3 md:h-5 rounded-xl w-[80%] bg-bar-color2"></div>
                        </div>
                    </div>
                </div>
                <div className="my-5 mx-3 md:mx-0 py-3 px-3 md:py-5 md:px-5 bg-box-bg-color rounded-lg flex justify-stretch items-center">
                    <NextImage src="/icon-tailwind.png" alt="imagem de logo" width={40} height={40} className="flex-1 self-start flex-grow-0"/>
                    <div className="w-full pl-4 flex flex-col justify-between gap-1.25">
                        <span>Tailwind</span>
                        <div className="h-3 md:h-5 rounded-xl bg-bar-color1">
                            <div className="h-3 md:h-5 rounded-xl bg-bar-color2"></div>
                        </div>
                    </div>
                </div>
                <div className="my-5 mx-3 md:mx-0 py-3 px-3 md:py-5 md:px-5 bg-box-bg-color rounded-lg flex justify-stretch items-center">
                    <NextImage src="/icon-node.png" alt="imagem de logo" width={40} height={40} className="flex-1 self-start flex-grow-0"/>
                    <div className="w-full pl-4 flex flex-col justify-between gap-1.25">
                        <span>Node.js</span>
                        <div className="h-3 md:h-5 rounded-xl bg-bar-color1">
                            <div className="h-3 md:h-5 rounded-xl w-[80%] bg-bar-color2"></div>
                        </div>
                    </div>
                </div>
            </div> 

           </div> 
        
    );
};
export default Info;