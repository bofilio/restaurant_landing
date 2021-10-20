import React from 'react'
import '../css/top-restaurants.css'
import rest_img1 from '../imgs/restau1.png'
import rest_img2 from '../imgs/restau2.png'
import see_more_img from '../imgs/see_more.png'
const TopResaurants = () => {
    return (
        <section>
        <div className='d-flex restaurants-section '>
            <div className="heading">
                <div>some top restaurant for dining in or Take away!</div>
            </div>
            <div className="sub-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing cursus auctor eget
             sed phasellus senectus. Ut tellus donec vestibulum tristique leo bibendum in a, tincidunt.
              Volutpat metus id amet, nam hac magna accumsan. Nascetur ac tortor purus ultrices morbi tellus. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing cursus auctor eget sed.
            </div>
        </div>
        <div className="restau-grid d-flex align-items-center">
            <div className="restaurant">
                <img src={rest_img2} width="100%" alt="restau"/>
            </div>
            <div className="restaurant">
                <img src={rest_img1} width="100%"  alt="restau"/>
            </div>
            <div className="see-more">
                <img src={see_more_img} alt="see more"/>
            </div>
        </div>
        </section>
    )
}

export default TopResaurants
