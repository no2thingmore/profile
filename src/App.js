import './App.css';
import Header from './component/header';
import Intro from './component/mainpage/intro';
import Footer from './component/footer';
import About from './component/mainpage/aboute';
import Skill from './component/mainpage/skill';
import Proj from './component/mainpage/proj';
import Repository from './component/mainpage/repository';
import Contact from './component/mainpage/contact';

function App() {
    return (
        <div className="App">
            <Header />

            <Intro />
            <About />
            <Skill />
            <Repository />
            <Proj />
            <Contact />
            
            <Footer />
        </div>
    );
}

export default App;
