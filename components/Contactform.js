import { useState } from 'react';
import styles from '../styles/Home.module.css';
import {MdEmail} from 'react-icons/md';
import { FaPhoneAlt, FaLocationArrow } from 'react-icons/fa';


function Contactform() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false)
    const handleSubmit = (e) => {
    e.preventDefault()
    
    const data = {
      name,
      email,
      message
    }
    console.log(data);
    fetch('/api/contact', {
      method: 'post',
      body: JSON.stringify(data),
    });
    setName("");
    setEmail("");
    setMessage("");
    
  };
    return (
            <div className="my-12">
              <div className="contact-form-container shadow-lg rounded-lg py-12">
                <main>
                <div>
                  <h1 className="text-3xl font-bold p-5 text-white">Contact Me to <span className="text-purple-500">Learn More!</span></h1>
                </div>
                  <div className="flex flex-col md:flex-row">
                    <div className="w-[100%] md:w-6/12 p-5 mx-auto md:mx-0 ">
                      <form  onSubmit={handleSubmit} className="flex flex-col">
                        {/* NAME */}
                        <div className="py-2">
                          <input
                            id="name"
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e)=>{setName(e.target.value)}}
                            required
                            className="appearance-none block w-full bg-gray-100 text-grey-darker rounded py-5 px-4 mb-3"
                          />
                        </div>
                        {/* EMAIL */}
                        <div className="py-2">
                          <input
                            id="email"
                            type="email"
                            value={email}
                            placeholder="Your Email"
                            onChange={(e)=>{setEmail(e.target.value)}}
                            required
                            className="appearance-none block w-full bg-gray-100 text-grey-darker rounded py-5 px-4 mb-3"
                          />
                        </div>
                        {/* Message */}
                        <div className="py-2">
                          <textarea
                            id="message"
                            type="text"
                            value={message}
                            rows="5"
                            placeholder="Tell me why you're reaching out!"
                            onChange={(e)=>{setMessage(e.target.value)}}
                            className="appearance-none block w-full bg-gray-100 text-grey-darker rounded py-5 px-4 mb-3"
                            required
                          />
                        </div>
                        {/* button */}
                        <div className="appearance-none block bg-purple-500 hover:bg-purple-600 text-white rounded-full w-[200px] py-5 px-4 mb-3 text-center">
                          <button type="submit">Send Now</button>
                        </div>
                      </form>
                    </div>
                    
                    {/* Right Section of Contact form */}
                    <div className="flex flex-col justify-center mx-0 md:mx-auto ">
                      <div className="flex items-center space-x-2 p-4 mb-2">
                        <MdEmail className="text-purple-500 h-6 w-6 flex"/>
                        <p className="flex text-white text-xl"><a href="mailto:ramsdell.28@gmail.com">ramsdell.28@gmail.com</a></p>
                      </div>
                      <div className="flex items-center space-x-2 p-4 mb-2">
                        <FaPhoneAlt className="text-purple-500 h-5 w-5 flex"/>
                        <p className="flex text-white text-xl"><a href="tel:+4144165700">414-416-5700</a></p>
                      </div>
                      <div className="flex items-center space-x-2 p-4">
                        <FaLocationArrow className="text-purple-500 h-5 w-5 flex"/>
                        <p className="flex text-white text-xl">Minneapolis, MN</p>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
    )
}

export default Contactform