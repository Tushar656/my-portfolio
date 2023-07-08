import React from 'react'
import './Projects.scss'

export default function Projects() {
    return (
        <div className='Projects' id='projects'>
            <h1 data-aos-duration="1500" data-aos="fade-right">My Projects</h1>
            <a href='https://github.com/Tushar656?tab=repositories' target="_blank"><button data-aos-duration="1500" data-aos="fade-left" className='vmBtn'>View More</button></a>
            <div data-aos-duration="1500" data-aos="fade-up" className="allProjects">
                <div className="projectCard">
                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-124ba.appspot.com/o/projects%2FfullSM.png?alt=media&token=4a89c231-b5c3-4d09-9942-378e50748f34" alt="" />
                    <div className="dataCard">
                        <h2>Social media</h2>
                        <div className='projectDesc'>
                            <div>Complete social media web application with post and chat functanility.</div>
                            <div>Tech used are react js and socket io for messaging.</div>
                        </div>
                    </div>
                </div>
                <div className="projectCard">
                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-124ba.appspot.com/o/projects%2FfullBlog2.png?alt=media&token=24b90846-2802-49b0-9808-792e8b02f53a" alt="" />
                    <div className="dataCard">
                        <h2>Blog Website</h2>
                        <div className='projectDesc'>
                            <div>A blog website to publish Blog posts.</div>
                            <div>Tech used are react js , MongoDB and Context API.</div>
                        </div>
                    </div>
                </div>
                <div className="projectCard">
                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-124ba.appspot.com/o/projects%2FfullEC.png?alt=media&token=7d5c91b0-fef6-4466-a1d3-aafc04ed9b60" alt="" />
                    <div className="dataCard">
                        <h2>E-Commerce</h2>
                        <div className='projectDesc'>
                            <div>A Design of an E-Commerce Website.</div>
                            <div>Techs used are react Js , Firebase cloud storage and Redux for state management.</div>
                        </div>
                    </div>
                </div>
                <div className="projectCard" style={{ backgroundColor: 'rgb(57, 57, 57)' }}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-124ba.appspot.com/o/projects%2Fportfolio.png?alt=media&token=84869074-4589-4eb0-b50d-77c73d808bf2" alt="" />
                    <div className="dataCard">
                        <h2>Portfolio</h2>
                        <div className='projectDesc'>My Portfolio website that you wisite Now.</div>
                    </div>
                </div>
                <div className="projectCard">
                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-124ba.appspot.com/o/projects%2FUber.jpeg?alt=media&token=495e2bc2-ec69-434f-8bd8-6ee2355f78cc" alt="" />
                    <div className="dataCard">
                        <h2>Uber-Clone</h2>
                        <div className='projectDesc'>
                            <div>Design of Uber food clone based on react-native.</div>
                            <div>Techs used are React-native, Yelp API for Restorent data and Redux.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
