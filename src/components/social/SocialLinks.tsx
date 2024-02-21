import "./SocialLinks.scss";
import FacebookIcon from "../../images/icons/FacebookIcon";
import LinkedInIcon from "../../images/icons/LinkedInIcon";
import GitHubIcon from "../../images/icons/GitHubIcon";

const socialArr = [
  "https://www.facebook.com/people/Julia-Aseeva/pfbid02CHhBh684REJhb7yjxZkC8BUtYQBx8e7n8HjLFz2BjbhnCQ56RZu5fBWnsA7c5nzRl/",
  "https://github.com/JulsDev",
  "https://www.linkedin.com/in/juliaaseeva/",
];

const SocialLinks = () => {
  return (
    <ul className="socials socials--rounded">
      <li className="socials__item socials__item--rounded">
        <a href={socialArr[0]} className="socials__link">
          <div className="socials__icon">
            <FacebookIcon />
          </div>
        </a>
      </li>
      <li className="socials__item socials__item--rounded">
        <a href={socialArr[1]} className="socials__link">
          <div className="socials__icon">
            <LinkedInIcon />
          </div>
        </a>
      </li>
      <li className="socials__item socials__item--rounded">
        <a href={socialArr[2]} className="socials__link">
          <div className="socials__icon">
            <GitHubIcon />
          </div>
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
