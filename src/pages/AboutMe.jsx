import Header from '../components/Header';
import About from '../components/About';
import Expertises from '../components/Expertises';
import Education from '../components/Education';
import Footer from '../components/Footer';
import PagesHeader from '../components/PagesHeader';
const AboutMe = () => {
  return (
    <>
      <PagesHeader name='About' />
      <About/>
      <Expertises/>
      <Education/>
      <Footer/>
    </>
  )
}

export default AboutMe