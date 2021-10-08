import { FiPenTool } from 'react-icons/fi';
import { GoFileMedia } from 'react-icons/go';
import { HiLightBulb } from 'react-icons/hi';
import { FaWrench } from 'react-icons/fa';


function Services() {
    return (
        <div className=" mx-auto" id="services">
            {/* Top Text */}
            <div className="text-center">
                <h2 className="font-bold text-3xl pb-5">What I Do Well</h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6  mx-auto mt-8">
                <div className="px-5 py-7 service-card">
                <FiPenTool className="bg-pink-100 rounded-full h-[64px] w-[64px] p-[16px] text-pink-500 text-[32px] " />
                    <p className="text-md font-bold mb-3">Collaboration</p>
                    <p className="text-sm">It's recognised that design is a critical factor in creating successful products. I have experiece working with both dedicated design teams and individuals to bring ideas to life!</p>
                </div>
                <div className="px-5 py-7 service-card" class="service-card">
                <GoFileMedia className="text-purple-500 bg-purple-100 rounded-full h-[64px] w-[64px] p-[16px] text-[2rem]" />
                    <p className="text-md font-bold mb-3">Responsive Design</p>
                    <p className="text-sm">I am a mobile first web developer. I enjoy working with Bootstrap or Tailwind to expediate the creation proccess.</p>
                </div>
                <div className="px-5 py-7 service-card">
                    <HiLightBulb className="text-indigo-500 bg-indigo-100 rounded-full h-[64px] w-[64px] p-[16px] text-[2rem]"/>
                    <p className=" text-md font-bold mb-3">Performance</p>
                    <p className="text-sm">I have a strong understanding of web best practices. Many professinal projects required working with Google Core Metrics to improve speed scores.</p>
                </div>
                <div className="px-5 py-7 service-card" >
                    <FaWrench className="text-blue-500 bg-blue-100 rounded-full h-[64px] w-[64px] p-[16px] text-[2rem]"/>
                    <p className=" text-md">UI/UX</p>
                    <p className="text-sm">I have a strong understanding of web best practices. Many professinal projects required working with Google Core Metrics to improve speed scores.</p>
                </div>
                
                
            </div>
        </div>
    )
}

export default Services



            