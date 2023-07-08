import React, { useEffect, useRef } from 'react'
import './Intro.scss'
import {KeyboardArrowUp} from '@material-ui/icons';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import {init} from 'ityped'

export default function Intro() {
  const typeref = useRef();
  useEffect(()=>{
    init(typeref.current, 
        { showCursor: true,
            backDelay: 1500,
        strings: ['Developer', 'Designer'] })
  }, [])
  return (
    <div className='Intro' id='intro'>
      <div className="downarw">
        <a href='#intro' style={{color: 'white'}}><KeyboardArrowUp className='Downarrow'/></a>
      </div>
      <div className="introContainor">
        <div data-aos-duration="1500" data-aos="zoom-in" className="introLeft" style={{opacity: window.innerWidth<1400 ? 0.3 : 0.9}}>
          <Player
            autoplay
            loop
            speed={1}
            // src="https://assets6.lottiefiles.com/packages/lf20_k86wxpgr.json"
            src="https://assets9.lottiefiles.com/packages/lf20_ghs9bkkc.json"
            style={{ height: '700px', width: '100%'}}>
          </Player>
        </div>
        <div data-aos-duration="1500" data-aos="fade-up"  className="IntroRight">
            <div className="mediaLinkSection">
              <div className="mediaLink">
                
              </div>
            </div>
            <div className="Heading">
              <h2>Hi There, I am</h2>
              <h1>Tushar Verma</h1>
              {/* <h3>A Web Ddeveoper, React native Developer & a Problem Solver</h3> */}
              <h3>Freelance <span ref={typeref}></span></h3>
            </div>
            <div className="btns">
              <a style={{textDecoration: 'none'}} href='https://drive.google.com/file/d/19VuWRETlTBUgwiX7ZrnPWHM4liWIlKIb/view' target='blank'><div className="lastButton">My Work</div></a>
              <a style={{textDecoration: 'none'}} href='#contact'><div className="lastButton">Hire Me</div></a>
            </div>
        </div>
      </div>
    </div>
  )
}
