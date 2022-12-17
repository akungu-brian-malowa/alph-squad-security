import React, { useState } from 'react'
import HeroSection from '../componets/HeroSection';
import InfoSection from '../componets/InfoSection';
import { homeObjOne, homeObjTree, homeObjTwo } from '../componets/InfoSection/Data';
import Navbar from '../componets/Navbar';
import Sidebar from '../componets/Sidebar';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection />
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <InfoSection {...homeObjTree}/>
    </>
  )
}

export default Home