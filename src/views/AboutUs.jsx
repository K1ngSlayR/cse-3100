import React from 'react';
import './aboutus.css'; 

// Importing images
import t1 from './t1.JPG';
import t2 from './t2.JPG';
import t3 from './t3.JPG';

function AboutUs() {
  return (
    <div className="about-us">
      <main>
        <section className="mission">
          <h2>Our Mission</h2>
          <p>
            At Purrfect Adoption, our mission is to provide loving homes for every cat in need. 
            We strive to connect cats with their forever families and promote responsible pet ownership.
          </p>
        </section>

        <section className="history">
          <h2>Our History</h2>
          <p>
            Founded in 2022, Purrfect Adoption has successfully rehomed thousands of cats. 
            Over the years, we have grown into a community-driven organization that works tirelessly 
            to improve the lives of stray and abandoned cats.
          </p>
        </section>

        <section className="team">
          <h2>Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src={t1} alt="Team Member 1" />
              <h3>Nabil Riyasat</h3>
              <p>Founder & CEO</p>
            </div>

            <div className="team-member">
              <img src={t2} alt="Team Member 2" />
              <h3>Zarif Mahmud</h3>
              <p>Head of Adoptions</p>
            </div>

            <div className="team-member">
              <img src={t3} alt="Team Member 3" />
              <h3>Faryad Tosser</h3>
              <p>Veterinary Specialist</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AboutUs;
