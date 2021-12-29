import React from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import PageHeader from '../components/PageHeader'
import SectionTitle from '../components/SectionTitle'
import SingleService from '../components/SingleService'
import Subscribe from '../components/Subscribe'
import Service1 from '../public/icons/service1.png';
import Service2 from '../public/icons/service2.png';
import Service3 from '../public/icons/service3.png';
import Service4 from '../public/icons/service4.png';

function services() {
    return (
        <>
            <Navbar/>
                <PageHeader title={`Our Services`}  className={`service-header-bg`}/>
                <div className="gdlr-core-pbf-wrapper mediz-body" style={{padding: '70px 0px 0px 0px'}} data-skin="Mediz HP Column SVC">
                        <div className="gdlr-core-pbf-background-wrap"></div>
                        <div className="gdlr-core-pbf-background-wrap" style={{top : 70}}>
                            <div className="gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js" data-parallax-speed="0"></div>
                        </div>
                        <div className="gdlr-core-pbf-wrapper-content gdlr-core-js ">
                            <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
                                <div className="gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first" id="gdlr-core-column-92705">
                                  <SectionTitle title="Our Services"/>
                                </div>
                                <div className="gdlr-core-pbf-column gdlr-core-column-12" id="gdlr-core-column-1822">
                                  <SingleService title={'Free Healthcare Assistance [Telephonic]'}  src={Service1}/>
                                </div>
                                <div className="gdlr-core-pbf-column gdlr-core-column-12" id="gdlr-core-column-46664">
                                  <SingleService title={'Discounts on OPD & Check-ups'}  src={Service4}/>
                                </div>
                                <div className="gdlr-core-pbf-column gdlr-core-column-12" id="gdlr-core-column-46663">
                                  <SingleService title={'Discounts on Lab test'}  src={Service4}/>
                                </div>
                                
                                <div className="gdlr-core-pbf-column gdlr-core-column-12" id="gdlr-core-column-46663">
                                  <SingleService title={'Discounts on surgeries and emergency cases'}  src={Service4}/>
                                </div>
                                <div className="gdlr-core-pbf-column gdlr-core-column-12" id="gdlr-core-column-46664">
                                  <SingleService title={'Avail Hygienic Facilities Served at your Convenience'}  src={Service4}/>
                                </div>
                                <div className="gdlr-core-pbf-column gdlr-core-column-12" id="gdlr-core-column-55419">
                                  <SingleService title={'Easy & Hassel-free Appointment with High Priority service'}  src={Service2}/>
                                </div>
                                <div className="gdlr-core-pbf-column gdlr-core-column-12" id="gdlr-core-column-67381">
                                  <SingleService title={'Avail High Quality & High Priority Emergency Facilities'}  src={Service3}/>
                                </div>
                                
                                <div className="gdlr-core-pbf-column gdlr-core-column-12" id="gdlr-core-column-46663">
                                  <SingleService title={'Low-cost Health insurance [For patients/customers]'}  src={Service4}/>
                                </div>
                                
                                <div className="gdlr-core-pbf-column gdlr-core-column-12" id="gdlr-core-column-46664">
                                  <SingleService title={'Discounts on medical equipment and tests'}  src={Service4}/>
                                </div>
                                <div className="gdlr-core-pbf-column gdlr-core-column-12" id="gdlr-core-column-46664">
                                  <SingleService title={'Doorstep Delivery with our Collaborated Medical Service Providers [according to service availability]'}  src={Service4}/>
                                </div>
                                <div className="gdlr-core-pbf-column gdlr-core-column-12" id="gdlr-core-column-46664">
                                  <SingleService title={'Free BP & Temperature Check-up at your Door-steps [convenience should be paid only by customer]'}  src={Service4}/>
                                </div>
                               
                            </div>
                        </div>
                        <Subscribe/>
                    </div>
                   
            <Footer/>
        </>
    )
}

export default services
