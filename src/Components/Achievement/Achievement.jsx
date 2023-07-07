import React from "react";
import CountUp from "react-countup";

const bgStyle = {
    backgroundImage: `url("https://images.unsplash.com/photo-1447078806655-40579c2520d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80")`,
    backgroundColor: "rgba(0, 3, 32, 0.66)",
    backgroundBlendMode: "darken",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
};

const Achievement = () => {
    return (
        <div className="pb-12">
            <h1 className="text-center text-4xl uppercase font-semibold mt-14 md:mb-9 mb-5 text-red-500">
                Our Achievement
            </h1>
            <div style={bgStyle}>
                <div className="mx-auto px-6 py-12">
                    <div className="text-3xl font-black text-center text-white mb-4">
                        We are Happy For This
                    </div>
                    
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 container mx-auto lg:h-48 sm:h-72 items-center pb-28">
                    <div className="flex items-center justify-center border border-gray-400 py-3 rounded-xl mx-5 mb-2">
                        
                        <span className="text-3xl text-white font-black ml-3">
                            <CountUp start={0} end={10} duration={3.75} suffix={"+ "} />
                        </span>
                        <span className=" text-gray-300 text-2xl ml-3"> Award Own</span>
                    </div>
                    <div className="flex items-center justify-center border border-gray-400 py-3 rounded-xl mx-5 mb-2">
                   
                        <span className="text-3xl text-white font-black ml-3">
                            <CountUp start={0} end={5000} duration={3.75} suffix={"+"} />
                        </span>
                        <span className="text-xl text-gray-300 ml-3">  Daily Orders </span>
                    </div>
                    <div className="flex items-center justify-center border border-gray-400 py-3 rounded-xl mx-5 mb-2">
                       
                        <span className="text-3xl text-white font-black ml-3">
                            <CountUp start={0} end={99} duration={3.75} suffix={"+"} />
                        </span>
                        <span className="text-xl text-gray-300 ml-3">  Members </span>
                    </div>
                    <div className="flex items-center justify-center border border-gray-400 py-3 rounded-xl mx-5 mb-2">
                      
                        <span className="text-3xl text-white font-black ml-3">
                            <CountUp start={0} end={100} duration={3.75} suffix={"+"} />
                        </span>
                        <span className="text-xl text-gray-300 ml-3">  Menu & Dish </span>
                    </div>
                    <div className="flex items-center justify-center border border-gray-400 py-3 rounded-xl mx-5 mb-2">
                        
                      
                        <span className="text-3xl text-white font-black ml-3">
                            <CountUp start={0} end={100} duration={3.75} suffix={"+"} />
                        </span>
                        <span className="text-xl text-gray-300 ml-3">  Specialities  </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievement;
