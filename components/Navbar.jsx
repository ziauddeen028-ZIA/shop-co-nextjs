import { FiSearch, FiShoppingCart, FiUser, FiChevronDown } from "react-icons/fi";

export const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-around items-center px-9 py-4  w-full bg-white text-black">
                <div>
                    <h1 className="font-extrabold text-4xl">SHOP.CO</h1>
                </div>
                <div className="flex justify-around gap-6 text-gray-600">
                    <div className="flex items-center gap-2">
                        <p>Shop</p>
                        <FiChevronDown />
                    </div>
                    <p>On Sale</p>
                    <p>New Arrivals</p>
                    <p>Brands</p>
                </div>
                <div className="flex bg-[#F2F0F1] items-center w-[40%] p-2 rounded-4xl">
                    <FiSearch className="text-gray-600" />
                    <input type="text" placeholder="Search For Products..." className="ml-2" />
                </div>
                <div className="flex gap-5 text-2xl font-bold">
                    <FiShoppingCart />
                    <FiUser />
                </div>
            </nav>
        </div>
    );
}

export default Navbar;