import React from 'react';
import styled from 'styled-components';
import LogoImage from '../assets/framer.webp';// Assuming you have a logo.svg file
import Logo2Image from '../assets/logo2.png';// Assuming you have a logo.svg file
import { AiOutlineSearch, AiOutlineBell, AiOutlineSetting } from 'react-icons/ai';
import { RiSettingsLine, RiSearch2Line, RiExpandUpDownLine } from "react-icons/ri";
import { FaDiamond } from "react-icons/fa6"
import { PiBellSimpleThin } from "react-icons/pi";
import profilePic from '../assets/user.png'; 

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  color: white;
`;

const StyledLogo = styled.img`
  width: 100%;  
  height: auto;  
  max-width: 22px;
`;

const IconContainer = styled.span`
  display: inline-flex; 
  color: #32384E; 
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  color: white;
  cursor: pointer;
  gap: 1rem;
  svg {
    margin-left: 8px; 
  }
`;

const NavLinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  padding: 10px 15px;
  color: white;
  text-decoration: none;
  background-color: transparent; 
  transition: background-color 0.3s, color 0.3s; 

  &:hover {
    background-color: #5F2EF4; 
  }
`;


const ActionIcons = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-left: 15px;
  }
`;

const ProfileImage = styled.img`
  width: 32px; 
  height: 32px; 
  border-radius: 50%;
`;

const VerticalLine = styled.div`
  height: 24px; 
  width: 1px; 
  background-color: #ffffff; 
  opacity: 0.15; 
`;

const HeaderSection = () => {
  return (
    <HeaderContainer>
      
    <LogoContainer>
      <StyledLogo src={Logo2Image} alt="Logo" /> 
         <IconContainer>
            <FaDiamond size="0.5em" />
        </IconContainer>
      <StyledLogo src={LogoImage} alt="Logo" /> 
         <span>Framer</span>
       <IconContainer>
            <RiExpandUpDownLine fontSize="20px"/>
      </IconContainer>        
    </LogoContainer>
      <NavLinkContainer>
        <NavLink href="#">Dashboard</NavLink>
        <NavLink href="#">Payments</NavLink>
        <NavLink href="#">Transaction</NavLink>
        <NavLink href="#">Cards</NavLink>
        <NavLink href="#">Invoices</NavLink>
        <NavLink href="#">Insights</NavLink>
      </NavLinkContainer>
      <ActionIcons>
        <RiSearch2Line size="1.5em" /> 
        <PiBellSimpleThin size="1.5em" />
        <VerticalLine />
        <RiSettingsLine size="1.5em"/>
        <ProfileImage src={profilePic} alt="Profile" />
      </ActionIcons>
    </HeaderContainer>
  );
};

export default HeaderSection;
