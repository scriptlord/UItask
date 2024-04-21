import React from 'react';
import styled from 'styled-components';
import AccountSummary from './components/AccountSummary';
import RecentTransactions from './components/RecentTransactions';
import { motion } from 'framer-motion';
import HeaderSection from './components/Header';
import TopRowContent from './components/TopRowContent';
import OverviewSubSection from './components/OverViewSubSection';

const AppContainer = styled.div`
  padding: 60px 50px;
  background-color: #e1defe;
  min-height: 100vh;
`;


const Header = styled.header`
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px; 
`;

const accountsMock = [
  { type: 'Business Account', amount: '$33,842', change: 12.3 },
  { type: 'Tax Reserve', amount: '$700', change: -2.1 },
  { type: 'Business Savings', amount: '$1,623', change: 4.5 },
];


const transactionsMock= [
  {
    id: 't1',
    service: 'Stripe',
    date: 'Wed, 16 Feb, 18:11',
    amount: '+$1,223.00',
    type: 'Business', 
  },
  {
    id: 't2',
    service: 'Dropbox',
    date: 'Tue, 15 Feb, 14:24',
    amount: '-$200.00',
    type: 'Equipment',
  },
  {
    id: 't3',
    service: 'Zendesk',
    date: 'Wed, 16 Feb, 18:11',
    amount: '-$1,223.18',
    type: 'Marketing', 
  },
];


const TopRow = styled.div`
  background-color: #050A1F;
  padding: 1rem;
  height: 550px;
`;

const AccountSummaryContainer = styled.div`
  display: flex;
  justify-content: space-around;
  // width: 100%;
  margin-bottom: 2rem;
  z-index: 2; 
  top: -190px;
  position: relative; 
   overflow: hidden;
`;

const BottomRow = styled.div`
  background-color: #ffffff; 
  flex-grow: 1; 
  padding: 1rem;
  //  margin-top: -100px; 
  z-index: 1; 
  position: relative; 
  
`;

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TransactionContainer = styled.div`
  margin-top: -210px
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <LayoutContainer>
        <TopRow>
          <Header>
            <HeaderSection/>
          </Header>
          <TopRowContent />
          <OverviewSubSection />
        </TopRow>
        <BottomRow>
            <MainContent as={motion.div} initial="hidden" animate="visible" variants={{
              hidden: {
                opacity: 0,
                scale: 0.8
              },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  delayChildren: 0.3,
                  staggerChildren: 0.2
                }
              }
          }}>
            <AccountSummaryContainer>
            {accountsMock.map((account, index) => (
              <AccountSummary key={index} type={account.type} amount={account.amount} change={account.change} />
              ))}
            </AccountSummaryContainer>
            <TransactionContainer>
              <RecentTransactions />
            </TransactionContainer>
      
            </MainContent>
        </BottomRow>
    </LayoutContainer>
    </AppContainer>
  );
};

export default App;
