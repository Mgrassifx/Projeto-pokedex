import Link from "next/link";

import Image from "next/image";
import fotoPokedex from "./foto/images-removebg-preview.png"

export default function navbar() {

    return (
        
        <nav>
            <div className="bg-red-700 grid grid-cols-3 gap-42 pt-1 pb-3 pl-4 ">
                <div className="w-20 h-auto">
                    <Image src={fotoPokedex} alt="foto pokedex"/>
                </div>
                <div>
                    <ul className="grid grid-cols-3 justify-center gap-20 text-white">
                        <Link className="text-xl" href= "/">Inicio</Link>
                        <Link className="text-xl" href= "/pokemon"> Pokemon</Link>
                        <Link className="text-xl" href= "/detalhes"> Detalhe</Link>
                    </ul>
                </div>
            </div>
            
        </nav>
    )
}