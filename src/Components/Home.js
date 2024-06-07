// src/Components/Home.js
import React from 'react';
import Lottie from 'react-lottie';
import Typing from './Section1/Typing';
import BriefItro from './Section2/BriefIntro';
import firstLaptopAnimation from './firstLaptop.json';

const Home = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: firstLaptopAnimation,
  };

  return (
    <section className="content">
      <div className="section11">
        <Typing
          text={[
            "Software Developer.",
            "Coding ideas into reality.",
          ]}
          typingSpeed={100}
          deleteSpeed={50}
          duration={1000}
        />
        <div class="lottiee">
        <Lottie
          options={lottieOptions}
          height={530}
          width={530}
        /> </div>
      </div>
      <BriefItro />
    </section>
  );
};

export default Home;
