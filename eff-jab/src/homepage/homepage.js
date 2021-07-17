import React, { Component } from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import image from './homepage.png'; 
import './homepage.css'

const Home=()=>{
    return(
            <div class='ContainerHolder'>
                <Navbar/>

                <div id="__p__welcome_to_eff_jab" >
                    Welcome to Eff_Jab<br/><br/><br/>
                </div>

                <img src={image} id="banner_version2_1" />

                <div id="__p__eff_jab_presents_to_you_efficient_vaccination_drive_and_getting_vaccinated_from_the_comfort_of_your_home" >
                    <br/>Eff_Jab presents to you efficient vaccination drive<br/> and getting vaccinated from the comfort of your home <br/>
                </div>

                <Footer/>
            </div>
    )
}

export default Home;