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
  font-size: 1em;
  opacity: 0.7; 
  margin-bottom: 0.5rem; 
`;


const TotalBalance = styled.h1`
  font-size: 2.5em; 
  margin: 0;
`;

const BalanceChange = styled.div`
  display: flex;
  align-items: flex-end; 
  font-size: 1em; 
  margin-left: 2rem;
  margin-bottom: 0.4rem
`;

const ActionButton = styled.button`
  background: transparent; 
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
  margin-right: 5px; 
    svg {
    display: block;
    color: #A4F500; 
    width: 20px; 
    height: 20px; 
  }
`;


const Circle = styled.div`
  display: inline-flex; 
  align-items: center;
  justify-content: center;
  background-color: #161B2E; 
  cursor: pointer;
  margin-left: 20px;
  border-radius: 50%; 
  padding: 10px; 
  svg {
    color: #fff; 
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
