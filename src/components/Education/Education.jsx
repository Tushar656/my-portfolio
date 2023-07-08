import React, {useRef} from 'react'
import "./Education.scss"
import { Player } from '@lottiefiles/react-lottie-player';
import { useIsInViewport } from '../CheckView';

export default function Education() {
  // const topEdu = useRef();
  // const topEduInView = useIsInViewport(topEdu);
  // console.log('isInViewport1: ', topEduInView);
  return (
    <div className='Education' id='education'>
        {/* <div data-aos-duration="1500" data-aos="fade-right" className={`${topEduInView ? "topEducation" : "topEducation topEducationHide"}`} ref={topEdu}> */}
        <div className="topEducation">
            <div data-aos-duration="1500" data-aos="fade-right" className="lefttopEdu">
            <Player
              autoplay
              loop
              speed={1}
              src="https://assets2.lottiefiles.com/packages/lf20_hxart9lz.json"
              // src="https://assets9.lottiefiles.com/packages/lf20_qedvtocb.json"
              style={{ height: 'auto', width: '70%' }}>
            </Player>
            </div>
            <div data-aos-duration="1500" data-aos="fade-left" className="righttopEdu">
              <div className="rtdWrper">
                <h3>Education <span style={{color: "#6860fb"}}>Background</span></h3>
                <div>Education is the passport to the future, for tomorrow belongs to those who prepare for it today.</div>
                <div><b>- Malcolm X</b></div>
              </div>
            </div>
        </div>
        <div className="bottomEducation">
            <div className="mainedu">
              <div data-aos-duration="1500" data-aos="fade-right" className="edubox">
                <span className="timepred">2020-2024</span>
                <div className="instName">
                  <span className="fullinstName">Indian Institute of Information Technology, Surat</span>
                  <span className="instNamesort">(IIIT SURAT)</span>
                </div>
                <div className="eduDesc">Bachelors of Technology, Computer Science & Engineering</div>
                <ul className="eduLists">
                  <li className="eduListDesc">8.9 CGPA in first year</li>
                  <li className="eduListDesc">8.7 CGPA in second year</li>
                </ul>
              </div>
              <div data-aos-duration="1500" data-aos="fade-up" className="edubox">
                <span className="timepred">2019-2020</span>
                <span className="instName">Shardey Vidhya School</span>
                <div className="eduDesc">12th Class</div>
                <ul className="eduLists">
                  <li className="eduListDesc">Top 3 in class</li>
                  <li className="eduListDesc"><span style={{fontWeight: "bold", color: "#575757"}}>AIR 55</span> in Technothlon (Conducted by IIT Guwahati)</li>
                </ul>
              </div>
              <div data-aos-duration="1500" data-aos="fade-left" className="edubox">
                <span className="timepred">2017-2018</span>
                <span className="instName">Royal Public School</span>
                <div className="eduDesc">10th Class</div>
                <ul className="eduLists">
                  <li className="eduListDesc">Top 5 in class</li>
                  <li className="eduListDesc">District Chess champion award</li>
                </ul>
              </div>
            </div>
        </div>
    </div>
  )
}
