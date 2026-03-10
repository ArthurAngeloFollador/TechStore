import { BsFillMotherboardFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";

function Header() {
  return (
    <header className="fixed top-0 w-full h-16 bg-background p-2 flex items-center border-b border-neutral-400 justify-between text-color5">
      <div className="flex items-center gap-10">
      {/* Logo */}
      <div className="select-none flex gap-2 font-bold justify-center items-center p-2 pl-4">
        <BsFillMotherboardFill size={35} /> TechStore
      </div>
      {/* Navigation */}
      <div className="select-none flex gap-8 text-neutral-600">
        <div className="cursor-pointer">Home</div>
        <div className="cursor-pointer">Categories</div>
        <div className="cursor-pointer">Products</div>
        <div className="cursor-pointer">Deals</div>
      </div></div>
      {/* Profile & Cart */}
      <div className="select-none gap-8 flex items-center">
        {/* Cart */}
        <div className="cursor-pointer"><FaShoppingCart size={26} /></div>
        {/* Profile */}
        <div className="cursor-pointer"><IoPersonCircle size={34} /></div>
      </div>
    </header>
  );
}

export default Header;
