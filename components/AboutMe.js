import Image from 'next/image'
import { FaGithub, FaLinkedin} from 'react-icons/fa';

function AboutMe() {
    return ( 
        <div className=" mx-auto about-me">       
            <div className="grid md:grid-cols-2 pb-12 ">
                {/* Left Seciton */}
                <div className="place-self-center">
                <h2 className="font-bold text-xl mb-3">Hi, I'm a Web Developer from Minneapolis, MN</h2>
                <p className="text-sm">Since I began working in dev, I have also grown to appreciate so much more about the field. There is a really great amount of variety in what I can do every day, from managing support tickets to creating complete web applications. I love how I get the opportunity to meet new people often. 
Most of all, I love being a part of companies’ success. Through web development, I am so grateful that I am able to work with others on what they are passionate about, and do everything I can to help them be successful in that. </p>
                </div>
                <div >
                <div className="text-center mt-5 md:mt-0">
                    <div className="">
                        <iframe  className="iframe-about" src="https://embed.lottiefiles.com/animation/72178"></iframe>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold">Nathan Ramsdell</h4>
                    </div>
                    <div className="flex justify-center text-gray-400 mt-4 ">
                        <a href="https://github.com/nathanramsdell" target="_blank" className="mx-1 hover:text-gray-300">
                            <FaGithub className="text-[2.5rem]"/>
                        </a>
                        <a href="https://www.linkedin.com/in/nathan-ramsdell/" target="_blank" className="mx-1 hover:text-gray-300">
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
