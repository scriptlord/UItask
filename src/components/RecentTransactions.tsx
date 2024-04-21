import React from 'react';
import styled from 'styled-components';
import zendesk from '../assets/zendesk.jpeg'
import spotify from '../assets/spotify.webp'
import dropbox from '../assets/dropbox.webp'
import stripe from '../assets/stripe.png'
import { TbTopologyStar2 } from "react-icons/tb";
import { TbNorthStar } from "react-icons/tb";
import MoneyTabs from './MoneyTabs';



const TransactionsContainer = styled.div`
  background: #ffffff;
  border-radius: 8px;
  padding: 20px;
  // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 47%;
`;

const TransactionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const TitleSection = styled.div`
  display: flex;
  align-items: center;
`;

const TransactionIcon = styled.img`
  // Replace with your actual styles for the icon
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const TransactionTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  color: #333;
  margin-left: 10px;
  display: inline; // Keeps the subtitle close to the title
`;

const TransactionSubtitle = styled.span`
  margin-left: 10px; // Adjust the spacing as needed
  font-weight: 400;
  color: #666; // Lighter text color for the subtitle
  font-size: 1rem; // Smaller font size for the subtitle
`;

const SeeAll = styled.div`
  font-family: "Poppins", sans-serif;
  color: #6346C8;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;


const TransactionList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const TransactionItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  transition: transform 0.3s ease-in-out;

  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: #F7F8FC;
  //  box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.1); // Deeper inset shadow for pressed effect
    transform: scale(0.98)
  }

`;

const ServiceIcon = styled.img`
  // Assuming we have SVG icons, adjust the styles accordingly
  // flex-shrink: 0;
  height: 50px;
  wiidth: 50px;
`;

const ServiceDetails = styled.div`
  flex-grow: 1;
  padding-left: 10px;
`;

const ServiceName = styled.div`
  font-weight: 500;
`;

const ServiceDate = styled.div`
  font-size: 0.85rem;
  color: #666;
`;

const TransactionType = styled.span`
  // flex-grow: 1;
  font-size: 0.85rem;
  background-color: #F7F8FC;
  padding: 6px 12px;
  // border-radius: 4px;
`;
const TableWrapper = styled.div`
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
`;


interface TransactionAmountProps {
  isPositive: boolean;
}


const TransactionAmount = styled.span<TransactionAmountProps>`
  color: ${(props) => (props.isPositive ? '#528078' : '#090914')};
  font-family: "Roboto Mono", monospace;
  font-weight: 500;
  flex-grow: 2;
  text-align: end;
`;

const DecimalPart = styled.span`
  opacity: 0.5;
`;

const transactionsData = [
  {
    id: 't1',
    icon: stripe, 
    name: 'Stripe',
    date: 'Wed, 16 Feb, 18:11',
    type: 'Business',
    amount: '+$1,223.00',
    isPositive: true,
  },
  {
    id: 't2',
    icon: dropbox, 
    name: 'Dropbox',
    date: 'Wed, 16 Feb, 18:11',
    type: 'Equipment',
    amount: '-$1,223.00',
    isPositive: false,
  },
  {
    id: 't3',
    icon: zendesk, 
    name: 'Zendesk',
    date: 'Wed, 16 Feb, 18:11',
    type: 'Marketing',
    amount: '-$1,223.00',
    isPositive: false,
  },
    {
    id: 't4',
    icon: spotify, 
    name: 'Spotify',
    date: 'Wed, 16 Feb, 18:11',
    type: 'Entertainment',
    amount: '-$1,223.00',
    isPositive: false,
  },
  
];

const RecentTransactions: React.FC = () => {
  const formatAmount = (amount: string) => {
    const [whole, decimal] = amount.split('.');
    return { whole: whole, decimal: `.${decimal}` };
  };
  return (
    <TableWrapper>
    <TransactionsContainer>
      <TransactionHeader>
        <TitleSection>
          <TbTopologyStar2  size="1.5em"/>
          <TransactionTitle>
            Recent Transactions <TransactionSubtitle>Last 5 activity</TransactionSubtitle>
          </TransactionTitle>
        </TitleSection>
        <SeeAll>See All</SeeAll>
      </TransactionHeader>
      <TransactionList>
          {transactionsData.map((transaction) => {
          const { whole, decimal } = formatAmount(transaction.amount);
          return(
          <TransactionItem key={transaction.id}>
            <ServiceIcon src={transaction.icon} alt={transaction.name} />
            <ServiceDetails>
              <ServiceName>{transaction.name}</ServiceName>
              <ServiceDate>{transaction.date}</ServiceDate>
            </ServiceDetails>
            <TransactionType>{transaction.type}</TransactionType>
             <TransactionAmount isPositive={transaction.isPositive}>
                  {whole}
                  <DecimalPart>{decimal}</DecimalPart>
                </TransactionAmount>
          </TransactionItem>
          )
        })}
      </TransactionList>
      </TransactionsContainer>
      
    <TransactionsContainer>
      <TransactionHeader>
        <TitleSection>
          <TbNorthStar  size="1.5em"/>
          <TransactionTitle>
            Cash Flow <TransactionSubtitle>Last 30 days</TransactionSubtitle>
          </TransactionTitle>
        </TitleSection>
        <SeeAll>See All</SeeAll>
        </TransactionHeader>
        <MoneyTabs/>
        <TransactionList>
        {/* {transactionsData.map((transaction) => (
          <TransactionItem key={transaction.id}>
            <ServiceIcon src={transaction.icon} alt={transaction.name} />
            <ServiceDetails>
              <ServiceName>{transaction.name}</ServiceName>
              <ServiceDate>{transaction.date}</ServiceDate>
            </ServiceDetails>
            <TransactionType>{transaction.type}</TransactionType>
            <TransactionAmount isPositive={transaction.isPositive}>
              {transaction.amount}
            </TransactionAmount>
          </TransactionItem>
        ))} */}
      </TransactionList>
      </TransactionsContainer>
    </TableWrapper>
  );
};

export default RecentTransactions;



