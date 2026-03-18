import { BsFillMotherboardFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";

function Header() {
  return (
    <header className="bg-background text-color5 fixed top-0 flex h-16 w-full items-center justify-between border-b-2 border-neutral-200 p-2">
      <div className="flex items-center gap-10">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 p-2 pl-4 font-bold select-none">
          <BsFillMotherboardFill size={35} /> TechStore
        </div>
        {/* Navigation */}
        <div className="flex gap-8 text-neutral-600 select-none">
          <div className="cursor-pointer">Home</div>
          <div className="cursor-pointer">Categories</div>
          <div className="cursor-pointer">Products</div>
          <div className="cursor-pointer">About Project</div>
        </div>
      </div>
      {/* Profile & Cart */}
      <div className="flex items-center gap-8 select-none">
        {/* Cart */}
        <div className="cursor-pointer">
          <FaShoppingCart size={26} />
        </div>
        {/* Profile */}
        <div className="cursor-pointer">
          <IoPersonCircle size={34} />
        </div>
      </div>
    </header>
  );
}

export default Header;
