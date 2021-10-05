import Image from 'next/image'
import { FaFacebookF, FaTwitter, FaDribbble, FaLinkedin} from 'react-icons/fa';

function AboutMe() {
    return ( 
        <div className=" mx-auto about-me">       
            <div className="grid grid-cols-2 pb-12 ">
                {/* Left Seciton */}
                <div className="place-self-center">
                <h2 className="font-bold text-xl">Hi, I'm a freelance product designer from London, UK</h2>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque odio nunc, quis malesuada ligula lobortis nec. In ultricies tellus ut lectus ornare dictum. Sed porttitor dapibus velit, nec blandit arcu finibus quis. Etiam nulla felis, imperdiet a nulla eget, rhoncus imperdiet elit. Curabitur tristique mi vitae ipsum euismod porta euismod vitae lectus.</p><br></br>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum!</p>
                </div>
                <div >
                <div className="text-center">
                    <div className="">
                        <Image src="https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/about-me-profile.png" alt="Profile picture of author" className="rounded-full ring-4 ring-white ring-offset-0"
                        width={250}
                        height={250}
                        objectFit="cover"/>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold">Nathan Ramsdell</h4>
                    </div>
                    <div className="flex justify-center text-gray-400 mt-4 ">
                        <a href="#" className="mx-1 hover:text-gray-300">
                            <FaFacebookF className="text-[2.5rem]"/>
                        </a>
                        <a href="#" className="mx-1 hover:text-gray-300">
                            <FaTwitter  className="text-[2.5rem]"/>
                        </a>
                        <a href="#" className="mx-1 hover:text-gray-300">
                            <FaDribbble className="text-[2.5rem]"/>
                        </a>
                        <a href="https://www.linkedin.com/in/nathan-ramsdell/" className="mx-1 hover:text-gray-300">
                            <FaLinkedin className="text-[2.5rem]"/>
                        </a>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
        
    )
}

export default AboutMe
