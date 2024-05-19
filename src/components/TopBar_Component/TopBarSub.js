import React from 'react';


const TopBarSub = () => {
    return(
        <div className="british-coucil-mnaw">{/*british-council-icon mobile-no-address-wrapper*/}
            {/* British membership */}
            <img
                className="british-council-image"
                src="https://res.cloudinary.com/dhbj763qc/image/upload/v1715975555/british_council_member_icon_db16qc.png"
                alt="British council Member"
            />
            {/* mobile-no address wrapper */}
            <div className="mobile-no-address-wrapper" role="region" aria-label="Contact Information">
                <div className="mobile-no-wrapper">
                    <img src="https://res.cloudinary.com/dhbj763qc/image/upload/v1715975950/telephone_icon_qzmskh.svg" alt="telephone icon" aria-hidden="true" />
                    <div className="mnaw-detail">
                        <span id="mobileNumber">+234 (0) 803 724 7360</span>
                        <a href="mailto:info@mondorelimited.com">info@mondorelimited.com</a>
                    </div>
                </div>
                <div className="location-wrapper">
                    <img src="https://res.cloudinary.com/dhbj763qc/image/upload/v1715975806/location_icon_mgrhkc.svg" alt="location icon" aria-hidden="true" />
                    <div className="mnaw-detail">
                    <span id="address">#100 East/West Road, Rumuokoro, Port Harcourt, Rivers State, Nigeria.</span>
                    </div>
                </div>
            </div>
      </div>
    )
}

export default TopBarSub