import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCircleArrowUp, FaCircleArrowDown } from "react-icons/fa6";

const TabsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
`;

interface TabProps {
    active: boolean
}
const Tab = styled.div<TabProps>`
  cursor: pointer;
  width: 50%;
  display: flex;
  align-items: center;
  opacity: ${({ active }) => (active ? 1 : 0.65)}; 
  padding: 10px 20px;
  border-bottom: ${({ active }) => (active ? '3px solid #000' : '1px solid #ddd')};
`;

const IconContainer = styled.div`
  margin-right: 15px; 
`;

const TextContainer = styled.div`
  text-align: left;
`;

const Title = styled.div`
  font-size: 0.9rem; 
  margin-bottom: 5px; 
`;

const Amount = styled.div`
  font-size: 1.5rem;
`;

const WholeAmount = styled.span`
  font-size: 1.5rem;
`;

const DecimalAmount = styled.span`
  font-size: 1rem; 
  opacity: 0.5; 
`;

const formatAmount = (amount:any) => {
  const hasDecimals = amount.includes('.');
  let [whole, decimal] = hasDecimals ? amount.split('.') : [amount, '00'];
  decimal = decimal.padEnd(2, '0');
  return (
    <>
      <WholeAmount>${whole}</WholeAmount>
      <DecimalAmount>.{decimal}</DecimalAmount>
    </>
  );
};

const MoneyTabs = () => {
  const [activeTab, setActiveTab] = useState('in'); 

  return (
    <TabsContainer>
      <Tab active={activeTab === 'in'} onClick={() => setActiveTab('in')}>
        <IconContainer>
          <FaCircleArrowUp size="1.5em" />
        </IconContainer>
        <TextContainer>
          <Title>MONEY IN</Title>
        <Amount>{formatAmount("5,083")}</Amount>
        </TextContainer>
      </Tab>
      <Tab active={activeTab === 'out'} onClick={() => setActiveTab('out')}>
        <IconContainer>
          <FaCircleArrowDown size="1.5em" />
        </IconContainer>
        <TextContainer>
          <Title>MONEY OUT</Title>
          <Amount>{formatAmount("485.64")}</Amount>
        </TextContainer>
      </Tab>
    </TabsContainer>
  );
};

export default MoneyTabs;
