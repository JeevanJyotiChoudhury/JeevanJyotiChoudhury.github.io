import React from "react";
import myntra from "../assets/myntra.png";
import firstcry from "../assets/firstcry.png";
import sephora from "../assets/sephora.png";
import WorkCard from "./WorkCard";
import bewakoof from "../assets/bewakoof.png";
import weather from "../assets/weather.png";
import charity from "../assets/charity.png";

export default function Work() {
  return (
    <div id="projects">
      <section id="work__section" className="work__section">
        <div className="work__section__header">
          <div className="home__section__sub__heading">
            Some Things I’ve Built
          </div>
          <div className="home__section__heading">Projects</div>
        </div>
        <WorkCard
          tech={[
            "React",
            "Chakra UI",
            "Redux",
            "Node.js",
            "Express.js",
            "MongoDB",
          ]}
          heading={["Charity Hero"]}
          banner={charity}
          info="Charity hero is designed to raise funds for various purposes in form of crowd funding and donation. Through the use of our special approach, donors from all around the world can help us raise money to buy the goods that NGOs and charities in India need and then send them to them."
          siteLink="https://candid-yeot-faf58b.netlify.app/"
          githubLink="https://github.com/JeevanJyotiChoudhury/Charity-Hero-Donation-Management-App"
        />
        <WorkCard
          right
          tech={["React", "Chakra UI", "Redux", "Rest"]}
          heading={["Sephora NNNOW"]}
          banner={sephora}
          info="Sephora India is a renowned online beauty destination that offers a wide range of cosmetic and skincare products from prestigious brands. With its extensive selection, expert advice, and user-friendly interface, Sephora India has become a go-to platform for beauty enthusiasts across the country."
          siteLink="https://silly-alfajores-59acbe.netlify.app/"
          githubLink="https://github.com/JeevanJyotiChoudhury/few-insect-4217"
        />
        <WorkCard
          tech={["React", "Chakra UI"]}
          heading={["Firstcry"]}
          banner={firstcry}
          info="FirstCry is a leading online shopping platform dedicated to all things related to babies, kids, and maternity. It offers a wide range of products, including clothing, accessories, toys, baby care essentials, nursery furniture, and much more. With its extensive selection and user-friendly interface, FirstCry has become a go-to destination for parents and caregivers."
          siteLink="https://unique-tapioca-ac318c.netlify.app/"
          githubLink="https://github.com/JeevanJyotiChoudhury/exclusive-mice-3973"
        />
        <WorkCard
          right
          tech={["HTML", "CSS", "JavaScript"]}
          heading={["Myntra"]}
          banner={myntra}
          info="Myntra is a popular online fashion and lifestyle shopping website that offers a wide range of clothing, accessories, footwear, and home decor products for men, women, and children. With a user-friendly interface and a vast selection of brands and styles, Myntra has become a go-to destination for fashion enthusiasts."
          siteLink="https://jazzy-selkie-afc155.netlify.app/"
          githubLink="https://github.com/JeevanJyotiChoudhury/blessed-story-3613"
        />
        <WorkCard
          tech={["HTML", "CSS", "JavaScript"]}
          heading={["Bewakoof"]}
          banner={bewakoof}
          info="Bewakoof is an online retail website that offers a wide range of trendy and casual fashion apparel for both men and women. The website aims to provide customers with stylish and comfortable clothing options that reflect their unique personalities. From t-shirts, hoodies, and joggers to dresses, tops, and accessories, Bewakoof offers a diverse selection of fashion items for everyday wear. The brand emphasizes quality and affordability, ensuring that customers can find fashionable clothing at reasonable prices."
          siteLink="https://extraordinary-sopapillas-88db55.netlify.app/"
          githubLink="https://github.com/JeevanJyotiChoudhury/bewildered-head-3884"
        />
        <WorkCard
          right
          tech={["HTML", "CSS", "JavaScript"]}
          heading={["weatherApp"]}
          banner={weather}
          info="A weather app is an application that provides weather information for the upcoming seven days of a specific city. It includes details such as minimum and maximum temperatures, humidity levels, wind speed, and other relevant information. Additionally, the weather app integrate Google Maps, allowing users to automatically locate and view the weather information for their selected city."
          siteLink="https://celadon-gumdrop-8c71fa.netlify.app/"
          githubLink="https://github.com/JeevanJyotiChoudhury/Weather_app"
        />
      </section>
    </div>
  );
}
