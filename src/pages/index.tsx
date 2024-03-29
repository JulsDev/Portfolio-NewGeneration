import AboutMe from './About/AboutMe';
import Home from './Home/Home';
import './styles.scss';
import ContactMe from './ContactMe/ContactMe';

const Page = () => {
  return (
    <div className='pages-container'>
      <Home />
      <AboutMe />
      <ContactMe />
    </div>
  )
};

export default Page;