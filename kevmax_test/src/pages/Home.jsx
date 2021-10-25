import React from 'react'
import AvisCommentSection from '../components/AvisCommentSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import RecentHouses from '../components/RecentHouses'
import AboutImmo from '../components/AboutImmo'
    
const Home = () => {
    return (
        <div>
            <HeroSection/>
            <AboutImmo/>
            <RecentHouses/>
            <AvisCommentSection/>
            <ContactSection/>
            <Footer/>
        </div>
    )
}

export default Home
