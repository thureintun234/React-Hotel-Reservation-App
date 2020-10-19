import React from 'react'
import Banner from '../Components/Banner'
import Hero from '../Components/Hero'
import {Link} from 'react-router-dom'
import Services from '../Components/Services'
import FeaturedRooms from '../Components/FeaturedRooms'

function Home() {
    return (
        <>
        <Hero>
            <Banner title="luxurious rooms" subtitle="deluxe rooms strting at $299">
                <Link to="/rooms/" className="btn-primary">
                    our rooms
                </Link>
            </Banner>    
        </Hero>
        <Services />
        <FeaturedRooms />
        
        </>
    )
}

export default Home
