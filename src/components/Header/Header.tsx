import Navigation from '../navigation/Navigation';

import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <a href='#' className='logo'>JA </a>
      </div>
      <Navigation />
      <p>language block</p>
    </header>
  )
};

export default Header;