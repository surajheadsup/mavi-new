import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Navbar from '../components/navbar'
import SectionTitle from '../components/SectionTitle'
import SingleService from '../components/SingleService'
import styles from '../styles/Home.module.css'
import Service1 from '../public/icons/service1.png';
import Service2 from '../public/icons/service2.png';
import Service3 from '../public/icons/service3.png';
import Service4 from '../public/icons/service4.png';
import Counter from '../components/Counter'
import Expertise from '../components/Expertise'
import Appoinment from '../components/Appoinment'
import Footer from '../components/footer'
import HeroSlider from '../components/HeroSlider'

 const Home = () => {
  return (<>
    <Navbar/>
    <div className="mediz-page-wrapper" id="mediz-page-wrapper">
                <div className="gdlr-core-page-builder-body">
                    <div className="gdlr-core-pbf-wrapper " style={{padding : 0}}>
                        <div className="gdlr-core-pbf-background-wrap" style={{backgroundColor : '#17449e'}}></div>
                        <div className="gdlr-core-pbf-wrapper-content gdlr-core-js ">
                            <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-pbf-wrapper-full-no-space">
                                <div className="gdlr-core-pbf-element">
                                    <div className="gdlr-core-revolution-slider-item gdlr-core-item-pdlr gdlr-core-item-pdb " style={{paddingBottom : 0}}>
                                        <p className="rs-p-wp-fix"></p>
                                        <HeroSlider/>
                                        {/* <rs-module-wrap id="rev_slider_2_1_wrapper" data-source="gallery" style={{background:'transparent',padding:0,margin:'0px auto',marginTop:0, marginBottom:0}}>
                                            <rs-module id="rev_slider_2_1" style={{display : 'none'}} data-version="6.1.5">
                                                <rs-slides>
                                                    <rs-slide data-key="rs-3" data-title="Slide" data-thumb="#" data-anim="ei:d;eo:d;s:1000;r:0;t:fade;sl:0;">
                                                        <img src="upload/slider-hospital-1-1-2.jpg" title="slider-hospital-1-1" width="1800" height="900" className="rev-slidebg" data-no-retina/>
                                                        <rs-layer id="slider-2-slide-3-layer-3" data-type="text" data-rsp_ch="on" data-xy="xo:15px,15px,15px,47px;yo:162px,162px,162px,107px;" data-text="w:normal;s:125,125,125,61;l:125,125,125,46;fw:600;a:left,left,left,center;" data-frame_1="st:250;sR:250;" data-frame_999="o:0;st:w;sR:8450;" style={{zIndex:11,fontFamily:'Poppins'}}>Mavie
                                                        </rs-layer>
                                                        <rs-layer id="slider-2-slide-3-layer-5" data-type="text" data-rsp_ch="on" data-xy="xo:22px,22px,22px,50px;yo:359px,359px,359px,211px;" data-text="w:normal;s:17;l:28;fw:300;" data-dim="w:548px,548px,548px,377px;h:84px,84px,84px,auto;" data-frame_1="st:770;sR:770;" data-frame_999="o:0;st:w;sR:7930;" style={{zIndex:13,fontFamily:'Poppins'}}>Your Ultimate Destination to Get Top-notch Medical Facilities at Discounted Rates
                                                            <br />
                                                        </rs-layer>
                                                        <rs-layer id="slider-2-slide-3-layer-6" data-type="text" data-color="#bbd1ff" data-rsp_ch="on" data-xy="xo:21px,21px,21px,50px;yo:297px,297px,297px,162px;" data-text="w:normal;s:34,34,34,24;l:34;fw:300;a:left,left,left,center;" data-frame_1="st:510;sR:510;" data-frame_999="o:0;st:w;sR:8190;" style={{zIndex:12,fontFamily:'Poppins'}}>Medical Center in London
                                                        </rs-layer>
                                                        <rs-layer id="slider-2-slide-3-layer-8" className="rev-btn rev-contact-now" data-type="button" data-rsp_ch="on" data-xy="xo:23px,23px,23px,50px;yo:447px,447px,447px,319px;" data-text="w:normal;s:13;l:13;ls:1px;fw:700;" data-dim="minh:0px,0px,0px,none;" data-padding="t:20,20,20,17;r:30,30,30,25;b:23,23,23,20;l:30,30,30,25;" data-border="bor:36px,36px,36px,36px;" data-frame_1="st:1050;sR:1050;" data-frame_999="o:0;st:w;sR:7650;" data-frame_hover="c:#d8eaff;bgc:#fff;bor:36px,36px,36px,36px;" style={{textTransform : "uppercase", background : 'linear-gradient(90deg, rgba(20,65,156,1) 0%, rgba(45,105,196,1) 100%)', zIndex : 15, fontFamily :'Poppins'}}>Contact Now
                                                        </rs-layer>
                                                        <rs-layer id="slider-2-slide-3-layer-9" data-type="shape" data-rsp_ch="on" data-xy="xo:225px,225px,225px,83px;yo:472px,472px,472px,176px;" data-text="w:normal;s:20,20,20,7;l:0,0,0,9;" data-dim="w:99px,99px,99px,37px;h:2px,2px,2px,1px;" data-vbility="t,t,t,f" data-frame_1="st:1350;sR:1350;" data-frame_999="o:0;st:w;sR:7350;" style={{zIndex:11,fontFamily:'Poppins'}}>
                                                        </rs-layer>
                                                    </rs-slide>
                                                    <rs-slide data-key="rs-5" data-title="Slide" data-thumb="#" data-anim="ei:d;eo:d;s:1000;r:0;t:fade;sl:0;">
                                                        <img src="upload/slider-hospital-2-1-n.jpg" title="slider-hospital-2-1-n" width="1800" height="900" className="rev-slidebg" data-no-retina/>
                                                        <rs-layer id="slider-2-slide-5-layer-3" data-type="text" data-rsp_ch="on" data-xy="x:l,l,l,c;xo:607px,607px,607px,0;yo:164px,164px,164px,109px;" data-text="w:normal;s:71,71,71,41;l:125,125,125,46;fw:700;a:left,left,left,center;" data-frame_1="st:250;sR:250;" data-frame_999="o:0;st:w;sR:8450;" style={{zIndex:11,fontFamily:'Poppins'}}>100,000+ Patients
                                                        </rs-layer>
                                                        <rs-layer id="slider-2-slide-5-layer-5" data-type="text" data-rsp_ch="on" data-xy="x:l,l,l,c;xo:614px,614px,614px,0;yo:348px,348px,348px,215px;" data-text="w:normal;s:17;l:28;fw:300;a:left,left,left,center;" data-dim="w:548px,548px,548px,358px;h:84px,84px,84px,auto;" data-frame_1="st:770;sR:770;" data-frame_999="o:0;st:w;sR:7930;" style={{zIndex:13,fontFamily:'Poppins'}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                                            <br />
                                                        </rs-layer>
                                                        <rs-layer id="slider-2-slide-5-layer-6" data-type="text" data-color="#bbd1ff" data-rsp_ch="on" data-xy="x:l,l,l,c;xo:613px,613px,613px,0;yo:281px,281px,281px,162px;" data-text="w:normal;s:34,34,34,23;l:34;fw:300;a:left,left,left,center;" data-frame_1="st:510;sR:510;" data-frame_999="o:0;st:w;sR:8190;" style={{zIndex:12,fontFamily:'Poppins'}}>Trust in our hospital
                                                        </rs-layer>
                                                        <rs-layer id="slider-2-slide-5-layer-8" className="rev-btn rev-contact-now" data-type="button" data-rsp_ch="on" data-xy="x:l,l,l,c;xo:613px,613px,613px,0;yo:438px,438px,438px,327px;" data-text="w:normal;s:13;l:13;ls:1px;fw:700;" data-dim="minh:0px,0px,0px,none;" data-padding="t:20,20,20,17;r:30,30,30,25;b:23,23,23,20;l:30,30,30,25;" data-border="bor:36px,36px,36px,36px;" data-frame_1="st:1050;sR:1050;" data-frame_999="o:0;st:w;sR:7650;" data-frame_hover="c:#d8eaff;bgc:#fff;bor:36px,36px,36px,36px;"  style={{textTransform : "uppercase", background : 'linear-gradient(90deg, rgba(20,65,156,1) 0%, rgba(45,105,196,1) 100%)', zIndex : 15, fontFamily :'Poppins'}}>Contact Now
                                                        </rs-layer>
                                                        <rs-layer id="slider-2-slide-5-layer-9" data-type="shape" data-rsp_ch="on" data-xy="xo:807px,807px,807px,302px;yo:465px,465px,465px,173px;" data-text="w:normal;s:20,20,20,7;l:0,0,0,9;" data-dim="w:99px,99px,99px,37px;h:2px,2px,2px,1px;" data-vbility="t,t,t,f" data-frame_1="st:1350;sR:1350;" data-frame_999="o:0;st:w;sR:7350;" style={{zIndex:11,fontFamily:'Poppins'}}>
                                                        </rs-layer>
                                                    </rs-slide>
                                                </rs-slides>
                                                <rs-progress className="rs-bottom" style={{visibility : 'hidden !important'}}></rs-progress>
                                            </rs-module>

                                        </rs-module-wrap> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gdlr-core-pbf-wrapper gdlr-main" id="gdlr-core-wrapper-1">
                        <div className="gdlr-core-pbf-background-wrap gdlr-background">
                            <div className="gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js" style={{backgroundSize: 'cover', backgroundPosition: 'center' }} data-parallax-speed="0"></div>
                        </div>
                        <div className="gdlr-core-pbf-wrapper-content gdlr-core-js ">
                            <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
                                <div className="gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first" id="gdlr-core-column-83795">
                                    <div className="gdlr-core-pbf-column-content-margin gdlr-core-js " style={{padding: '10px 0px 0px 10px'}} data-sync-height="Height Mediz Top BG">
                                        <div className="gdlr-core-pbf-background-wrap"></div>
                                        <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js  gdlr-core-sync-height-content">
                                            <div className="gdlr-core-pbf-element">
                                                <div className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr" style={{paddingBottom : 25}}>
                                                    <div className="gdlr-core-title-item-left-image gdlr-core-media-image" style={{marginTop: -4, marginRight: 15, marginLeft: 0}}><img src="upload/Top-icon1.png" alt="" width="42" height="32" title="Top-icon1" /></div>
                                                    <div className="gdlr-core-title-item-left-image-wrap">
                                                        <div className="gdlr-core-title-item-title-wrap ">
                                                            <h3 className="gdlr-core-title-item-title gdlr-core-skin-title " style={{fontSize: 22, fontWeight: 600 , letterSpacing: 0 ,textTransform: 'none', color: '#ffffff' }}>About us<span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" ></span></h3></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="gdlr-core-pbf-element">
                                                <div className="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align gdlr-core-no-p-space" style={{padding:25}}>
                                                    <div className="gdlr-core-text-box-item-content" style={{fontSize: 16, fontWeight: 400 , letterSpacing: 0 ,textTransform: 'none', color: '#abcbff' }}>
                                                        <p style={{textAlign : 'justify'}}>
                                                        <strong style={{color : '#fff'}}>“MaVie”</strong> means <strong style={{color : '#fff'}}>“My Life” </strong> implying, Each and Every Life holds value for us. We are an online aggregator of Healthcare service providers that fits in every budget from less earning families to the higher earners.
                                                         MaVie provides Health-care with the aim of standardization on various measures like discounted OPD appointments, 
                                                        instant discount on medicines, check-ups, surgery, emergency case, equipment, and all things related to medical services. 
                                                        MaVie provides great discounts with medical insurance and appointment bookings with ease.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Services */}
                     <div className="gdlr-core-pbf-wrapper " style={{padding: '70px 0px 40px 0px'}} data-skin="Mediz HP Column SVC">
                        <div className="gdlr-core-pbf-background-wrap"></div>
                        <div className="gdlr-core-pbf-background-wrap" style={{top : 70}}>
                            <div className="gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js gdlr-core-custom" data-parallax-speed="0"></div>
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
                    </div>
                    <Counter/>
                    {/* Appoinment Form */}
                    <div className="gdlr-core-pbf-wrapper " style={{padding : 0}} data-skin="Mediz HP Column SVS MId">
                        <div className="gdlr-core-pbf-background-wrap" style={{backgroundColor: '#f5f5f5'}}></div>
                        <div className="gdlr-core-pbf-wrapper-content gdlr-core-js ">
                            <div className="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
                                <div className="gdlr-core-pbf-column gdlr-core-column-30 gdlr-core-column-first" id="gdlr-core-column-28192">
                                    <div className="gdlr-core-pbf-column-content-margin gdlr-core-js " style={{padding: '175px 60px 55px 0px'}}>
                                        <div className="gdlr-core-pbf-background-wrap"></div>
                                        <div className="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                            <div className="gdlr-core-pbf-element">
                                                <div className="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-bottom gdlr-core-item-pdlr" style={{paddingBottom : 45}}>
                                                    <div className="gdlr-core-title-item-title-wrap ">
                                                        <h3 className="gdlr-core-title-item-title gdlr-core-skin-title " style={{fontSize: 32, fontWeight: 700 ,letterSpacing: 0,textTransform: 'none' ,color: '#353535' }}>Our Expertise<span className="gdlr-core-title-item-title-side-border gdlr-core-style-lower gdlr-title-span-line" ></span><span className="gdlr-core-title-item-title-divider gdlr-core-skin-divider" ></span></h3></div>
                                                </div>
                                            </div>
                                            <Expertise/>
                                            {/* <Expertise/> */}
                                            {/* <Expertise/> */}
                                        </div>
                                    </div>
                                </div>
                               <Appoinment/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
  </>

  )
}

export default Home;