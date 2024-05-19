import React,{useState} from 'react';
import TopBarSub from './TopBarSub';

const TopBar = () => {
	const [dropped,setDropped] = useState(false)

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
			ZSI Energy
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
							<img src="https://res.cloudinary.com/dhbj763qc/image/upload/v1715976100/home_icon_fhlois.svg" alt="home icon" style={{ height: 'auto' }} />
							<div className="menu-highlight">
							<a href="" aria-current="page">
								Home
							</a>
							</div>
						</li>
						<li>
							<img src="https://res.cloudinary.com/dhbj763qc/image/upload/v1715976196/product_icon_cpifrc.svg" alt="product icon" style={{ height: 'auto' }} />
							<div>
							<a href="">Products</a>
							</div>
						</li>
						<li>
							<img src="https://res.cloudinary.com/dhbj763qc/image/upload/v1715976302/about_icon_vv0imc.svg" alt="about us icon" style={{ height: 'auto' }} />
							<div>
							<a href="">About us</a>
							</div>
						</li>
						</ul>
						<button className="menu-contact-button">
						<a href="" className="menu-contact-link">
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