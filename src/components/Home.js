import React from 'react';
import '../component_styles/home.css';

import TopBar from './TopBar_Component/TopBar';


const Home = () => {
  return (
    <div>
		{/*Top Bar*/}
		<TopBar/>

		{/*Main element*/}
		<main>
			<section className="hero-section">
				<img src="https://res.cloudinary.com/dhbj763qc/image/upload/v1715442451/men_at_work1_pt4zfz.jpg"/>
			</section>
		</main>
    </div>
  )
}

export default Home