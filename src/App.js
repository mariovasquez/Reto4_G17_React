import Header from './components/sections/Header';
import logo from './assets/svg/Logo_Vao.svg';
import './styles/css/index.css';
import './styles/css/library.css';
import IndexPage from './pages/IndexPage';
import heroSliderImg1 from './assets/img/Baterista_Slider.jpg';
import heroSliderImg2 from './assets/img/Artik_Monkeys_Slider.jpg';
import heroSliderImg3 from './assets/img/Imagine_Dragon_Slider.jpg';

function App() {
  return (
    <>
      <Header logo={logo}/>
      <main>
        <IndexPage
        heroSliderImg1={heroSliderImg1}
        heroSliderImg2 = {heroSliderImg2}
        heroSliderImg3 = {heroSliderImg3}
        />
      </main>
    </>
  );
}

export default App;
