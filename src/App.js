
import './App.css';
import NavBar from './Components/NavBarComponent/NavBar';
import Typing from './Components/Section1/Typing';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        
      </header>
      <section class="content">
      <Typing
        text={[
          "Software Developer.",
          "Coding ideas into reality.",
        ]}
        typingSpeed={100}
        deleteSpeed={50}
        duration={1000}
      />

      </section>
      
    </div>
  );
}

export default App;
