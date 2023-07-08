import React, { useState } from 'react'
import './Topbar.scss'

export default function Topbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={'Topbar ' + (menuOpen && "Active")}>

      <div className="background"></div>

      <div className="TopLeft">
        {/* <a href="#intro"><img className='logoImg' src="/assets/tusharlogo1.png" alt="" /></a> */}
        <a href="#intro">Tushar</a>

      </div>

      <div className="TopRight">
        <ul>
          <li><a href='#intro' onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href='#about' onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href='#education' onClick={() => setMenuOpen(false)}>Education</a></li>
          <li><a href='#skills' onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li><a href='#projects' onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href='#contact' onClick={() => setMenuOpen(false)}>Contact</a></li>
          <li className='topResume'><a href='https://drive.google.com/file/d/19VuWRETlTBUgwiX7ZrnPWHM4liWIlKIb/view' target='blank' onClick={() => setMenuOpen(false)}>Resume</a></li>
        </ul>
      </div>

      <div className="hamberger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </div>
  )
}

