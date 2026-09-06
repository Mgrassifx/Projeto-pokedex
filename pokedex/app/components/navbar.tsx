import Link from "next/link";

import Image from "next/image";
import fotoPokedex from "./foto/images-removebg-preview.png"

export default function navbar() {

    return (
        
        <nav>
            <div className="bg-red-700 grid grid-cols-3 gap-42 pt-6 pb-6 pl-4 ">
                <div className="w-40 h-auto">
                    <Image src={fotoPokedex} alt="foto pokedex"/>
                </div>
                <div>
                    <ul className="grid grid-cols-2 justify-center w-full text-center gap-10 p-2  ">
                        <Link 
                            className="text-3xl bg-white p-2 rounded-3xl shadow-md hover: transition-transform duration-700 hover:scale-103" 
                            href= "/">
                            <strong>Inicio</strong>
                        </Link>

                        <Link 
                            className="text-3xl bg-white p-2 rounded-3xl shadow-md hover:transition-transform duration-700 hover:scale-103" 
                            href= "/pokemon">
                            <strong> Pokemon</strong>
                        </Link>

                    </ul>
                </div>
            </div>
            
        </nav>
    )
}