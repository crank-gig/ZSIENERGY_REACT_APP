import React,{useState} from 'react';
import { useLocation } from 'react-router-dom';
import TopBarSub from './TopBarSub';

const TopBar = () => {
	const [dropped,setDropped] = useState(false)
	
	const location = useLocation();
	const getHighlightStyle = (path) => {
	  return location.pathname === path ? { borderBottom: '1px solid var(--bs-orange)' } : {};
	};

	const toggleMenu = (e) => {
		//menu btn element
		const menuBtn = e.currentTarget.firstElementChild.nextElementSibling;
		//menu wrapper dropdown
		const menuDropDown = document.querySelector(".menu-wrapper")

		const height = menuDropDown.scrollHeight;
		if(!dropped){
			menuBtn.style.marginLeft = '10px'
			menuDropDown.style.height = height+'px'
			setDropped(true)
			//WAI-ARIA
			menuBtn.ariaLabel = 'Close Menu'
		}else{
			menuBtn.style.marginLeft = '0px'
			menuDropDown.style.height = '0px'
			setDropped(false)
			//WAI-ARIA
			menuBtn.ariaLabel = 'Open Menu'
		}
	}

	return (
		<div className="top-bar-wrapper">
		<div className="top-bar">
			{/* Top header: Icon and Title */}
			<h1 className="top-heading" id="page-title">
				<div className="top-heading-img">
					<img src="https://res.cloudinary.com/dhbj763qc/image/upload/v1716384925/zsienergy/logo_ddoql0.png" alt="logo"/>
				</div>
				<div className="top-heading-title">
					ZSI Energy
				</div>   
			</h1>

			{/* Menu Buttons */}
			<button
				className="menu-btn"
				onClick={(e) => toggleMenu(e)}
				aria-label="Open Menu"
			>
				<div></div>
				<div></div>
				<div></div>
			</button>

			{/*british-council-icon mobile-no-address-wrapper*/}
			<TopBarSub/>
		</div>
		<nav className="menu-wrapper" aria-labelledby="page-title" tabIndex="-1">
			{/* Menu Nav List */}
			<div className="menu-list">
				<div className="sub-menu-list">
					<ul>
						<li>
							<img src="https://res.cloudinary.com/dhbj763qc/image/upload/v1717252329/zsienergy/home_icon_uybehg.svg" alt="home icon" style={{height: "auto"}}/>
							<div className="menu-highlight">
								<a href="/" aria-current="page" style={getHighlightStyle('/')}>
									Home
								</a>
							</div>
						</li>
						<li>
							<img src="https://res.cloudinary.com/dhbj763qc/image/upload/v1717252331/zsienergy/product_icon_tzkvdq.svg" alt="product icon" style={{height: "auto"}}/>
							<div>
								<a href="/products" style={getHighlightStyle('/products')}>
									Products
								</a>
							</div>
						</li>
						<li>
							<img src="https://res.cloudinary.com/dhbj763qc/image/upload/v1717252328/zsienergy/about_us_icon_yxs52s.svg" alt="about us icon" style={{height: "auto"}}/>
							<div>
								<a href="/about" style={getHighlightStyle('/about')}>
									About us
								</a>
							</div>
						</li>
					</ul>
					<button className="menu-contact-button">
						<a href="mailto:info@zsienergy.com" className="menu-contact-link">
							Contact us
						</a>
					</button>
				</div>
				{/*british-council-icon mobile-no-address-wrapper*/}
				<TopBarSub/>
			</div>
		</nav>
		</div>
	);
};

export default TopBar;