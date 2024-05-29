/*Progressive loading*/
const doStuffs = (item,observer) => {
    /*
    Runs if the element is an image
    */
    if (item.hasAttribute("img-src")){
        if(!(item.hasAttribute('img-loaded'))){
            const imgUrl=item.getAttribute("img-src")
            item.src=imgUrl;
            item.style.filter="blur(5px)";
    
            item.onload=()=>{
                item.style.filter="blur(0px)";
                item.setAttribute('img-loaded','')
            }
        }
    }
    /*
    Runs if the element is not an image
    i.e Extra funcionality when the element intersects
    */
    if(item.getAttribute('lazy')==='targeted-func'){
        //Do the switch thing in here
        const itemId = item.id

        switch(itemId){
            case 'home-hero-section':
                item.style.width = "100%";
                item.setAttribute('lazy','')
                break;
        }
    }
}

const lazyElements = document.querySelectorAll('[lazy]');

if ("IntersectionObserver" in window){
    //pushElements()
    const observer=new IntersectionObserver((items,observer)=>{
        items.forEach((item)=>{
            if (item.isIntersecting){
                doStuffs(item.target,observer)
                //stop observing
                //observer.unobserve(item.target)
            }
        })
    })
    lazyElements.forEach((elem)=>{
        observer.observe(elem)
    })
}

const lazyLoader = () => {
    /*
    else{
        lazy.forEach((item)=>{
            let imgUrl=item.getAttribute("img-src")
            item.style.backgroundImage=`url(${imgUrl})`;
        })
    }
    */
}