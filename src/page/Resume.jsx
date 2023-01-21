import React from 'react'
import { NavBar } from '../components/NavBar'
import styled from "styled-components"
import { Footer_Resume } from '../components/Footer_Resume'

const Container = styled.div`
margin-top= 154px !important;
margin-bottom= 80px !important;

`

export const Resume = () => {
  return (
    <>
      <NavBar />

      <Container>
        <section id="resume" className="resume section-show">
          <div className="container">

            <div className="section-title">
              <h2>Resume</h2>
              <p>Check My Resume</p>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <h3 className="resume-title">Sumary</h3>
                <div className="resume-item pb-0">
                  <h4>Aiza Malik</h4>
                  <p><em>I am a flexible, detail-oriented and professional Web Developer who loves creating innovative web solutions as well as writing inviting content for your web apps and interfaces. I'm a self-reliant , task-driven and a reliable developer. </em></p>
                  <p>
                    <ul>
                      <li>74600,Khi, Pak</li>
                      <li>+92-336-1127041</li>
                      <li>aiza2110e@aptechgdn.net</li>
                    </ul>
                  </p>
                </div>

                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                  <h4> Higher Diploma in Software Engineering</h4>
                  <h5>2021 - 2023</h5>
                  <p><em>Aptech, Khi Pak</em></p>
                  
                </div>
                <div className="resume-item">
                  <h4>BS in English</h4>
                  <h5>2022 - 2026</h5>
                  <p><em>University of Karachi, Khi, Pak</em></p>

                </div>
              </div>
              <div className="col-lg-6">
                <h3 className="resume-title">Certificates</h3>
                <div className="resume-item">
                  <h4>No Code Development Tools</h4>
                  <h5>2021 December</h5>
                  
                  
                </div>
                <div className="resume-item">
                  <h4>Plan Your Website Like a Pro</h4>
                  <h5>2022 February</h5>
                  
                </div>

                
                <div className="resume-item">
                  <h4>Lets Build a Clone Of Insta</h4>
                  <h5>2022 July</h5>
                  
                </div>

                <div className="resume-item">
                  <h4>Shopify</h4>
                  <h5>2022 September</h5>
                  
                </div>

                <h3 className="resume-title">Projects</h3>
                <div className="resume-item">
                  <h4> Cooking Dreams &amp; -Front-end</h4>
                  <h5>2022 Feb</h5>
                  <p><em>Html, Css, Bootstrap & JS</em></p>
                  <a href="https://shorturl.at/mox68">Cooking Dreams</a>
                  
                </div>
                <div className="resume-item">
                  <h4>Lab Automation &amp; -Front-end & Back-end</h4>
                  <h5>2022 Oct</h5>
                  <p><em>Html, Css, Bootstrap, Laravel & MySQL</em></p>
                  <a href="https:shorturl.at/elo25">Lab Automation</a>


                </div>
              </div>
              
            </div>

          </div>
        </section>
      </Container>

      <Footer_Resume />
    </>


  )
}


