import React from 'react';

import placeholderImage from '../component_media/placeholder.jpg';

const OurServices = () => {
    return(
        <div className="our-services" aria-labelledby="our-services-heading">
            <div className="our-services-inner">
                <div 
                    id="our-services-heading" 
                    className="heading-text"
                    role="heading"
                    aria-level="2"
                >
                    <div className="heading-text-highlight" aria-hidden="true"></div>
                    Our <span className="green-highlight">Services</span>
                </div>
                <div data-aos="fade-up" className="our-services-sub">
                    {/* Marine and Logistics */}
                    <div className="our-services-sub-entry" role="article" aria-labelledby="marine-logistics-heading">
                        <div className="our-services-sub-image">
                            <img
                                src={placeholderImage}
                                img-src="https://res.cloudinary.com/dhbj763qc/image/upload/v1716035900/zsienergy/service_05_in_fgglgn.jpg"
                                alt="Marine view"
                                lazy=""
                            />
                        </div>
                        <div className="our-services-sub-text" id="marine-logistics-heading">
                            Marine and Logistics Services<br />
                            Marine Fuel supply and Bunkering Services
                        </div>
                    </div>
                    {/* Pipe Fabrication */}
                    <div data-aos="fade-up" className="our-services-sub-entry" role="article" aria-labelledby="pipe-fabrication-heading">
                        <div className="our-services-sub-image">
                            <img
                                src={placeholderImage}
                                img-src="https://res.cloudinary.com/dhbj763qc/image/upload/v1716037706/zsienergy/Pipe_20Fabrication_roqbhw.jpg"
                                alt="Pipe fabrication workshop"
                                lazy=""
                            />
                        </div>
                        <div className="our-services-sub-text" id="pipe-fabrication-heading">
                            Pipeline and Fabrication Services
                        </div>
                    </div>
                    {/* Civil Construction Works */}
                    <div data-aos="fade-up" className="our-services-sub-entry" role="article" aria-labelledby="civil-construction-heading">
                        <div className="our-services-sub-image">
                            <img
                                src={placeholderImage}
                                img-src="https://res.cloudinary.com/dhbj763qc/image/upload/v1717242853/zsienergy/civil_enginerring_works_q5bgcq.jpg"
                                alt="Civil construction project"
                                lazy=""
                            />
                        </div>
                        <div className="our-services-sub-text" id="civil-construction-heading">
                            Civil Engineering Works
                        </div>
                    </div>
                    {/* Consultancy and Procurement */}
                    <div data-aos="fade-up" className="our-services-sub-entry" role="article" aria-labelledby="consultancy-procurement-heading">
                        <div className="our-services-sub-image">
                            <img
                                src={placeholderImage}
                                img-src="https://res.cloudinary.com/dhbj763qc/image/upload/v1716038119/zsienergy/Consultants_kilhac.jpg"
                                alt="Consultancy"
                                lazy=""
                            />
                        </div>
                        <div className="our-services-sub-text" id="consultancy-procurement-heading">
                            Procurement Services<br />
                            Consultancy Services (Environmental Services, Supply Chain Management, Research and Development, Clean and Renewable Energy, etc).
                        </div>
                    </div>
                    {/* Information Technology */}
                    <div data-aos="fade-up" className="our-services-sub-entry" role="article" aria-labelledby="information-technology-heading">
                        <div className="our-services-sub-image">
                            <img
                                src={placeholderImage}
                                img-src="https://res.cloudinary.com/dhbj763qc/image/upload/v1716038509/zsienergy/EuroHPC_20entwickelt_20Supercomputer_20f_C3_BCr_20Europa_qu4aps.jpg"
                                alt="Information technology facility setup"
                                lazy=""
                            />
                        </div>
                        <div className="our-services-sub-text" id="information-technology-heading">
                            Information Technology
                        </div>
                    </div>
                    {/* Waste Management */}
                    <div data-aos="fade-up" className="our-services-sub-entry" role="article" aria-labelledby="waste-management-heading">
                        <div className="our-services-sub-image">
                            <img
                                src={placeholderImage}
                                img-src="https://res.cloudinary.com/dhbj763qc/image/upload/v1716038772/zsienergy/Abfall_Recyclinganlage_azthesmudger_Fotolia_10359498_Subscription_L_za2iri.jpg"
                                alt="Waste management facility"
                                lazy=""
                            />
                        </div>
                        <div className="our-services-sub-text" id="waste-management-heading">
                            Waste Management
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurServices;