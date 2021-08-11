import Image from "next/image"
import {SearchIcon,MenuIcon,ShoppingCartIcon} from "@heroicons/react/outline"
function Header() {
    return (
        <header>
            <div className="bg-amazone_blue flex items-center px-3">
               <div className=" mt-2 flex-grow flex items-center sm:flex-grow-0 mr-1">
                    <Image src="https://links.papareact.com/f90" width={120} height={40} objectFit="contain" objectPosition="left" className="cursor-pointer" />
               </div>
               <div className="hidden sm:flex hover:bg-yellow-500 bg-yellow-400 rounded flex-grow  items-center overflow-hidden   ">
                   <input type="text" className="outline-none p-1 flex-grow" />
                   <SearchIcon className="h-6  px-2 py-1"  />
               </div>
               <div className="text-white flex items-center md:text-sm text-xs space-x-3 whitespace-nowrap ml-2">
                  <div className="link">
                      <p>Hello</p>
                      <p className="font-bold">Account & List</p>
                  </div>
                  <div className="link">
                      <p>Returns</p>
                      <p className="font-bold">& Orders</p>
                  </div>
                  <div className="link relative flex items-center">
                      <span className="absolute flex items-center justify-center top-0 right-0 sm:right-10 h-4 w-4 bg-yellow-400 rounded-full text-black font-bold "> 0</span>
                      <ShoppingCartIcon  className="h-7"/>
                      <p className=" hidden sm:inline mt-1.5 font-bold">Basket</p>
                  </div>
               </div>
            </div>
            <div className="bg-amazone_blue-light text-white text-sm flex p-2 pl-3 items-center space-x-3">
                <p className="link flex items-center">
                    <MenuIcon className="h-5 mr-1"/>
                    All
                </p>
                <p className="link">Prime Video</p>
                <p className="link">Amazone Business</p>
                <p className="link">Today Deals</p>
                
            </div>
        </header>
    )
}

export default Header
