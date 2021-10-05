import Image from "next/image"

function Tiles() {

    function changeBackground(e) {
        e.target.style.opacity = '1';
      }
      function originalOverlay(e) {
        e.target.style.opacity = '0';
      }

    
    return (

        
        <div className="">
            <div className="text-center">
                <h2 className="font-bold text-3xl pb-5">Recent Work</h2>
            </div>
            <div className="grid lg:grid-cols-3  lg:grid-rows-2 gap-5 mx-auto text-white  mt-8  ">
                <div>
                    <a href="#" className="project-wrapper">
                        <div className="overlay" onMouseOver={changeBackground} onMouseLeave={originalOverlay}></div>
                        <img src="https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/service-img-1.jpeg" alt="lollipop" className="recent-work-img"></img>
                        <h4 onMouseOver={changeBackground} onMouseLeave={originalOverlay}>Lollipop Mobile App</h4>
                        <p onMouseOver={changeBackground} onMouseLeave={originalOverlay}>App Design</p>
                        <div>
                            <div>See Project</div>
                        </div>
                    </a>
                </div>

                <div>
                    <a href="#" className="project-wrapper">
                        <div className="overlay" onMouseOver={changeBackground} onMouseLeave={originalOverlay} ></div>
                        <img src="https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/service-img-2.jpeg" alt="lollipop" className="recent-work-img"></img>
                        <h4>Lollipop Mobile App</h4>
                        <p>App Design</p>
                        <div>
                            <div>See Project</div>
                        </div>
                    </a>
                </div>

                <div>
                    <a href="#" className="project-wrapper">
                        <div className="overlay" onMouseOver={changeBackground} onMouseLeave={originalOverlay}></div>
                        <img src="https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/service-image-3.jpeg" alt="lollipop" className="recent-work-img"></img>
                        <h4>Lollipop Mobile App</h4>
                        <p>App Design</p>
                        <div>
                            <div>See Project</div>
                        </div>
                    </a>
                </div>

                <div>
                    <a href="#" className="project-wrapper">
                        <div className="overlay" onMouseOver={changeBackground} onMouseLeave={originalOverlay}></div>
                        <img src="https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/service-img-4.jpeg" alt="lollipop" className="recent-work-img"></img>
                        <h4>Lollipop Mobile App</h4>
                        <p>App Design</p>
                        <div>
                            <div>See Project</div>
                        </div>
                    </a>
                </div>

                <div>
                    <a href="#" className="project-wrapper">
                        <div className="overlay" onMouseOver={changeBackground} onMouseLeave={originalOverlay}></div>
                        <img src="https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/service-img-5.jpeg" alt="lollipop" className="recent-work-img"></img>
                        <h4>Lollipop Mobile App</h4>
                        <p>App Design</p>
                        <div>
                            <div>See Project</div>
                        </div>
                    </a>
                </div>

                <div>
                    <a href="#" className="project-wrapper text-white">
                        <div className="overlay" onMouseOver={changeBackground} onMouseLeave={originalOverlay}></div>
                        <img src="https://portfolio-images-nathan-ramsdell.s3.us-east-2.amazonaws.com/images/service-img-6.jpeg" alt="lollipop" className="recent-work-img"></img>
                        <h4>Lollipop Mobile App</h4>
                        <p>App Design</p>
                        <div>
                            <div>See Project</div>
                        </div>
                    </a>
                </div>
            
               

            </div>
                <div className="text-center">
                    <button className="py-2 px-6 border-purple-500 font-thin mt-4 rounded-full border-solid border-2  trasnition transition-colors hover:bg-purple-500 hover:text-white "><a href="#about">See all projects</a></button>
                </div>
        </div>
    )
}



export default Tiles
