import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TransactionsContainer = styled(motion.div)`
  margin-top: 2rem;
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  // Add more styles as per the UI design
`;

const TransactionList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const TransactionItem = styled(motion.li)`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid #eaeaea;

  &:last-child {
    border-bottom: none;
  }
`;

// Replace with actual data structure
type Transaction = {
  id: string;
  service: string;
  date: string;
  amount: string;
};

type RecentTransactionsProps = {
  transactions: Transaction[];
};

const RecentTransactions: React.FC<RecentTransactionsProps> = ({ transactions }) => {
  return (
    <TransactionsContainer>
      <TransactionList>
        {transactions.map((transaction, index) => (
          <TransactionItem
            key={transaction.id}
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            {/* Transaction content */}
            <span>{transaction.service}</span>
            <span>{transaction.date}</span>
            <span>{transaction.amount}</span>
          </TransactionItem>
        ))}
      </TransactionList>
    </TransactionsContainer>
  );
};

export default RecentTransactions;
