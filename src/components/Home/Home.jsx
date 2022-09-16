import React, { useState } from "react";
import Navbar from "../misc/Navbar/Navbar";
import Sidebar from "../misc/Sidebar/Sidebar";
import { FaCodeBranch, FaGithub, FaEnvelope } from "react-icons/fa";
import "./Home.css";
import RoutyIcon from "./icons/RoutyLogo.png";
import {
  HeroTitle,
  HeroSubtitle,
  HeroContiner,
  HeroImg,
  AboutMeContiner,
  AboutMeTitle,
  AboutMeDescription,
  MySkillsCardsContiner,
  BackendDeveloperCard,
  FrontendDeveloperCard,
  MyProjectsContiner,
  MyProjectsTitle,
  MyProjectsDescription,
  RoutyProjectCard,
  MyProjectsCardsContiner,
  MyProjectsCardRoutyTitle,
  MyProjectsCardRoutyDescription,
  MyProjectsCardRoutyLink,
  FooterContiner,
  FooterTitle,
  FooterIconsContiner,
  FooterIcon,
  FooterCopyright,
} from "./HomeElems";
import HeroSectionImg from "../assets/hero-devices.svg";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContiner>
        <HeroTitle>Full-Stack Web Developer</HeroTitle>
        <HeroSubtitle>
          I code beautifully simple things, and I love what I do.
        </HeroSubtitle>
        <HeroImg src={HeroSectionImg} alt="" />
      </HeroContiner>
      <AboutMeContiner>
        <AboutMeTitle>Hi, I’m Lidor. Nice to meet you</AboutMeTitle>
        <AboutMeDescription>
          Since beginning my journey as a freelance web developer over 3 years,
          I’ve worked on many projects, from small to big, from simple to
          complex. I’ve learned a lot about the development process from the
          planning to the final delivery. perpetually working on improving my
          chops one programming problem at a time.
        </AboutMeDescription>
      </AboutMeContiner>
      <MySkillsCardsContiner>
        <FrontendDeveloperCard>
          <h1 className="front-end-card-title">Frontend Developer</h1>
          <p className="front-end-card-desc">
            I like to code things from scratch, and enjoy
          </p>
          <p className="front-end-card-desc">
            bringing ideas to life in the browser.
          </p>
          <p className="prog-leng-title-front-end-card">Languages I speak:</p>
          <p className="prog-leng-desc-front-end-card">React, SCSS, CSS, JSX</p>
          <p className="dev-tools-title-front-end-card">Dev tools:</p>
          <ul className="dev-tools-desc-front-end-card">
            <li>Vscode</li>
            <li>Bootstrap</li>
            <li>Bulma</li>
            <li>Github</li>
            <li>Terminal</li>
          </ul>
        </FrontendDeveloperCard>
        <BackendDeveloperCard>
          <h1 className="back-end-card-title">Backend Developer</h1>
          <p className="back-end-card-desc">
            I like to code endpoints from scratch, and enjoy
          </p>
          <p className="back-end-card-desc">
            seeing how it work with the front-end.
          </p>
          <p className="prog-leng-title-back-end-card">Languages I speak:</p>
          <p className="prog-leng-desc-back-end-card">
            JS, Express, MongoDB, NodeJS
          </p>
          <p className="dev-tools-title-back-end-card">Dev tools:</p>
          <ul className="dev-tools-desc-back-end-card">
            <li>Vscode</li>
            <li>Github</li>
            <li>Terminal</li>
          </ul>
        </BackendDeveloperCard>
      </MySkillsCardsContiner>
      <MyProjectsContiner>
        <MyProjectsTitle>My Peojects</MyProjectsTitle>
        <MyProjectsDescription>
          I’m a bit of a digital product junky. Over the years, I’ve used
          hundreds of web and mobile apps in different industries and verticals.
          Eventually, I decided that it would be a fun challenge to try
          designing and building my own.
        </MyProjectsDescription>
      </MyProjectsContiner>
      <MyProjectsCardsContiner>
        <RoutyProjectCard>
          <MyProjectsCardRoutyTitle src={RoutyIcon} />
          <MyProjectsCardRoutyDescription>
            Be notified only when it matters
          </MyProjectsCardRoutyDescription>
          <MyProjectsCardRoutyLink>
            <FaCodeBranch /> In Development
          </MyProjectsCardRoutyLink>
        </RoutyProjectCard>
      </MyProjectsCardsContiner>
      <FooterContiner>
        <FooterTitle>Living, learning, & leveling up</FooterTitle>
        <FooterTitle>one day at a time.</FooterTitle>
        <FooterIconsContiner>
          <FooterIcon onClick={() => window.open("https://www.github.com/lidor4x4", "_blank")}>
            <FaGithub  className="FaGithub" color="#fff" size="25px" />
          </FooterIcon>
          <FooterIcon onClick={() => window.open("contact-me", "_blank")}>
            <FaEnvelope className="FaEnvelope" color="#fff" size="25px" />
          </FooterIcon>
        </FooterIconsContiner>
        <FooterCopyright>Handcrafted by me © LidorH</FooterCopyright>
      </FooterContiner>
    </>
  );
}
