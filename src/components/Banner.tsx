import React from "react";
import NextImage from "next/image";

function Banner(){
    return(
            <div className="h-120 bg-banner bg-top bg-no-repeat bg-cover">
                <div className="h-full bg-shadow-banner relative"></div>
                <h1 className="relative -top-28 left-10 text-6xl">KESLEY PAULINO</h1>
            </div>
        
    );
};
export default Banner;