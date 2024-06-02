import React from 'react';


import './Style.css';
const AboutMe = () => {
  return (
    <div class="Container1">
        <div className="container2">
            <h1>Get to <span class="highlight">Know</span> About Me!</h1>
            <p>Hi, my name is <span className="highlight">Sanjana</span> and I'm from Gadwal, Telangana.</p>
            <p>Currently, I'm a second-year student at <span className="highlight">Scaler School of Technology</span>, where I'm gaining practical knowledge and skills in various computer science concepts.</p>
            <p>I <span class="highlight">believe</span> that computer science is not just about theoretical concepts but also about practical learning. It's about understanding how algorithms work, solving <span className="highlight">real-world problems, </span>, and building innovative solutions.</p>
            <p>As a <span className="highlight">web developer</span>, I enjoy creating websites and applications that are both functional and visually appealing.</p>
            <p>I'm always open to new collaborations and opportunities where I can apply my skills and contribute to meaningful projects. Feel free to <span className="highlight">connect</span> with me through the links provided in the footer.</p>
        </div>
        <div class="container3">
            <h2>Education</h2>
                <div class="contentss">
                    <div class="box">
                        <h3>Schooling <span>(2011-2021)</span></h3>
                        <p>I studied at Kakatiya High School, Gadwal, until my 10th grade.</p>
                    </div>
                    <div class="box">
                        <br></br>
                        <h3>Intermediate Education <span>(2021-2023)</span></h3>
                        <p>I completed my 11th and 12th grades at Resonance, Hyderabad, studying Mathematics, Physics, and Chemistry, while also preparing for competitive exams.</p>
                    </div>
                    <div class="box">
                        <h3>Under-Graduation <span>(2023-2027)</span></h3>
                        <p>I am currently pursuing a Computer Science degree at Scaler School of Technology, focusing on improving my skills.</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default AboutMe;
