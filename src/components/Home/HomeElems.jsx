import styled from "styled-components";

export const HeroContiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const HeroTitle = styled.h1`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 46px;
  font-weight: bold;
  color: #141c3a;
  margin: 10rem 0 0 0;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
export const HeroSubtitle = styled.p`
  font-family: "Assistant", sans-serif;
  font-size: 26px;
  color: #141c3a;
  margin-bottom: 8rem;
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 5rem;
  }
`;

export const HeroImg = styled.img`
  width: 100%;
  height: 25rem;
  margin: 0;
  padding: 0;
`;

export const AboutMeContiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #141c3a;
  height: 50vh;
  width: 100%;
`;

export const AboutMeTitle = styled.h1`
  color: #fff;
  font-family: "Assistant", sans-serif;
  font-weight: 700;
  font-size: 32px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const AboutMeDescription = styled.p`
  color: #fff;
  font-family: "Assistant", sans-serif;
  font-weight: normal;
  font-size: 20px;
  margin: 0;
  width: 60vw;
`;

export const MySkillsCardsContiner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FrontendDeveloperCard = styled.div`
  width: 40rem;
  height: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 0.5rem;
  border: 1px solid #e6edf9;
  position: relative;
  top: -50px;
  font-family: "Assistant", sans-serif;
  @media (max-width: 768px) {
    top: 0;
    width: 22rem;
  }
`;

export const BackendDeveloperCard = styled.div`
  width: 40rem;
  height: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 0.5rem;
  border: 1px solid #e6edf9;
  border-radius: 0.5rem;
  position: relative;
  top: -50px;
  font-family: "Assistant", sans-serif;
  @media (max-width: 768px) {
    top: 0;
    width: 22rem;
  }
`;

export const MyProjectsContiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #141c3a;
  height: 50vh;
  width: 100%;
`;

export const MyProjectsTitle = styled.h1`
  color: #fff;
  font-family: "Assistant", sans-serif;
  font-weight: bold;
  font-size: 32px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const MyProjectsDescription = styled.p`
  color: #fff;
  font-family: "Assistant", sans-serif;
  font-weight: normal;
  font-size: 20px;
  margin: 0;
  width: 50vw;
`;

export const MyProjectsCardsContiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const RoutyProjectCard = styled.div`
  width: 400px;
  height: 330px;
  font-family: "Assistant", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 16px;
  background-color: #fff;
  border: 1px solid #e6edf9;
  position: relative;
  top: -40px;
`;

export const MyProjectsCardRoutyTitle = styled.img`
  margin-top: 1rem;
`;
export const MyProjectsCardRoutyDescription = styled.p`
  font-weight: 400;
  font-size: 18px;
`;
export const MyProjectsCardRoutyLink = styled.p`
  text-decoration: none;
  background-color: #ecedef;
  padding: 5px 15px;
  font-weight: 600;
`;
