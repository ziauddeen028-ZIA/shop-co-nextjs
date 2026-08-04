import Link from "next/link";
import { IoClose } from "react-icons/io5";

export const AnnouncementBar = () => {
    return (
        <header className="bg-black text-white p-1 ">
            <div className="flex justify-center items-center max-w-7xl mx-auto relative">
                <p className="">Sign up and get 20% off to your first order. <Link href="/" className="underline">Sign Up Now</Link></p>
                <button className="absolute right-20"><IoClose/></button>
            </div>

        </header>

    );
}

export default AnnouncementBar;