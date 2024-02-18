import './SocialLinks.scss';
import socialArr from './content';

const SocialLinks = () => {
  return (
    <ul className='socials socials--rounded'>
      {socialArr.map((item) => {
        return (
          <li key={item.alt} className='socials__item socials__item--rounded' >
            <a href={item.url} className='socials__link'>
              <div className='socials__icon'>{item.alt}</div>
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default SocialLinks;