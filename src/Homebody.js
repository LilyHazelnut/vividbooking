import React from 'react'
import './Homebody.css'
import NavBar from './NavBar'
import Image from './Hotel.jpg'
import Image2 from './breakfast.jpg'
import Image3 from './bed.jpg'

function HomeBody(){
    
    return(
      <div className = 'mainBody'>
        <NavBar />
          <div >
            <img src = {Image} alt = 'hotelImage'></img>
            <h1 className ='quote'>
              ROOM FOR YOU FOR YOUR SATISFACTION
            </h1>
          </div>          
          <div className = 'image-detail'>
                <img src = {Image2} className = 'block-image'></img>
                <div className = 'some-detail'>
                    <h1> Meal Satisfaction </h1>
                    <h3> We pay attention to every of your meal for the best experience</h3>
                </div>        
          </div>
          <div className ='image-detail'>
            <div className = 'some-detail'>
                <h1> Comfort Satisfaction </h1>
                <h3> We pay attention to your feels for the best experience</h3>
            </div>
            <img src = {Image3} className ='block-image'></img>
          </div>
          <div className = 'bottombar'>
            <h3>
              @VIVIDBOOKING co.ltd
            </h3>
          </div>
      </div>
    )
}

export default HomeBody

