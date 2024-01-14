import Image from "next/image";
import safe from "/public/images/safe.jpeg";
import lowfee from "/public/images/lowfee.png";
import quicksupport from "/public/images/quicksupport.png";
import activities from "/public/images/activities.jpeg";
import fast from "/public/images/fast.png";
import { FaArrowRight } from "react-icons/fa";

const Service = () => {
    return (
        <div className="p-20">
            <div>
                <h1 className="text-4xl text-center font-bold">
                    Why Choose Us
                </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:w-[1200px] mx-auto">
                <div className="w-[300px]  hover:shadow-lg duration-500 p-5 mx-2 rounded-lg">
                    <div className="flex justify-center items-center border bg-blue-500 rounded-full w-[200px] h-[200px] my-5 mx-3">
                        <Image
                            className="rounded-full bg-white h-[150px] w-[150px] p-2"
                            height={50}
                            width={50}
                            src={fast}
                            alt="Card image"
                        ></Image>
                    </div>
                    <div>
                        <h1 className="text-xl text-center">Fast</h1>
                        <p className="text-center">
                            <small>Exprience Therapists</small>
                        </p>
                        <div className="flex justify-center">
                        <button className="font-semibold flex  items-center mt-5 ">
                            <h4>Read More </h4>
                            <h4 className="ml-5">
                                <FaArrowRight />
                            </h4>
                        </button>
                        </div>
                    </div>
                </div>
                <div className="w-[300px]  hover:shadow-lg duration-500 p-5 mx-2 rounded-lg">
                    <div className="flex justify-center items-center border bg-blue-300 rounded-full w-[200px] h-[200px] my-5 mx-3">
                        <Image
                            className="rounded-full bg-white h-[150px] w-[150px] p-2"
                            height={50}
                            width={50}
                            src={safe}
                            alt="Card image"
                        ></Image>
                    </div>
                    <div>
                        <h1 className="text-xl text-center">Safe</h1>
                        <p className="text-center">
                            <small>Exprience and Dedicated Teachars</small>
                        </p>
                        <div className="flex justify-center">
                        <button className="font-semibold flex  items-center mt-5 ">
                            <h4>Read More </h4>
                            <h4 className="ml-5">
                                <FaArrowRight />
                            </h4>
                        </button>
                        </div>
                    </div>
                </div>
                <div className="w-[300px]  hover:shadow-lg duration-500 p-5 mx-2 rounded-lg">
                    <div className=" flex justify-center items-center border bg-blue-500 rounded-full w-[200px] h-[200px] my-5 mx-3">
                        <Image
                            className="rounded-full bg-white h-[150px] w-[150px] p-2"
                            height={50}
                            width={50}
                            src={lowfee}
                            alt="Card image"
                        ></Image>
                    </div>
                    <div>
                        <h1 className="text-xl text-center">Low Fee</h1>
                        <p className="text-center">
                            <small>Non-Profit Making and Welfare Organization</small>
                        </p>
                        <div className="flex justify-center">
                        <button className="font-semibold flex  items-center mt-5 ">
                            <h4>Read More </h4>
                            <h4 className="ml-5">
                                <FaArrowRight />
                            </h4>
                        </button>
                        </div>
                    </div>
                </div>
                <div className="w-[300px]  hover:shadow-lg duration-500 p-5 mx-2 rounded-lg">
                    <div className=" flex justify-center items-center border bg-gray-500 rounded-full w-[200px] h-[200px] my-5 mx-3">
                        <Image
                            className="rounded-full bg-white h-[150px] w-[150px] p-2"
                            height={50}
                            width={50}
                            src={activities}
                            alt="Card image"
                        ></Image>
                    </div>
                    <div>
                        <h1 className="text-xl text-center">Activities</h1>
                        <p className="text-center">
                            <small>Co-curricular and external Activities</small>
                        </p>
                        <div className="flex justify-center">
                        <button className="font-semibold flex  items-center mt-5 ">
                            <h4>Read More </h4>
                            <h4 className="ml-5">
                                <FaArrowRight />
                            </h4>
                        </button>
                        </div>
                    </div>
                </div>

                <div className="w-[300px]  hover:shadow-lg duration-500 p-5 mx-2 rounded-lg ">
                    <div className=" flex justify-center items-center border bg-teal-300 rounded-full w-[200px] h-[200px] my-5 mx-3 ">
                        <Image
                            className="rounded-full bg-white h-[150px] w-[150px] p-2  "
                            height={50}
                            width={50}
                            src={quicksupport}
                            alt="Card image"
                        ></Image>
                    </div>
                    <div>
                        <h1 className="text-xl text-center">Quick Support</h1>
                        <p className="text-center">
                            <small>Transport</small>
                        </p>
                        <div className="flex justify-center">
                        <button className="font-semibold flex  items-center mt-5 ">
                            <h4>Read More</h4>
                            <h4 className="ml-5">
                                <FaArrowRight />
                            </h4>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;