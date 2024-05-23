import React from 'react';
import '../component_styles/home.css';

import TopBar from './TopBar_Component/TopBar';
import ClientSlideShow from './ClientSlideShow';
import OurServices from './Our_Services';
import Footer from './Footer';


const Products = () => {
  return (
    <div>
		{/*Top Bar*/}
		<TopBar/>

		{/*Main element*/}
		<main>
            {/*<!--Product page brief-->*/}
            <section className="product-page-brief">
                <div className="heading-text">
                    <div className="heading-text-highlight"></div>    
                    Your Partner in <span className="green-highlight">Industrial Innovation</span>
                </div>
                <p>
                    We have a plan to develop a dynamic and
                    successful company that provides innovative
                    and quality service delivery in engineering &
                    procurement services to clients in the oil and
                    gas industry.
                    To develop exceptional values to our clients in
                    the areas of engineering, procurement, marine
                    logistics, haulage, freight forwarding services,
                    pipeline services and project management with
                    regard to the environmental protection, health
                    and safety Utilizing technology and local
                    resources to the maximum.
                </p>
            </section>
			{/*<!--Our Services-->*/}
			<OurServices/>
			{/*<!--Global clients-->*/}
			<ClientSlideShow/>
			{/*<!--Our policies-->*/}
            <section className="our-policies" aria-labelledby="our-policies-heading">
                <div id="our-policies-heading" className="heading-text">
                    Our <span className="green-highlight">Policies</span>
                </div>
                <div className="policy-entry" aria-labelledby="hse-policy-heading">
                    <div id="hse-policy-heading" className="subheading-text">
                        HEALTH, SAFETY AND ENVIRONMENT
                    </div>
                    <p>
                        ZSI Energy LTD HSE policy is to manage all of our activities through
                        a strategic Health, Safety and Environmental process founded on
                        management, commitment and accountability, Safety and environ-
                        mental standards, appropriate levels of training, a just system of dealing
                        with issues, and a system of performance measurement.
                        We abide by international HSE standards in business activities and corporate
                        services on and off oil service work. It is a necessity and common
                        goal to work for a safe healthy society.
                    </p>
                </div>
                <div className="policy-entry" aria-labelledby="nigerian-content-policy-heading">
                    <div id="nigerian-content-policy-heading" className="subheading-text">
                        NIGERIAN CONTENT POLICY
                    </div>
                    <p>
                        At ZSI Energy LTD, our local content development policy
                        is our obligation to local communities in our areas of
                        operation. However, our strategy is implemented in a
                        manner that is not a disadvantage to our clients' primary
                        objectives, as far as operational efficiency and technical
                        integrity are concerned. We also utilize continuous assessment
                        procedure on our suppliers and sub-contractors,
                        which is aimed at increasing health, safety and environmental
                        responsibility and quality of goods and services.
                        All of which are of mutual benefit.                                                      
                    </p>
                </div>
                <div className="policy-entry" aria-labelledby="csr-policy-heading">
                    <div id="csr-policy-heading" className="subheading-text">
                        GREEN-CORPORATE SOCIAL RESPONSIBILITY
                    </div>
                    <p>
                        ZSI Energy LTD, was conceived and developed from our shareholders'
                        individual corporate social responsibility to our environment and the people
                        within. This is further reemphasized in our mission to
                        <span className="green-highlight">
                            be the leading provider of clean energy in Nigeria.
                        </span>
                        We aim to embark on various strategies for community development,
                        with the main aim of sharing knowledge and offering the tools that could
                        help the underprivileged fend for themselves, the primary tool being 
                        <span className="green-highlight">
                            ENERGY
                        </span>.
                    </p>
                </div>
            </section>
            {/*<!--Our Quality Management Policy-->*/}
            <div className="oqmp" role="region" aria-labelledby="quality-management-policy-heading">
                <section>
                    <div className="heading-text" id="quality-management-policy-heading">
                        Quality <span className="green-highlight">Management Policy</span>
                        <div className="heading-text-highlight2"></div>
                    </div>
                    <div className="oqmp-entry-wrapper">
                        <div className="oqmp-entry" role="article" aria-label="Customer Satisfaction">
                            Our Quality Management Policy ensures customer satisfaction by delivering products and services that meet and exceed expectations. We are committed to providing features and characteristics that align with customer requirements and fulfill their intended purpose.
                        </div>
                        <div className="oqmp-entry" role="article" aria-label="Inspections and Testing">
                            Inspections and testing are conducted to confirm that products and services meet the specified requirements. These processes are essential to ensure that the products and services delivered are of the expected quality and adhere to the established standards. Through rigorous inspections and testing, we can verify conformity and guarantee customer satisfaction.
                        </div>
                        <div className="oqmp-entry" role="article" aria-label="Systematic Actions">
                            The necessary plans, systematic actions, and activities are implemented to establish confidence in products and services. This comprehensive approach ensures that all necessary steps are taken to build and maintain trust with customers, fostering a positive reputation and relationships.
                        </div>
                        <div className="oqmp-entry" role="article" aria-label="Analysis and Evaluation">
                            We carefully measure the results of our processes and the achievement of our aims through rigorous analysis and evaluation. Following this assessment, we implement control measures and/or corrective actions as necessary to ensure optimal outcomes.
                        </div>
                    </div>
                </section>
            </div>
			{/*<!--Footer-->*/}
			<Footer/>
		</main>
    </div>
  )
}

export default Products