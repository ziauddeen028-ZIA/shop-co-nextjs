import Image from "next/image";

export const Hero = () => {

    const stats = [
        {
            id: 1,
            number: "200+",
            title: "International Brands",
        },
        {
            id: 2,
            number: "2,000+",
            title: "High-Quality Products",
        },
        {
            id: 3,
            number: "30,000+",
            title: "Happy Customers",
        },
    ];

    return (
        <div className="bg-[#F2F0F1]  min-h-screen h-full flex px-20 py-4">
            <div className="flex-1 mt-14">
                <div className="text-black text-6xl font-extrabold ">
                    <h1>FIND CLOTHES</h1>
                    <h1>THAT MATCHES</h1>
                    <h1>YOUR STYLE</h1>
                </div>
                <div className="w-3/4 mt-5">
                    <p className="text-gray-500 leading-7">
                        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                    </p>
                </div>

                <div className="w-1/2 mt-5">
                    <button className="bg-black p-3 rounded-4xl w-[40%]">Shop Now</button>
                </div>

                <div className="w-1/2 flex gap-10 mt-7 ">
                    {
                        stats.map((value, index) => {
                            return (<div className={`pr-8 items-center ${index !== stats.length - 1 ? "border-r border-gray-300" : ""
                                }`}>
                                <h1 className="text-black text-4xl font-sans font-bold">{value.number}</h1>
                                <p className="text-gray-500 whitespace-nowrap">{value.title}</p>

                            </div>
                            );
                        })
                    }
                </div>
            </div>
            <div className="flex-1 flex items-end justify-end">
                <Image
                    src="/hero-img.png"
                    alt="Hero Model"
                    width={1200}
                    height={1200}
                    priority
                />
            </div>
        </div>
    )
}

export default Hero;