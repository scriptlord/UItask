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
  margin-right: 1rem; // Provide some space around the title
  font-size: 1.5rem; // Adjust as per your design
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
  background-color: #232638; // The background color for the circle, change as needed
  border-radius: 50%; // Makes the div circular
  width: 2em; // Sets a fixed width for the circle
  height: 2em; // Sets a fixed height to maintain the aspect ratio
  margin-right: 2rem;
  svg {
    color: white; // The color of the icon
    width: 1em; // Adjust the icon size as needed
    height: 1em; // Adjust the icon size to maintain aspect ratio
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
