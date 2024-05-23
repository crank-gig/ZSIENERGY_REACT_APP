import React,{useEffect} from 'react';
import '../component_styles/home.css';

import TopBar from './TopBar_Component/TopBar';
import ClientSlideShow from './ClientSlideShow';
import OurServices from './Our_Services';
import JobsExecuted from './Jobs_Executed';
import Footer from './Footer';


const Home = () => {

	useEffect(()=>{
		const slides = document.querySelectorAll('.image-slide');
        let currentImageIndex = 0;

        const toggleCaptionAnimation = (param,opt) => {
            //animate its caption
            const collection = param.getElementsByClassName('slide-caption-sub')
            
            if(opt){
                collection[0].classList.add('bounce');
                collection[1].classList.add('bounce');
            }else{
                collection[0].classList.remove('bounce');
                collection[1].classList.remove('bounce');
            }
        }
        
        function showNextImage() {
            slides[currentImageIndex].classList.remove('active');
            slides[currentImageIndex].setAttribute('aria-hidden','true');
            //unanimate its caption
            toggleCaptionAnimation(slides[currentImageIndex],false)

            currentImageIndex = (currentImageIndex + 1) % slides.length;
            slides[currentImageIndex].setAttribute('aria-hidden','false');
            slides[currentImageIndex].classList.add('active');

            //animate caption
            toggleCaptionAnimation(slides[currentImageIndex],true)
        }

        function showPrevImage() {
            slides[currentImageIndex].classList.remove('active');
			slides[currentImageIndex].setAttribute('aria-hidden','true');
            //unanimate its caption
            toggleCaptionAnimation(slides[currentImageIndex],false)

            currentImageIndex = (currentImageIndex - 1 + slides.length) % slides.length;
			slides[currentImageIndex].setAttribute('aria-hidden','false');
            slides[currentImageIndex].classList.add('active');

            //animate caption
            toggleCaptionAnimation(slides[currentImageIndex],true)
        }

        setInterval(showNextImage, 7000);

        const nextBtn = document.getElementById('nextBtn');
        nextBtn.addEventListener('click', showNextImage);

        const prevBtn = document.getElementById('prevBtn');
        prevBtn.addEventListener('click', showPrevImage);
	},[])

	return (
		<div>
			{/*Top Bar*/}
			<TopBar/>

			{/*Main element*/}
			<main>
				{/*Hero section*/}
				<section className="hero-section first-section" aria-label="Hero Section">
					<div className="hero-image-slider" aria-roledescription="carousel">
						<div className="image-slide-wrapper">
							<div className="image-slide active" aria-hidden="false">
								<img
									src="https://res.cloudinary.com/dhbj763qc/image/upload/v1715442451/zsienergy/men_at_work_hero_image.jpg"
									alt="Civil Engineering Works"
								/>
								<div className="slide-caption">
									<div className="slide-caption-sub slide-caption-sub1">
										Civil Engineering Works
									</div>
									<div className="slide-caption-sub slide-caption-sub2">
										Building Construction, rehabilitation and maintenance (offshore and onshore)
									</div>
								</div>
							</div>
							<div className="image-slide" aria-hidden="true">
								<img
									src="https://res.cloudinary.com/dhbj763qc/image/upload/v1715813603/zsienergy/ship2_hero_image.jpg"
									alt="Maritime and Logistics Services"
								/>
								<div className="slide-caption">
									<div className="slide-caption-sub slide-caption-sub1">
										Maritime and Logistics Services
									</div>
									<div className="slide-caption-sub slide-caption-sub2">
										We provide efficient Haulage and redistribution services, Shipping services and more.
									</div>
								</div>
							</div>
							<div className="image-slide" aria-hidden="true">
								<img
									src="https://res.cloudinary.com/dhbj763qc/image/upload/v1715813386/zsienergy/big_pipeline_hero_image.jpg"
									alt="Pipeline Services"
								/>
								<div className="slide-caption">
									<div className="slide-caption-sub slide-caption-sub1">
										Pipeline Services
									</div>
									<div className="slide-caption-sub slide-caption-sub2">
										We provide innovative, cost effective civil works and pipeline solutions that conforms to the high standards in the oil and gas industry.
									</div>
								</div>
							</div>
							<div className="image-slide" aria-hidden="true">
								<img
									src="https://res.cloudinary.com/dhbj763qc/image/upload/v1715813318/zsienergy/stack_hero_image.jpg"
									alt="Procurement Services"
								/>
								<div className="slide-caption">
									<div className="slide-caption-sub slide-caption-sub1">
										Procurement Services
									</div>
									<div className="slide-caption-sub slide-caption-sub2">
										We provide efficient procurement services and more.
									</div>
								</div>
							</div>
						</div>
						<div className="hero-slide-buttons">
							<button id="prevBtn" aria-label="Previous slide" aria-controls="carousel">&lt;</button>
							<button id="nextBtn" aria-label="Next slide" aria-controls="carousel">&gt;</button>
						</div>
					</div>
				</section>
				{/*<!--Overview section-->*/}
				<section className="overview" aria-labelledby="overview-heading">
					<div className="heading-text">
						<div className="heading-text-highlight"></div>
						Overview
					</div>
					<div className="overview-sub">
						<div className="overview-entry">
						<div className="overview-sub-text">
							<div className="entry-heading" aria-level="3">Industry Focus</div>
							<div className="entry-detail">
							<ul>
								<li>
									Oil and Gas Multinationals such as Shell Petroleum Development
									Company, NAOC, Total E & P, Mobil e.t.c.
								</li>
								<li>
									Government Agencies such as Nigerian Petroleum Development
									Company, (NPDC) Nigerian National Petroleum Corporation (NNPC)
									Nigerian Petroleum Exchange (Nipex).
								</li>
							</ul>
							</div>
						</div>
						<div className="overview-sub-image">
							<img
							src="https://res.cloudinary.com/dhbj763qc/image/upload/v1716029741/zsienergy/GettyImages-1233118130-800x534_kdrawd.jpg"
							alt="Company thumbnail"
							/>
						</div>
						</div>
						<div className="overview-entry">
						<div className="overview-sub-text">
							<div className="entry-heading" aria-level="3">Value Proposition</div>
							<div className="entry-detail">
							<ul>
								<li>
									Strong Health, Safety and Environment values, policies and strategies.
								</li>
								<li>
									Strong supporters and participants of the Nigerian Local Content Act
								</li>
							</ul>
							</div>
						</div>
						<div className="overview-sub-image">
							<img
							src="https://res.cloudinary.com/dhbj763qc/image/upload/v1716031501/zsienergy/VDC-EMEA-SW-JNB1_2-1200x675_jhotif.jpg"
							alt="Safety demonstration"
							/>
						</div>
						</div>
						<div className="overview-entry">
						<div className="overview-sub-text">
							<div className="entry-heading" aria-level="3">Core Solutions</div>
							<div className="entry-detail">
								<ul>
									<li>
										Marine and Logistics Services Pipeline Services and Civil Works.
									</li>
									<li>
										Information Technology in Oil and Gas.
									</li>
									<li>
										Consultancy Services (Environmental Services, Supply Chain Management, Research
										and Development, Clean and Renewable Energy, etc.)
									</li>
								</ul>
							</div>
						</div>
						<div className="overview-sub-image">
							<img
							src="https://res.cloudinary.com/dhbj763qc/image/upload/v1715813034/zsienergy/pipeline_hero_image.jpg"
							alt="Core Solution Offerings"
							/>
						</div>
						</div>
					</div>
				</section>
				{/*<!--Our Services-->*/}
				<OurServices/>
				{/*<!--Global clients-->*/}
				<ClientSlideShow/>
				{/*<!--Our partners-->*/}
				<div className="our-partners">
					<section aria-labelledby="partners-heading">
						<div className="heading-text">
							Our <span className="green-highlight">Partners</span>
							<div className="heading-text-highlight2" aria-hidden="true"></div>
						</div>
						<p className="post-partners-heading">
							In order to become a high-quality service provider, ZSI Energy Limited has in place strategic
							alliances and established relationships with a number of world class specialists.
							ZSI Energy Limited understands its clients' needs and is able to respond on time and in full,
							on every occasion.<br />
							We are also open to new alliances and partnerships necessary for the development of the
							emerging Nigerian oil and gas industry as well as the West African market.
						</p>
						<div className="partners-wrapper">
							{/*<!--Minerva-->*/}
							<div className="partner-entry" role="article" aria-labelledby="minerva-heading">
								<div>
									<h3 id="minerva-heading">Minerva Bunkering</h3>
									<p>Marine fuel supply and bunkering services.</p>
								</div>
							</div>
							{/*<!--Ultra filter GMBH-->*/}
							<div className="partner-entry" role="article" aria-labelledby="ultrafilter-heading">
								<div>
									<h3 id="ultrafilter-heading">Ultrafilter GMBH</h3>
									<p>Filters, Dryers and Filtration Systems.</p>
								</div>
							</div>
							{/*<!--Holo earth-->*/}
							<div className="partner-entry" role="article" aria-labelledby="holo-earth-heading">
								<div>
									<h3 id="holo-earth-heading">Holo Earth Limited</h3>
									<p>Waste Management Services.</p>
								</div>
							</div>
							{/*<!--Boston strategies international-->*/}
							<div className="partner-entry" role="article" aria-labelledby="boston-strategies-heading">
								<div>
									<h3 id="boston-strategies-heading">Boston Strategies International</h3>
									<p>Supply Chain Management.</p>
								</div>
							</div>
							{/*<!--Marking Services Incorporated-->*/}
							<div className="partner-entry" role="article" aria-labelledby="marking-services-heading">
								<div>
									<h3 id="marking-services-heading">Marking Services Incorporated</h3>
									<p>Asset tagging.</p>
								</div>
							</div>
							{/*<!--Davites Export Limited-->*/}
							<div className="partner-entry" role="article" aria-labelledby="davites-heading">
								<div>
									<h3 id="davites-heading">Davites Export Limited</h3>
									<p>Logistics and Procurement.</p>
								</div>
							</div>
							{/*<!--Energy Exemplar-->*/}
							<div className="partner-entry" role="article" aria-labelledby="energy-exemplar-heading">
								<div>
									<h3 id="energy-exemplar-heading">Energy Exemplar</h3>
									<p>Renewable Energy Resources.</p>
								</div>
							</div>
							{/*<!--Catobi Nigeria Limited-->*/}
							<div className="partner-entry" role="article" aria-labelledby="catobi-heading">
								<div>
									<h3 id="catobi-heading">Catobi Nigeria Limited</h3>
									<p>PSV Installation and Maintenance.</p>
								</div>
							</div>
							{/*<!--Busch Vacuum Pumps and Systems-->*/}
							<div className="partner-entry" role="article" aria-labelledby="busch-vacuum-heading">
								<div>
									<h3 id="busch-vacuum-heading">Busch Vacuum Pumps and Systems</h3>
									<p>Vacuum Pumps and Compressor.</p>
								</div>
							</div>
							{/*<!--Karin Protective Clothing-->*/}
							<div className="partner-entry" role="article" aria-labelledby="karin-heading">
								<div>
									<h3 id="karin-heading">Karin Protective Clothing</h3>
									<p>Personal Protective Equipment.</p>
								</div>
							</div>
							{/*<!--Karin Protective Clothing-->*/}
							<div className="partner-entry" role="article" aria-labelledby="safetyplus-heading">
								<div>
									<h3 id="safetyplus-heading">SafetyPlus</h3>
									<p>Personal Protective Equipment.</p>
								</div>
							</div>
						</div>
					</section>
				</div>
				{/*<!--Jobs Executed-->*/}
				<JobsExecuted/>
				{/*<!--Footer-->*/}
				<Footer/>
			</main>
		</div>
	)
}

export default Home