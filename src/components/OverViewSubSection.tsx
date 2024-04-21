import React from 'react';
import styled from 'styled-components';
import { GoNorthStar } from "react-icons/go";
const SubSectionContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 65px;
  color: white;
`;

const ViewTitle = styled.h2`
  margin-right: 1rem; 
  font-size: 1.5rem; 
  display: flex;
  align-items: center;

  svg {
    font-weight: bold
  }
`;

const TimeFilter = styled.span`
  opacity: 0.7; 
`;

const Circle = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #232638; 
  border-radius: 50%; 
  width: 2em; 
  height: 2em; 
  margin-right: 2rem;
  svg {
    color: white; 
    width: 1em; 
    height: 1em; 
    margin: 0 auto
  }
`;



const OverviewSubSection = () => {
  return (
    <SubSectionContainer>
        <ViewTitle>
         <Circle>
             <GoNorthStar size="0.5em" />
        </Circle>   
        Overview
      </ViewTitle>
      <TimeFilter>Last 30 days</TimeFilter>
    </SubSectionContainer>
  );
};

export default OverviewSubSection;
