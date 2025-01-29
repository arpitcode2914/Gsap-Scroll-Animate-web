import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import './App.css';
// import sun from "../public/sun"
// import cloud1 from "../public/cloud1"
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // ScrollTrigger for background color change
    gsap.to(".box", {
      scrollTrigger: {
        trigger: ".box",
        start: "top 0%",
        end: "bottom 50%",
        scrub: 2,
        // markers: true, 
      },
      backgroundColor: "red", // Change background color smoothly
    });

    // ScrollTrigger for text movement
    gsap.to("#box_inside_txt", {
      scrollTrigger: {
        trigger: "#box_inside_txt",
        // start: "top 0%",    // Animation starts when .box top hits the center
        // end: "bottom ",      // Animation ends when .box bottom hits the top
        start: "top 0%",    // Animation starts when .box top hits the center
        end: "bottom 50%",    // Animation ends when .box bottom hits the center

        scrub: true, 
        // markers: true,            // Smooth animation based on scroll
               // Show markers for debugging
      },
      // position: "absolute",    // Position the text absolutely
      // top:"90%",
      // left:"80%",
      y: 500,      
      duration:2,             // Move text 100px down from its original position
      // x: 100,                   // Move text 100px to the right from its original position
      // right:"0%",             // Move to horizontal center
      // transform: "translate(-50%, -50%)", // Keep text centered
      scale: 3,                 // Add a zoom effect
      opacity: 0.8,             // Make the text slightly transparent
      color: "yellow",          // Change text color
    });


    gsap.to(".content",{
        scrollTrigger:{
            trigger:".content",
            top:"10% 0%",
            end:"bottom ",
            scrub:true
        },
        // backgroundColor:"black",
        // marker:"true"
    })

    gsap.to(".content_box_1" ,{
      trigger:".content_box_1",
      scrollTrigger:{
        trigger:".content_box_1",
        start:"10% 50%",
        end:"bottom 10%",
        scrub:2,
        // markers:true,
      },
      // backgroundColor:"white",
      y:500,
      left:"85%",
      duration:3
    })


    gsap.to(".content_2",{
      scrollTrigger:{
        trigger:".content_2",
        // markers:true,
        start:"10% 60%",
        end:"30% 10%",
        scrub:2,
        // markers:true
      },

      
    })

    // star 


    gsap.to(".star_png",{
      scrollTrigger:{
        trigger:".star_png",
        start:"10% 60%",
        end:"90% 20%",
        scrub:2,
        // markers:true,

        // markers:true,
      },
      
      // rotateZ:360,
      scale:6,
      y:500,
      left:"50%",
      duration:1,
      // display:"block"
    })


    // cloud 
    gsap.to(".cloud_1",{
      scrollTrigger:{
        trigger:".cloud_1",
        start:"10% 90%",
        end:"20% 70%",
        scrub:2,
        // markers:true,

        // markers:true,
      },
      // y:500,
      left:"20%",
      duration:3,
      scale:1.1,
      // display:"block"
    })
    // gsap.to(".cloud_2",{
    //   scrollTrigger:{
    //     trigger:".cloud_2",
    //     start:"10% 50%",
    //     end:"20% 20%",
    //     scrub:2,
    //     // markers:true,

    //     // markers:true,
    //   },
    //   // y:500,
    //   right:"20%",
    //   duration:3,
    //   // display:"block"
    // })
  }, []);

  return (
    <div className="app">
      <div className="box">
        <p id="box_inside_txt">Scroll to Animate Me</p>
      </div>
      <div className="content">
          <div className='content_box_1'>
                
          </div>
      </div>

      <div className='content_2'>
          <img src="/sun.png" alt="moon png" className='star_png'/>
          {/* <img src={sun} alt="moon png" className='star_png'/> */}
          {/* <img src={cloud1} alt="cloud" className='cloud_1'/>    */}
          <img src="/cloud1.png" alt="cloud" className='cloud_1'/>   
          {/* <img src="../public/cloud2.png" alt="cloud" className='cloud_2'/>    */}
      </div>

      <div className='sun_container'>

      </div>
    </div>
  );
}

export default App;
