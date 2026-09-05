import Link from "next/link";

export default function PagInicial () {
    return (
        <main>
            <div className="text-center mt-15 text-2xl">
                <h1>
                    <strong className="">POKEDEX</strong>
                </h1>
                <h3>
                    Explore o mundo Pokemon
                </h3>
                            
                <div className="mt-8 inline-block br-8 rounded-md bg-green-600 px-6 py-3 text-lg font-bold text-white hover:bg-green-700 transition">
                    <Link href= "/pokemon">Explorar Pokemon</Link>
                </div>
            </div>
        </main>
    );
}