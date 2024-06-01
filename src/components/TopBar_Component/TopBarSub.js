import React from 'react';


const TopBarSub = () => {
    return(
        <div className="british-coucil-mnaw">{/*british-council-icon mobile-no-address-wrapper*/}
            {/* British membership */}
            <img
                className="british-council-image"
                src="https://res.cloudinary.com/dhbj763qc/image/upload/v1715975555/zsienergy/british_council_member_icon_db16qc.png"
                alt="British council Member"
            />
            {/* mobile-no address wrapper */}
            <div className="mobile-no-address-wrapper" role="region" aria-label="Contact Information">
                <div className="mobile-no-wrapper">
                    <img src="https://res.cloudinary.com/dhbj763qc/image/upload/v1717252337/zsienergy/telephone_icon_ew0il5.svg" alt="telephone icon" aria-hidden="true"/>
                    <div className="mnaw-detail">
                        <span id="mobileNumber">
                            +2348037347360<br/>
                            +2348071274090
                        </span><br/>
                        <a href="mailto:info@zsienergy.com">info@zsienergy.com</a>
                    </div>
                </div>
                <div className="location-wrapper">
                    <img src="https://res.cloudinary.com/dhbj763qc/image/upload/v1717252329/zsienergy/location_icon_zwm0nk.svg" alt="location icon" aria-hidden="true"/>
                    <div className="mnaw-detail">
                        <span id="address">#100 East/West Road, Rumuokoro, Port Harcourt, Rivers State, Nigeria.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBarSub