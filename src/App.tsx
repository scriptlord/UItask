import React from 'react';
import styled from 'styled-components';
import AccountSummary from './components/AccountSummary';
import RecentTransactions from './components/RecentTransactions';
// import CustomLineChart from './CustomLineChart';
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
  // Style for header
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px; // Adjust spacing as needed
`;

const accountsMock = [
  { type: 'Business Account', amount: '$33,842', change: 12.3 },
  { type: 'Tax Reserve', amount: '$700', change: -2.1 },
  { type: 'Business Savings', amount: '$1,623', change: 4.5 },
];

const transactionsMock = [
  { id: 't1', service: 'Stripe', date: 'Wed, 16 Feb, 18:11', amount: '+$1,223.00' },
  { id: 't2', service: 'Dropbox', date: 'Tue, 15 Feb, 14:24', amount: '-$200.00' },
  { id: 't3', service: 'Zendesk', date: 'Wed, 16 Feb, 18:11', amount: '-$1,223.18' },
];

const TopRow = styled.div`
  background-color: #050A1F;
  padding: 1rem;
  height: 400px;
  // overflow: hidden; 
`;

const AccountSummaryContainer = styled.div`
  z-index: 2; // Make sure this z-index is higher than that of TopRow
  position: relative; // Needed for z-index to take effect
  // Other styles...
`;

const BottomRow = styled.div`
  background-color: #ffffff; // White color for the bottom content row
  flex-grow: 1; // Take up the remaining space
  padding: 1rem;
  //  margin-top: -100px; // Pull the bottom row up to overlap the top row
  z-index: 1; // Ensure it's above the top row
  position: relative; // Establish a positioning context
  
`;

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  // height: 100vh; 
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
              <AccountSummary />
            </AccountSummaryContainer>
         
            <RecentTransactions transactions={transactionsMock} />
      
            </MainContent>
        </BottomRow>
    </LayoutContainer>
    </AppContainer>
  );
};

export default App;
