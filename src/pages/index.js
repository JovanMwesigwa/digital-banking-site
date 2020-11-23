import React from 'react'
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';


const Home = (props) => {

    const [ isOpen, setIsOpen ] = React.useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
  return(
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar isOpen={isOpen} toggle={toggle} />
        <HeroSection />
    </>
   )

 }

export default Home