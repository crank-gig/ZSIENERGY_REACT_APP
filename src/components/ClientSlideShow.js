import React,{useEffect} from 'react';


const ClientSlideShow = () => {
    
    useEffect(()=>{

        /*-------image slide functionality-------*/
        const lt400=window.matchMedia('(max-width:400px)');
        const lt912=window.matchMedia('(max-width:912px)');
        const gt912=window.matchMedia('(min-width:912px)');
        const lt1280=window.matchMedia('(max-width:1280px)');
        const gt1280=window.matchMedia('(min-width:1280px)');
        let slideInterval;

        if(lt400.matches){
            slideInterval=2000
        }else if(!(lt400.matches) && (lt912.matches)){
            slideInterval=3000
        }else if((gt912.matches) && (lt1280.matches)){
            slideInterval=4000
        }else if((gt1280.matches)){
            slideInterval=5000
        }

        let counter=0
        const wW=window.innerWidth
        const slideShow = document.querySelector('.slideshow')

        const imgSrcList = [
            'https://res.cloudinary.com/dhbj763qc/image/upload/v1716042933/zsienergy/Untitled-removebg-preview_zcvuzx.png$Shell icon',
            'https://res.cloudinary.com/dhbj763qc/image/upload/v1716043145/zsienergy/Untitled1-removebg-preview_omdwds.png$Saipem icon',
            'https://res.cloudinary.com/dhbj763qc/image/upload/v1716043185/zsienergy/Seplat-Energy-Logo-e1679000249830-removebg-preview_gwcsuc.png$Seplat icon',
            'https://res.cloudinary.com/dhbj763qc/image/upload/v1716043732/zsienergy/ndcmb-removebg-preview_qezhpi.png$ndcmb icon',
            'https://res.cloudinary.com/dhbj763qc/image/upload/v1716044112/zsienergy/2560px-Schlumberger.svg-removebg-preview_ditgwx.png$Schlumberger icon',
            'https://res.cloudinary.com/dhbj763qc/image/upload/v1716044160/zsienergy/Chevron-Logo-2006-present-removebg-preview_1_kjdksk.png$Chevron icon',
            'https://res.cloudinary.com/dhbj763qc/image/upload/v1716044454/zsienergy/0445d5e2d5dd074c5744c5311b56e7bb_gkyhzr.jpg$Agip icon',
            'https://res.cloudinary.com/dhbj763qc/image/upload/v1716044552/zsienergy/totalenergies-removebg-preview_remu5j.png$Total Energies icon',
            'https://res.cloudinary.com/dhbj763qc/image/upload/v1716045198/zsienergy/nigeria-lng-logo-liquefied-natural-gas-business-png-favpng-z580ujg7N5uG0tiSBbWjA3FW6-removebg-preview_eb8jqm.png$LNG icon'
        ];

        setInterval(
            ()=>{

                //create the slide element
                const slide = document.createElement('div');
                slide.className = 'slide';

                //create the img element for the slide
                const slideImage = document.createElement('img');
                slideImage.src = imgSrcList[counter].split('$')[0]
                slideImage.alt = imgSrcList[counter].split('$')[1]

                //append the image
                slide.append(slideImage)

                /*
                append the slide element to the slideshow element
                and give it a transition duration according the the viewport width
                */
                slideShow.append(slide);
                slide.style.transitionDuration=`${(wW*20)/1330}s`

                /*
                Listen for the transition end on the slide element, 
                to know when to remove the element
                */
                slide.ontransitionend=(e)=>{
                    e.target.remove()
                }

                //translate the element
                setTimeout(()=>{
                    slide.style.transform=`translateX(-${wW+300}px)`
                },1000)

                counter++
                if(counter===imgSrcList.length){
                    counter=0
                }
            }, 
            slideInterval
        )
    },[])
        
    return (
        <div className="global-clients" role="region" aria-labelledby="global-clients-heading">
            <div className="heading-text" id="global-clients-heading">
                <div className="heading-text-highlight"></div>
                Global <span className="green-highlight">Clients</span>
            </div>
            <div className="slideshow" role="list"></div>
        </div>                                                                                                            
    );
}

export default ClientSlideShow