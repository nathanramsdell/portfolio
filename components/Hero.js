import Image from 'next/image'
function Hero() {
    return (
        <div class="">
        <div className="grid grid-cols-2 ">
            {/* Left */}
            <div className="place-self-center">
                <div className="">
                    <h1 className=" text-5xl font-bold">I'm Nathan, a <span className="text-purple-500">Digital</span><br></br>Product Designer</h1>
                    <p className="font-thin mt-3">My mission is to help your business grow through my conversion-focused branding, design, marketing, and communication expertise.</p>
                    <button className="py-2 px-6 bg-purple-500 text-white mt-4 rounded-full"><a href="#about">Discover my work</a></button>
                </div>
            </div>
            

            {/* Right */}
            <div className="relative text-center">
                    <Image src="https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/portfolio-hero.png" alt="Profile picture of author"
                    width={380}
                    height={557}/>
            
                
                    <Image src="https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/large-hero-dots.png" alt="dot background" className="absolute top-[10%] "
                    width={132}
                    height={116} />
                
                
                    <Image src="https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/small-hero-dots.png" alt="dot background"
                    width={84}
                    height={68} />
                
            </div>
        </div>
        </div>
    )
}

export default Hero
