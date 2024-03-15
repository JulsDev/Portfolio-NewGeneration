import React from "react";
import "./About.scss";
import PageTitle from "../../components/Common/PageTitle";
import myPhoto from "../../images/julia.jpg";

const contactInfo = [
  { type: "Location:", contant: "San Francisco Bay Area" },
  { type: "Email:", contant: "aseeva.ays@gmail.com" },
  { type: "Phone:", contant: "+19254309614" },
];

const AboutMe = () => {
  return (
    <section className="section-about" id="about">
      <div className="container-about">
        <div className="container">
          <PageTitle title="About me" />
          <div className="about-content">
            <div className="about-contacts">
              <div className="photo__block">
                <img
                  src={myPhoto}
                  alt="julia developer"
                  className="photo__img"
                />
              </div>
              <table className="about-table">
                <tbody>
                  {contactInfo.map((item, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">{item.type}</th>
                        <td>{item.contant}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="about-description">
              <p className="person-descr__hello"> Hi everyone, my name is </p>
              <p className="person-descr__name"> Julia Aseeva</p>
              <div className="person-descr__youself">
                <p className="person-descr__about">
                  {" "}
                  I am a Software Engineer / Web developer with four
                  years of web development experience and seven years of prior
                  experience as a research software engineer.
                </p>
                <p>
                  {" "}
                  I am a very empathic person and always think about users! I
                  like to delight clients and deliver excellent service. This is
                  the main reason why I chose front-end development.
                </p>
              </div>
              <div className="person-descr__footnote">
                <p>
                  {" "}
                  If you have a great idea, I will be happy to help you bring it
                  to life!{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
