import React from 'react'

function Header() {
    return (

        <div class="flex w-10/12 mx-auto">
            {/* left side */}
            <div className="flex">
                <h1>NaRa</h1>
            </div>
            {/* right side */}
            <div className="flex justify-end flex-grow" >
                <div className="flex space-x-6">
                <h1>Home</h1>
                <h1>About</h1>
                <h1>Skills</h1>
                <h1>Services</h1>
                <h1>Projects</h1>
                <h1>Testimonials</h1>
                <h1>Blog</h1>
                <h1>Contact</h1>
                </div>
            </div>
        </div>
    )
}

export default Header
