import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import '../component_styles/home.css';

import TopBar from './TopBar_Component/TopBar';
import ClientSlideShow from './ClientSlideShow';
import OurServices from './Our_Services';
import JobsExecuted from './Jobs_Executed';
import Footer from './Footer';

//placeholder for lazy loading
import placeholderImage from '../component_media/placeholder.jpg';

const Home = () => {

	useEffect(()=>{

		/*
			fade-left and right for the
			overview entries when the viewport width is above 912px 
        */
		const gt912=window.matchMedia('(min-width:912px)');
        if(gt912.matches){
			const overviewEntryList = document.querySelectorAll('.overview-entry')
			const fadeArray = ['fade-right','fade-left']
			for (let i = 0; i < overviewEntryList.length; i++ ){
				 //Get the direct children of the parents
				 const directDivChildren = overviewEntryList[i].querySelectorAll(':scope > div')
				 //Add the transition property on direct child elements
				 directDivChildren[0].setAttribute("data-aos",fadeArray[(i%2)])
				 directDivChildren[1].setAttribute("data-aos",fadeArray[((i+1) % 2)])
			}
		}

		
		/*Function to animate sliding up characters*/		
		const slides = document.querySelectorAll('.image-slide');
        let currentImageIndex = 0;

		const slideCharacterUp = (charactersContainer) => {
			const text = charactersContainer.textContent.trim();
			charactersContainer.innerHTML = '';

			text.split('').forEach(char => {
				const span = document.createElement('span');
				span.classList.add('char');
				if (char === ' ') {
					span.innerHTML = '&nbsp;';
				} else {
					span.textContent = char;
				}
				charactersContainer.appendChild(span);
			});

			const chars = charactersContainer.querySelectorAll('.char');

			let delay = 0;
			chars.forEach((char, index) => {
				setTimeout(() => {
					char.classList.add('visible');
				}, delay);
				delay += 100; // Delay for each subsequent character
			});
		}
        
        function showNextImage() {
            slides[currentImageIndex].classList.remove('active');
            //unanimate its caption
            //toggleCaptionAnimation(slides[currentImageIndex],false)

            currentImageIndex = (currentImageIndex + 1) % slides.length;
            slides[currentImageIndex].classList.add('active');

            //animate caption
            const collection = slides[currentImageIndex].getElementsByClassName('slide-caption-sub')
            slideCharacterUp(collection[1])
        }

        /*change the hero image slide and animate the sub-caption*/
        setInterval(showNextImage, 11000);
		
        //animate the first element
        slideCharacterUp(document.querySelector('.slide-caption-sub2'))

		//initialize animate on scroll
		AOS.init();
	},[])

	return (
		<div>
			{/*Top Bar*/}
			<TopBar/>

			{/*Main element*/}
			<main>
				{/*Hero section*/}
				<div 
					className="home-hero-section first-section" 
					aria-label="Hero Section"

					id="home-hero-section"
                	lazy="targeted-func"
				>
					<div className="hero-image-slider" aria-roledescription="carousel">
						<div className="image-slide-wrapper">
							{/*Civil Engineering works*/}
							<div className="image-slide active" aria-hidden="false" >
								<img
									src={placeholderImage}
									img-src="https://res.cloudinary.com/dhbj763qc/image/upload/v1717016325/zsienergy/michal-pech-NV3xhNJTaw0-unsplash_ct43o3.jpg"
									alt="Civil Engineering Works"
									lazy=""
								/>
								<div className="slide-caption">
									<div className="slide-caption-sub slide-caption-sub1">
										Civil Engineering Works
									</div>
									<div className="slide-caption-sub slide-caption-sub2 slid-up-text">
										Building Construction, rehabilitation and maintenance (offshore and onshore)
									</div>
								</div>
							</div>
							{/*Maritime and Logistics Services*/}
							<div className="image-slide" aria-hidden="true">
								<img
									src={placeholderImage}
									img-src="https://res.cloudinary.com/dhbj763qc/image/upload/v1715813603/zsienergy/ship2_hero_image.jpg"
									alt="Maritime and Logistics Services"
									lazy=""
								/>
								<div className="slide-caption">
									<div className="slide-caption-sub slide-caption-sub1">
										Maritime and Logistics Services
									</div>
									<div className="slide-caption-sub slide-caption-sub2 slid-up-text">
										We provide efficient Haulage and redistribution services, Shipping services and more.
									</div>
								</div>
							</div>
							{/*Pipeline services*/}
							<div className="image-slide" aria-hidden="true">
								<img
									src={placeholderImage}
									img-src="https://res.cloudinary.com/dhbj763qc/image/upload/v1717017075/zsienergy/belinda-fewings-WlSQD_9c4uY-unsplash_1_ke0lst.jpg"
									alt="Pipeline Services"
									lazy=""
								/>
								<div className="slide-caption">
									<div className="slide-caption-sub slide-caption-sub1">
										Pipeline Services
									</div>
									<div className="slide-caption-sub slide-caption-sub2 slid-up-text">
										We provide innovative, cost effective civil works and pipeline solutions that conforms to the high standards in the oil and gas industry.
									</div>
								</div>
							</div>
							{/*Procurement services*/}
							<div className="image-slide" aria-hidden="true">
								<img
									src={placeholderImage}
									img-src="https://res.cloudinary.com/dhbj763qc/image/upload/v1717020563/zsienergy/scott-blake-x-ghf9LjrVg-unsplash_1_boabhd.jpg"
									alt="Procurement Services"
									lazy=""
								/>
								<div className="slide-caption">
									<div className="slide-caption-sub slide-caption-sub1">
										Procurement Services
									</div>
									<div className="slide-caption-sub slide-caption-sub2 slid-up-text">
										We provide efficient procurement services and more.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*<!--Overview section-->*/}
				<section className="overview" aria-labelledby="overview-heading">
					<div className="heading-text">
						<div className="heading-text-highlight" data-aos="fade-up"></div>
						Overview
					</div>
					<div className="overview-sub">
						{/*Industry focus*/}
						<div data-aos="fade-up" className="overview-entry">
							<div className="overview-sub-text" >
								<div className="entry-heading" role="heading" aria-level="3">Industry Focus</div>
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
							<div className="overview-sub-image" >
								<img
									src={placeholderImage}
									img-src="https://res.cloudinary.com/dhbj763qc/image/upload/v1717018014/zsienergy/ant-rozetsky-SLIFI67jv5k-unsplash_lhvoxy.jpg"
									alt="Company thumbnail"
									lazy=""
								/>
								<img 
									data-aos="fade-up" 
									src={placeholderImage}
									img-src="https://res.cloudinary.com/dhbj763qc/image/upload/v1717018269/zsienergy/istockphoto-1455690288-170667a_hszfdw.webp"
									alt="Company thumbnail"
									lazy=""
								/>
							</div>
						</div>
						{/*Value Proposition*/}
						<div data-aos="fade-up" className="overview-entry">
							<div className="overview-sub-text">
								<div className="entry-heading" aria-level="3">Value Proposition</div>
								<div className="entry-detail">
								<ul>
									<li>
										Strong Health, Safety and Environment values, policies and strategies.
									</li>
									<li>
										Strong supporters and participants of the Nigerian Local Content Act.
									</li>
								</ul>
								</div>
							</div>
							<div className="overview-sub-image">
								<img
									src={placeholderImage}
									img-src="https://res.cloudinary.com/dhbj763qc/image/upload/v1717018501/zsienergy/nathan-waters-j7q-Z9DV3zw-unsplash_1_aoydkw.jpg"
									alt="Safety demonstration"
									lazy=""
									/>
								<img 
									data-aos="fade-up"
									src={placeholderImage} 
									img-src="https://res.cloudinary.com/dhbj763qc/image/upload/v1716031501/zsienergy/VDC-EMEA-SW-JNB1_2-1200x675_jhotif.jpg"
									alt="Safety demonstration"
									lazy=""
								/>
							</div>
						</div>
						{/*Core solutions*/}
						<div data-aos="fade-up" className="overview-entry">
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
									src={placeholderImage}
									img-src="https://res.cloudinary.com/dhbj763qc/image/upload/v1717018593/zsienergy/joakim-honkasalo-hyj_RRTzJjo-unsplash_qoaf9z.jpg"
									alt="Core Solution Offerings"
									lazy=""
									/>
								<img 
									data-aos="fade-up"
									src={placeholderImage}
									img-src="https://res.cloudinary.com/dhbj763qc/image/upload/v1715813034/zsienergy/pipeline_hero_image.jpg"
									alt="Core Solution Offerings"
									lazy=""
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
							<div data-aos="fade-up" className="partner-entry" role="article" aria-labelledby="minerva-heading">
								<div>
									<h3 id="minerva-heading">Minerva Bunkering</h3>
									<p>Marine fuel supply and bunkering services.</p>
								</div>
							</div>
							{/*<!--Ultra filter GMBH-->*/}
							<div data-aos="fade-up" className="partner-entry" role="article" aria-labelledby="ultrafilter-heading">
								<div>
									<h3 id="ultrafilter-heading">Ultrafilter GMBH</h3>
									<p>Filters, Dryers and Filtration Systems.</p>
								</div>
							</div>
							{/*<!--Holo earth-->*/}
							<div data-aos="fade-up" className="partner-entry" role="article" aria-labelledby="holo-earth-heading">
								<div>
									<h3 id="holo-earth-heading">Holo Earth Limited</h3>
									<p>Waste Management Services.</p>
								</div>
							</div>
							{/*<!--Boston strategies international-->*/}
							<div data-aos="fade-up" className="partner-entry" role="article" aria-labelledby="boston-strategies-heading">
								<div>
									<h3 id="boston-strategies-heading">Boston Strategies International</h3>
									<p>Supply Chain Management.</p>
								</div>
							</div>
							{/*<!--Marking Services Incorporated-->*/}
							<div data-aos="fade-up" className="partner-entry" role="article" aria-labelledby="marking-services-heading">
								<div>
									<h3 id="marking-services-heading">Marking Services Incorporated</h3>
									<p>Asset tagging.</p>
								</div>
							</div>
							{/*<!--Davites Export Limited-->*/}
							<div data-aos="fade-up" className="partner-entry" role="article" aria-labelledby="davites-heading">
								<div>
									<h3 id="davites-heading">Davites Export Limited</h3>
									<p>Logistics and Procurement.</p>
								</div>
							</div>
							{/*<!--Energy Exemplar-->*/}
							<div data-aos="fade-up" className="partner-entry" role="article" aria-labelledby="energy-exemplar-heading">
								<div>
									<h3 id="energy-exemplar-heading">Energy Exemplar</h3>
									<p>Renewable Energy Resources.</p>
								</div>
							</div>
							{/*<!--Catobi Nigeria Limited-->*/}
							<div data-aos="fade-up" className="partner-entry" role="article" aria-labelledby="catobi-heading">
								<div>
									<h3 id="catobi-heading">Catobi Nigeria Limited</h3>
									<p>PSV Installation and Maintenance.</p>
								</div>
							</div>
							{/*<!--Busch Vacuum Pumps and Systems-->*/}
							<div data-aos="fade-up" className="partner-entry" role="article" aria-labelledby="busch-vacuum-heading">
								<div>
									<h3 id="busch-vacuum-heading">Busch Vacuum Pumps and Systems</h3>
									<p>Vacuum Pumps and Compressor.</p>
								</div>
							</div>
							{/*<!--Karin Protective Clothing-->*/}
							<div data-aos="fade-up" className="partner-entry" role="article" aria-labelledby="karin-heading">
								<div>
									<h3 id="karin-heading">Karin Protective Clothing</h3>
									<p>Personal Protective Equipment.</p>
								</div>
							</div>
							{/*<!--Karin Protective Clothing-->*/}
							<div data-aos="fade-up" className="partner-entry" role="article" aria-labelledby="safetyplus-heading">
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