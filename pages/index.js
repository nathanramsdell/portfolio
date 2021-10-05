import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import Specialization from '../components/Specialization'
import Services from '../components/Services'
import Tiles from '../components/Tiles'
import Contactform from '../components/Contactform'


export default function Home() {
  return (
    <div className="">
    <Head>
      <title>NaRa</title>
    </Head>
    
    <div className=" flex justify-center">
    <Hero />
    </div>
    <Services />
    <Tiles />
    <Specialization />
    <div id="about">
    <AboutMe />
    </div>
    <Skills />
    
    
    
    <Contactform/>
</div>
  );
}
