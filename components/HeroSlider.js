import Link from 'next/link'
import React from 'react'

function HeroSlider() {
    return (
        <div id="home" className="hero-slider owl-carousel owl-theme">
        <div className="single-hs-item item-bg1">
            <div className="d-table">
                <div className="d-tablecell">
                    <div className="hero-text">
                        <h1 className="h1">Mavie</h1>
                        <p>Your Ultimate Destination to Get Top-notch Medical Facilities at Discounted Rates</p>
                        <div className="slider-btn">
                            <Link href="/contact"><a className="custom-btn1">Contact</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="single-hs-item item-bg2">
            <div className="d-table">
                <div className="d-tablecell">
                    <div className="hero-text">
                        <h1  className="h1-2">1200+ Patients</h1>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div className="slider-btn">
                            <Link href="/contact"><a className="custom-btn1">Contact</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    )
}

export default HeroSlider
