import Image from "next/image";
import Search from "./components/icons/Search.js";
import User from "./components/icons/User.js";
import Buy from "./components/icons/Buy.js";

export default function Home() {
  return (
    <div>
      <header>
        <nav className="w-full flex items-center justify-between p-4 z-10 fixed top-0 left-0 bg-white flex-col">

          <div className="flex items-center space-x-2 w-full justify-between">

            <div className="flex items-center">
              <a href="/" alt="Purpura"><Image src="/favicon.ico" width={50} height={50} className="mr-2" /></a>
              <h1 className="text-4xl font-bold text-black"><a href="/">PURPURA</a></h1>
            </div>

            <div className="flex items-center relative">
              <input type="search" placeholder="Buscar..." className="w-full h-11 px-4 border border-black rounded-3xl" />
              <Search />
            </div>

            <div className="flex items-center">
              <a href="/usuarios" className="m-5"><User /></a>
              <a href="/carrito-compras" className="m-5"><Buy /></a>
            </div>

          </div>
          
          <div className="flex items-center">

          </div>

        </nav>
      </header>

      <main className="">
        
      </main>

      <footer className="">
        
      </footer>
    </div>
  );
}