import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Footer from "./components/Footer/footer";
import Education from "./components/Education/education";
import Works from "./components/Works/works";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Education/>
      <Works/>
      <Footer/>
    </div>
  );
}

export default App;
