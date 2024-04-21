import styled from 'styled-components';
import {  BiSolidRightTopArrowCircle } from 'react-icons/bi';
import { FiPlus, FiMoreHorizontal } from 'react-icons/fi';
import { HiEye } from "react-icons/hi2";
import { MdArrowOutward } from "react-icons/md";

const TopRowContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 0 65px;
  height: 200px;
`;

const BalanceSection = styled.div`
  display: flex;

`;

const BalanceInfo = styled.div`
    display: flex;
    flex-direction: column;
    div {
        margin:0
    }
`

const BalanceTitle = styled.div`
  color: #ffffff;
  font-size: 1em; // Adjust the size as needed
  opacity: 0.7; // Diminish the opacity to match the design
  margin-bottom: 0.5rem; // Space between title and amount
`;


const TotalBalance = styled.h1`
  font-size: 2.5em; // Adjust based on your design
  margin: 0;
`;

const BalanceChange = styled.div`
  display: flex;
  align-items: flex-end; // Align the text to the baseline for the subscript effect
  font-size: 1em; // This ensures that the main balance size is relative to this parent font-size
  margin-left: 2rem;
  margin-bottom: 0.4rem
`;

const ActionButton = styled.button`
  background: transparent; // Use your brand's purple color
  border: none;
  color: white;
  padding: 10px 15px;
  cursor: pointer;
  margin-left: 10px;
  display: flex;
  align-items: center;
  &:hover {
    opacity: 0.9;
    background-color: #5F2EF4; 
  }
  & > svg {
    margin-right: 9px; 
  }
`;

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const IconContainer = styled.span`
  margin-right: 5px; // Adjust based on your design
    svg {
    display: block;
    color: #A4F500; 
    width: 20px; // Adjust the size of the icon
    height: 20px; // Adjust the size of the icon
  }
`;


const Circle = styled.div`
  display: inline-flex; // Center the icon horizontally and vertically
  align-items: center;
  justify-content: center;
  background-color: #161B2E; 
  cursor: pointer;
  margin-left: 20px;
  border-radius: 50%; // Makes the div circular
  padding: 10px; // You can adjust the padding to make the circle larger or smaller
  svg {
    color: #fff; // Set the color of the icon here
  }
`;


const TopRowContent = () => {
  return (
    <TopRowContentContainer>
        <BalanceSection>
        <BalanceInfo>
             <BalanceTitle>TOTAL BALANCE</BalanceTitle>   
            <TotalBalance>$36,254</TotalBalance> 
        </BalanceInfo>
        <BalanceChange>
        <IconContainer>
            <BiSolidRightTopArrowCircle />
        </IconContainer> 
          $328.32 Today, Feb 15
        </BalanceChange>
      </BalanceSection>
      <ActionsContainer>
        <ActionButton>
          <HiEye size="1.5em"/> View Analytics
        </ActionButton>
        <ActionButton>
          <MdArrowOutward size="1.5em" /> Send Money
        </ActionButton>
        <ActionButton>
          <FiPlus size="1.5em"/> Add Money
        </ActionButton>
        <Circle>
         <FiMoreHorizontal size="1.5em" />
        </Circle>
      </ActionsContainer>
    </TopRowContentContainer>
  );
};

export default TopRowContent;
