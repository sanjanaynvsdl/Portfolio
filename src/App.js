
import './App.css';
import Lottie from 'react-lottie'; // Import react-lottie
import NavBar from './Components/NavBarComponent/NavBar';
import Typing from './Components/Section1/Typing';
import BriefItro from './Components/Section2/BriefIntro';
import firstLaptopAnimation from './firstLaptop.json'; 
import Footerr from './Components/Section3/Footerr';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>

      <section class="content">
        <div class="section11">
        <Typing
          text={[
            "Software Developer.",
            "Coding ideas into reality.",
          ]}
          typingSpeed={100}
          deleteSpeed={50}
          duration={1000}
        />
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: firstLaptopAnimation,
              }}
              height={530}
              width={530}
            />

        </div>
      <BriefItro/>
      <Footerr/>
      </section>
      {/* <section class="content2">
       
      </section> */}

      
    </div>
  );
}

export default App;
