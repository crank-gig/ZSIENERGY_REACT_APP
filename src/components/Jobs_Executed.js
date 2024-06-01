import React, { useState } from 'react';


const JobsExecuted = () => {
  const [activeContractDetail, setActiveContractDetail] = useState("");
  const [activeContractDetailButt, setActiveContractDetailButt] = useState("");

  const dropDesc = (elemId, descId) => {
    if (!activeContractDetail) {
      showContent(elemId, descId);
    } else if (activeContractDetail === descId) {
      hideContent();
      setActiveContractDetail("");
      setActiveContractDetailButt("");
    } else {
      hideContent();
      showContent(elemId, descId);
    }
  };

  const hideContent = () => {
    document.getElementById(activeContractDetailButt).style.transform = "rotate(0deg)";
    document.getElementById(activeContractDetail).style.height = "0px";
  };

  const showContent = (elemId, descId) => {
    document.getElementById(elemId).style.transform = "rotate(180deg)";
    const dropDownElem = document.getElementById(descId);
    dropDownElem.style.height = dropDownElem.scrollHeight + 'px';
    setActiveContractDetail(descId);
    setActiveContractDetailButt(elemId);
  };

  return (
    <div className="jobs-executed">
        <section aria-labelledby="jobs-executed-heading">
            <div className="heading-text">
                <div className="heading-text-highlight"></div>
                    Jobs <span className="green-highlight">Executed</span>
            </div>
            <div className="jobs-executed-sub">
            <div className="table">
                <div className="thead">
                <div>Company</div>
                <div>Task</div>
                </div>
                <div className="tbody">
                    {/* Custom table row for Kinetic Electromechanic Nig Ltd */}
                    <div className="trow">
                        <div className="trow-view">
                            <div className="trow-view1">
                                <img src="https://res.cloudinary.com/dhbj763qc/image/upload/v1717248975/zsienergy/kkk_qub2iu.png" alt="Kinetic Electromechanic Nig Ltd" style={{height:"40px", transform: "translateX(20px)"}}/>
                            </div>
                            <div className="trow-view2">
                                Construction of residential and Office complex
                            </div>
                            <div className="trow-view3">
                                <button
                                onClick={() => dropDesc("dropdown-butt0", "process-detail0")}
                                id="dropdown-butt0"
                                aria-expanded={activeContractDetail === "process-detail0"}
                                aria-controls="process-detail0"
                                >
                                    <img src="https://res.cloudinary.com/dhbj763qc/image/upload/v1716271804/zsienergy/custom_table_dropdown_icon_r5wqpy.svg" alt="dropdown icon" />
                                </button>
                            </div>
                        </div>
                        <div className="trow-dropdown" id="process-detail0" aria-hidden={activeContractDetail !== "process-detail0"}>
                            <div className="trow-dropdown-heading">
                                Kinetic Electromechanic Nig Ltd
                            </div>
                                ZSI Energy successfully fulfilled a contract to construct a comprehensive residential and office complex for Kinetic Electromechanic Nig Ltd. This project involved meticulous planning, high-quality construction, and timely completion to ensure that the client's facilities were built to the highest standards. By integrating advanced building techniques and rigorous quality control, ZSI Energy provided a reliable and efficient complex that supports the seamless operation of both residential and office environments, contributing to the overall functionality and aesthetic appeal of the client's infrastructure.                        
                        </div>
                    </div>
                    {/* Custom table row Total Energies */}
                    <div className="trow">
                        <div className="trow-view">
                        <div className="trow-view1">
                            <img src="https://res.cloudinary.com/dhbj763qc/image/upload/v1716044552/zsienergy/totalenergies-removebg-preview_remu5j.png" alt="Total energies" />
                        </div>
                        <div className="trow-view2">
                            Supply of Various Mechanical Equipment 
                            Eg. Valves, Seamless Pipes, Grating,
                            Flanges, etc.
                        </div>
                        <div className="trow-view3">
                            <button
                            onClick={() => dropDesc("dropdown-butt1", "process-detail1")}
                            id="dropdown-butt1"
                            aria-expanded={activeContractDetail === "process-detail1"}
                            aria-controls="process-detail1"
                            >
                            <img src="https://res.cloudinary.com/dhbj763qc/image/upload/v1716271804/zsienergy/custom_table_dropdown_icon_r5wqpy.svg" alt="dropdown icon" />
                            </button>
                        </div>
                        </div>
                        <div className="trow-dropdown" id="process-detail1" aria-hidden={activeContractDetail !== "process-detail1"}>
                        <div className="trow-dropdown-heading">
                            Total E&P
                        </div>
                        ZSI Energy successfully fulfilled a contract to supply a comprehensive range of high-quality mechanical equipment, 
                        including valves, seamless pipes, grating, and flanges. This project involved sourcing, quality assurance, and timely 
                        delivery to ensure that the client's industrial operations were equipped with reliable and efficient components, contributing to the seamless execution of their processes.
                        </div>
                    </div>
                    {/* Custom table row NLNG */}
                    <div className="trow">
                        <div className="trow-view">
                        <div className="trow-view1">
                            <img src="https://res.cloudinary.com/dhbj763qc/image/upload/v1716045198/zsienergy/nigeria-lng-logo-liquefied-natural-gas-business-png-favpng-z580ujg7N5uG0tiSBbWjA3FW6-removebg-preview_eb8jqm.png" alt="NLNG" />
                        </div>
                        <div className="trow-view2">
                            Supply of PPE &
                            various mechanical / electrical
                            equipments.
                        </div>
                        <div className="trow-view3">
                            <button
                            onClick={() => dropDesc("dropdown-butt2", "process-detail2")}
                            id="dropdown-butt2"
                            aria-expanded={activeContractDetail === "process-detail2"}
                            aria-controls="process-detail2"
                            >
                            <img src="https://res.cloudinary.com/dhbj763qc/image/upload/v1716271804/zsienergy/custom_table_dropdown_icon_r5wqpy.svg" alt="dropdown icon" />
                            </button>
                        </div>
                        </div>
                        <div className="trow-dropdown" id="process-detail2" aria-hidden={activeContractDetail !== "process-detail2"}>
                        <div className="trow-dropdown-heading">
                            Total E&P
                        </div>
                        ZSI Energy proudly executed a contract for the supply of Personal Protective Equipment (PPE) and a diverse array of mechanical and electrical equipment to NLNG. Our dedicated team ensured the procurement, quality assessment, and timely delivery of essential safety gear and industrial machinery. By supplying top-tier PPE alongside reliable mechanical and electrical equipment, we contributed to NLNG's commitment to safety and operational excellence, supporting their endeavors in the energy sector with quality solutions tailored to their specific requirements.
                        </div>
                    </div>
                    {/* Custom table row Megastar */}
                    <div className="trow">
                        <div className="trow-view">
                        <div className="trow-view1">
                            <img src="https://res.cloudinary.com/dhbj763qc/image/upload/v1716270265/zsienergy/1630569600508-removebg-preview_bqcu0i.png" alt="Megastar" />
                        </div>
                        <div className="trow-view2">
                            Supply of Heavy duty Equipment,
                            Civil works.
                        </div>
                        <div className="trow-view3">
                            <button
                            onClick={() => dropDesc("dropdown-butt3", "process-detail3")}
                            id="dropdown-butt3"
                            aria-expanded={activeContractDetail === "process-detail3"}
                            aria-controls="process-detail3"
                            >
                            <img src="https://res.cloudinary.com/dhbj763qc/image/upload/v1716271804/zsienergy/custom_table_dropdown_icon_r5wqpy.svg" alt="dropdown icon" />
                            </button>
                        </div>
                        </div>
                        <div className="trow-dropdown" id="process-detail3" aria-hidden={activeContractDetail !== "process-detail3"}>
                        <div className="trow-dropdown-heading">
                            Megastar
                        </div>
                        ZSI Energy undertook the task of supplying heavy-duty equipment tailored for civil works at Megastar. Our specialized team meticulously coordinated the procurement and delivery of robust machinery essential for various construction projects. By providing top-notch heavy-duty equipment, we facilitated Megastar's construction endeavors, ensuring efficiency, reliability, and safety in their civil works operations.
                        </div>
                    </div>
                    {/* Custom table row NAOC */}
                    <div className="trow">
                        <div className="trow-view">
                        <div className="trow-view1">
                            <img src="https://res.cloudinary.com/dhbj763qc/image/upload/v1716044454/zsienergy/0445d5e2d5dd074c5744c5311b56e7bb_gkyhzr.jpg" alt="Agip" />
                        </div>
                        <div className="trow-view2">
                            Supply of PPE<br/>
                            2016 - 2023
                        </div>
                        <div className="trow-view3">
                            <button
                            onClick={() => dropDesc("dropdown-butt4", "process-detail4")}
                            id="dropdown-butt4"
                            aria-expanded={activeContractDetail === "process-detail4"}
                            aria-controls="process-detail4"
                            >
                            <img src="https://res.cloudinary.com/dhbj763qc/image/upload/v1716271804/zsienergy/custom_table_dropdown_icon_r5wqpy.svg" alt="dropdown icon" />
                            </button>
                        </div>
                        </div>
                        <div className="trow-dropdown" id="process-detail4" aria-hidden={activeContractDetail !== "process-detail4"}>
                        <div className="trow-dropdown-heading">
                            Nigerian Agip Oil Company Ltd.
                        </div>
                        ZSI Energy undertook the critical task of supplying Personal Protective Equipment (PPE) to Nigerian Agip Oil Company Ltd. (NAOC) from 2016 to 2023. Through meticulous sourcing, quality assurance, and efficient logistics, we ensured a consistent and reliable provision of essential safety gear throughout the duration of the contract. Our commitment to excellence in meeting NAOC's safety requirements played a vital role in safeguarding personnel and promoting a culture of safety across NAOC's operations, contributing to their success in the oil and gas industry.
                        </div>
                    </div>
                    {/* Custom table row Chevron */}
                    <div className="trow">
                        <div className="trow-view">
                        <div className="trow-view1">
                            <img src="https://res.cloudinary.com/dhbj763qc/image/upload/v1716044160/zsienergy/Chevron-Logo-2006-present-removebg-preview_1_kjdksk.png" alt="Chevron" />
                        </div>
                        <div className="trow-view2">
                            Supply of valves and fittings.
                        </div>
                        <div className="trow-view3">
                            <button
                            onClick={() => dropDesc("dropdown-butt5", "process-detail5")}
                            id="dropdown-butt5"
                            aria-expanded={activeContractDetail === "process-detail5"}
                            aria-controls="process-detail5"
                            >
                            <img src="https://res.cloudinary.com/dhbj763qc/image/upload/v1716271804/zsienergy/custom_table_dropdown_icon_r5wqpy.svg" alt="dropdown icon" />
                            </button>
                        </div>
                        </div>
                        <div className="trow-dropdown" id="process-detail5" aria-hidden={activeContractDetail !== "process-detail5"}>
                        <div className="trow-dropdown-heading">
                            Chevron
                        </div>
                        We undertook a significant contract for the supply of valves and fittings to Chevron, a testament to our commitment to delivering essential industrial solutions. Through meticulous sourcing, quality assurance processes, and efficient logistics management, we ensured the timely provision of high-quality valves and fittings tailored to Chevron's exact specifications. Our collaboration facilitated Chevron's operational continuity by providing dependable components crucial for their infrastructure and processes, reinforcing our reputation as a trusted partner in the energy sector.
                        </div>
                    </div>
                    {/* Custom table row Saipem */}
                    <div className="trow">
                        <div className="trow-view">
                        <div className="trow-view1">
                            <img src="https://res.cloudinary.com/dhbj763qc/image/upload/v1716042933/zsienergy/Untitled-removebg-preview_zcvuzx.png" alt="Saipem" />
                        </div>
                        <div className="trow-view2">
                            Supply of various mechanical/electrical equipments,
                            Pipe cutting tools,
                            Pipe crimping,
                            Container spreaders, valves, pipes
                            flanges, etc.
                        </div>
                        <div className="trow-view3">
                            <button
                            onClick={() => dropDesc("dropdown-butt6", "process-detail6")}
                            id="dropdown-butt6"
                            aria-expanded={activeContractDetail === "process-detail6"}
                            aria-controls="process-detail6"
                            >
                            <img src="https://res.cloudinary.com/dhbj763qc/image/upload/v1716271804/zsienergy/custom_table_dropdown_icon_r5wqpy.svg" alt="dropdown icon" />
                            </button>
                        </div>
                        </div>
                        <div className="trow-dropdown" id="process-detail6" aria-hidden={activeContractDetail !== "process-detail6"}>
                        <div className="trow-dropdown-heading">
                            Saipem
                        </div>
                        ZSI Energy successfully undertook a project for the supply of a diverse range of mechanical and electrical equipment to Saipem. This comprehensive offering included essential tools such as pipe cutting tools and pipe crimping devices, alongside industrial necessities like container spreaders, valves, pipes, and flanges. Through meticulous sourcing, quality assurance, and timely delivery, we ensured that Saipem received top-quality equipment essential for their operational needs. Our commitment to excellence and reliability facilitated Saipem's seamless execution of projects in the energy sector, contributing to their continued success and efficiency in the field.
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    </div>
  );
};

export default JobsExecuted;
