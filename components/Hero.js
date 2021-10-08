import Image from 'next/image'



function Hero() {

    return (
        <div class="relative">
        <div className="grid lg:grid-cols-2 ">
            {/* Left */}
            <div className="place-self-center relative">
                <div className="">
                    <h1 className=" text-5xl font-bold">I'm Nathan, a <span className="text-purple-500">Front-End</span><br></br>Web Developer</h1>
                    <p className="font-regular mt-3">My mission is to help your business grow by creating intuitive and interactive web applications.</p>
                    <button className="py-2 px-6 bg-purple-500 text-white mt-4 rounded-full"><a href="#services">Learn More</a></button>
                </div>
                <div className="large-bubble">
                <Image src="https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/bubble.png" alt="Large Bubble"
                    width={220}
                    height={220}
                    />
                </div>
                <div className="medium-bubble">
                <Image src="https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/bubble.png" alt="Large Bubble"
                    width={86}
                    height={86}
                    />
                </div>
                <div className="small-bubble">
                <Image src="https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/bubble.png" alt="Large Bubble"
                    width={48}
                    height={48}
                    />
                </div>
            </div>
            

            {/* Right */}
            <div className="relative text-center">
        
                    <div>
                    <iframe className="iframe-profile"src="https://embed.lottiefiles.com/animation/73810"></iframe>
                    </div>

                    
            
                    <div className="big-dots">
                    <Image src="https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/large-hero-dots.png" alt="dot background" 
                    width={132}
                    height={116} 
                    />
                    </div>
                    <div className="small-dots">
                    <Image src="https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/small-hero-dots.png" alt="dot background"
                    width={84}
                    height={68} />
                    </div>
            </div>
        </div>
        </div>
    )
}

export default Hero
