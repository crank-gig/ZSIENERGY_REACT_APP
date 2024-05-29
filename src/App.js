import React,{useEffect} from 'react';

import './component_styles/base.css';

import Home from './components/Home';
import About from './components/About';
import Products from './components/Product';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';



function App() {

  useEffect(()=>{
    	//giving the main element a margin-top
        document.querySelector("main").style.marginTop = document.querySelector('.top-bar-wrapper').offsetHeight+'px';

        /*Progressive loading and selective functionality*/
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
                  default:
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

  },[])

  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}


export default App;
