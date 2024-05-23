import React from 'react';
import '../component_styles/home.css';

import TopBar from './TopBar_Component/TopBar';
import ClientSlideShow from './ClientSlideShow';
import Footer from './Footer';


const Home = () => {
  return (
    <div>
		{/*Top Bar*/}
		<TopBar/>

		{/*Main element*/}
		<main>
			{/*Hero section*/}
            <section aria-labelledby="about-us-heading">
                <div className="about-us-banner">
                    <img 
                        src="https://res.cloudinary.com/dhbj763qc/image/upload/v1716154295/zsienergy/grayscale_shit_lpmmk1.png" 
                        alt="Top Banner Thumbnail"
                        aria-describedby="banner-note"
                    />
                    <div className="about-us-banner-sub">
                        <div id="banner-note" className="banner-note">
                            We are a powerhouse of technology, creativity and expertise.
                        </div>                        
                    </div>
                </div>
                <div className="about-us-brief">
                    <div id="about-us-heading" className="heading-text">
                        About <span className="green-highlight">Us</span>
                        <div className="heading-text-highlight"></div>    
                    </div>
                    <p>
                        ZSI Energy Limited is a fully Nigerian owned oil and gas service company. Our primary
                        focus is to employ our specialized technical expertise and motivate our team of professionals in contributing positively to the Nigerian Petroleum and Energy main industry
                        in particular and West Africa in general.
                        <br />
                        We are a powerhouse of technology, creativity and expertise. We possess unrivaled
                        problem solving proficiency and acumen in the Petroleum industry.
                    </p>
                    <p>
                        The depth and variety of oil industry knowledge, experience and expertise available
                        within ZSI Energy Limited and Principals lends credence to the earlier assertions. The
                        company is led by a team of seasoned oil industry professionals with an excess of 10
                        years combined hands-on and top management experience in all phases of the
                        upstream oil and gas industry in marine and logistics services, pipeline services, Civil
                        Engineering works, information Technology, consultancy services (Environmental
                        services, supply chain management, Research and development, clean and renewable
                        energy etc) and procurement services. This is in addition to a wealth of experience and
                        technology of our affiliates and technical partners.
                    </p>
                </div>
            </section>
			{/*<!--Core Values-->*/}
            <section className="core-values" aria-labelledby="core-values-heading">
                <div className="heading-text">
                    <div className="heading-text-highlight"></div>
                    Our Core <span className="green-highlight">Values</span>
                </div>
                <div className="core-values-sub">
                    <div className="core-value-sub-heading">
                        <span className="green-highlight">
                            Values and seeking out the input of others, to establish an inclusive environment and deliver services.
                        </span>
                    </div>
                    <div className="core-values-entry-wrapper">
                        <div className="core-values-entry" role="region" aria-labelledby="professionalism-heading">
                            <h3 id="professionalism-heading">Professionalism</h3>
                            <p>
                            To be supportive of others' input and perspective, working as one; actively seeking professional
                            development and sharing relevant knowledge with client and colleagues. Bring people together and share
                            insights and concern on common goals and to make informal decisions.
                            </p>
                        </div>
                        <div className="core-values-entry" role="region" aria-labelledby="trustworthiness-heading">
                            <h3 id="trustworthiness-heading">Trustworthiness</h3>
                            <p>
                            Honesty, openness, and integrity are fundamental values that guide our actions and interactions.
                            The full, accurate, and timely disclosure of information with honesty, openness, and integrity contributes
                            significantly to exceeding customer expectations and meeting their needs. We take personal responsibility
                            for correcting problems and resolving mistakes positively, ensuring a commitment to these core principles in all that we do.
                            </p>
                        </div>
                        <div className="core-values-entry" role="region" aria-labelledby="excellence-heading">
                            <h3 id="excellence-heading">Excellence</h3>
                            <p>
                            To achieve results, it is essential to take specific actions that improve team or individual performance.
                            This involves promptly and constructively addressing inappropriate behavior or poor performance, agreeing on standards,
                            and intervening when necessary. Maintaining a tenacious and focused approach is crucial for overcoming obstacles and ensuring the attainment of desired outcomes.
                            </p>
                        </div>
                        <div className="core-values-entry" role="region" aria-labelledby="innovation-heading">
                            <h3 id="innovation-heading">Innovation</h3>
                            <p>
                            Bold in thinking and resolving solutions, anticipates and takes action to create and seize opportunities
                            or avoid crises in the medium term. Identifies and implements quick wins, taking an overview of complex
                            situations to generate new perspectives and think outside the box.
                            </p>
                        </div>
                        <div className="core-values-entry" role="region" aria-labelledby="dedication-heading">
                            <h3 id="dedication-heading">Dedication</h3>
                            <p>
                            To ZSI Energy LTD and colleagues, we trust them to deliver and take action to enable the team to achieve maximum contribution by ensuring appropriate structures and staffing are in place. We communicate vision, direction, and outcomes clearly, motivating others to achieve.
                            </p>
                        </div>
                        <div className="core-values-entry" role="region" aria-labelledby="social-responsibility-heading">
                            <h3 id="social-responsibility-heading">Social Responsibility</h3>
                            <p>
                            "Corporate social responsibility is the continuing commitment by businesses to behave ethically and contribute to economic development while improving the quality of life for the workforce and their families, as well as the local community and society at large."
                            </p>
                        </div>
                    </div>
                </div>
            </section>
			{/*<!--Global clients-->*/}
			<ClientSlideShow/>
			{/*<!--Footer-->*/}
			<Footer/>
		</main>
    </div>
  )
}

export default Home