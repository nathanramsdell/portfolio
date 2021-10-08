import Image from "next/image"

function Tiles() {

    // function changeBackground(e) {
    //     e.target.style.opacity = '1';
    //   }
    //   function originalOverlay(e) {
    //     e.target.style.opacity = '0';
    //   }
  
    

  
   
    
    return (

        
        <div className="">
            <div className="text-center">
                <h2 className="font-bold text-3xl pb-5">Recent Work</h2>
            </div>
            <div className="grid lg:grid-cols-2  lg:grid-rows-2 gap-5 mx-auto text-white  mt-8  ">
                <div>
                    <a href="" className="project-wrapper shadow-md" id="project-wrapper"  class="project-wrapper yes">
                        
                        <img src="https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/got-flow.png" alt="lollipop" className="recent-work-img"></img>
                        <h4  className="current font-bold text-xl text-purple-300 mb-3" >Professinal Site Builds</h4>
                        <p className="current" >I have created and launched dozens of websites for companies across the United States and Canada.</p>
                        <div className="overlay"></div>
                    </a>
                </div>

                <div>
                    <a href="" className="project-wrapper shadow-md" >
                        
                        <img src="https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/portfolio-about.png" alt="lollipop" className="recent-work-img"></img>
                        <h4  className="current font-bold text-xl text-purple-300 mb-3 " >This Portfolio</h4>
                        <p className="current" >I created this portfolio using Next.JS and Tailwind CSS. The contact form is fully functional and was integrated with Sendgrid.</p>
                        <div className="overlay" ></div>
                    </a>
                </div>

                <div>
                    <a href="" className="project-wrapper shadow-md">
                        
                        <img src="https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/naterbook1.png" alt="lollipop" className="recent-work-img"></img>
                        <h4 className="current font-bold text-xl text-purple-300 mb-3">NaterBook</h4>
                        <p className="current">Naterbook was an web application built using Next.JS. This application allows users to login through Facebook authenication and post text and images to one another. All information was sent and pulled from Google Firebase. </p>
                        <div className="overlay" ></div>
                    </a>
                </div>

                <div>
                    <a href="" className="project-wrapper shadow-md">
                        
                        <img src="https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/service-img-4.jpeg" alt="lollipop" className="recent-work-img"></img>
                        <h4 className="current font-bold text-xl text-purple-300 mb-3">WordPress Plugins & Theme Development</h4>
                        <p className="current">I have created countless plugin to be used on WordPress sites. Plugins ranged from a simple YouTube Subscriber count to a current weather widget for your specified location. </p>
                        <div className="overlay" ></div>
                    </a>
                </div>

       
            
               

            </div>
                <div className="text-center mt-5">
                    <a href="https://github.com/nathanramsdell/" target="_blank"><button className="py-2 px-6 border-purple-500 font-thin mt-4 rounded-full border-solid border-2  trasnition transition-colors hover:bg-purple-500 hover:text-white ">See My Github</button></a>
                </div>
        </div>
    )
}



export default Tiles
