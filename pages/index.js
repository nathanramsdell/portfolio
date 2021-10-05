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
    <div className="custom-container">
    <Head>
      <title>NaRa</title>
    </Head>
    
    <div className="flex justify-center section-margin-bottom">
      <Hero />
    </div>
    <div className="section-margin-bottom">
      <Services />
    </div>
    <div className="section-margin-bottom">
      <Tiles />
    </div>
    <div className="section-margin-bottom">
      <Specialization />
    </div>
    <div id="about" className="section-margin-bottom">
      <AboutMe />
    </div>
    <div className="section-margin-bottom">
      <Skills />
    </div>
    
    
    <Contactform/>
</div>
  );
}
