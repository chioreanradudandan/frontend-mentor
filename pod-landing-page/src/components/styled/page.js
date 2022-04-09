import styled from "styled-components";
import imgHostMobile from "../../assets/mobile/image-host.jpg";
import imgHostTablet from "../../assets/tablet/image-host.jpg";
import { ReactComponent as LogoSvg } from "../../assets/desktop/logo.svg";

export const Container = styled.div`
  height: 100vh;
  background: ${({ theme }) =>
    `linear-gradient(${theme.colors.dark}, ${theme.colors.dark}),url(${imgHostMobile})`};
  background-size: cover;
  background-blend-mode: multiply;

  @media only screen and (min-width: 720px) {
    background: ${imgHostTablet};
  }
`;

export const LogoContainer = styled.div`
  @media only screen and (min-width: 720px) {
    background-color: red;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
`;

export const Logo = LogoSvg;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5em;
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
`;

export const Heading = styled.h1`
  font-size: 26px;
  line-height: 38px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1em;

  > span {
    display: inline-block;
    width: 100%;
    color: ${({ theme }) => theme.colors.light};
  }
`;

export const Paragraph = styled.p`
  font-size: 15px;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const PodCastsContainer = styled.div`
  margin: 2rem 0 3rem;
  display: flex;
  width: 100%;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
`;

export const PodCastContainer = styled.img`
  width: 100%;
  flex-basis: content;
  alt: "";
`;

export const FormContainer = styled.div`
  padding: 1.5em;
`;

export const InputGroup = styled.div`
  position: relative;
  margin-bottom: 2.5em;
`;
export const Input = styled.input`
  width: 100%;
  padding: 0.5em 1.5em;
  height: 3em;
  border: none;

  border-radius: 28px;
  color: ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Button = styled.button`
  width: 100%;
  height: 3em;
  border: none;
  border-radius: 28px;
  background-color: ${({ theme }) => theme.colors.primary};

  :hover {
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  }
`;

export const ErrorMessage = styled.p`
  position: absolute;
  left: 1em;
  bottom: -1.5em;
  color: ${({ theme }) => theme.colors.error};
`;
