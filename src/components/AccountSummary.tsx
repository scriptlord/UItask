import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { AiOutlineArrowUp } from 'react-icons/ai';
import HoverContentDetails from './HoverContentDetails';
interface AccountCardProps {
  isHovered: boolean;
  isExpanded: boolean;
  borderColor?: string; 
}

const AccountCard = styled(motion.div)<AccountCardProps>`
  background-color: #FFFFFF;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: auto;
  margin: 20px;
  position: relative;
  cursor: pointer;
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: ${props => props.isExpanded ? '0' : '20px'};
    right: ${props => props.isExpanded ? '0' : '20px'};
    height: 4px;
    background: ${props => props.isHovered && props.isExpanded ? 'purple' : 'transparent'};
    transition: background 0.3s;
  }
  &:hover:before {
    background: #DFE5EF; 
  }
`;

const IconLayer = styled.div`
  background: linear-gradient(145deg, #f0f0f0, #cacaca);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const InfoLayer = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 10px
`;

const AccountName = styled.div`
  font-size: 1.2rem;
  color: #333333;
`;

const ChangePercentage = styled.div`
  font-size: 1rem;
  color: #27ae60; // Use a different color if the value is negative
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BalanceLayer = styled(motion.div)`
  font-size: 2.5rem;
  font-weight: bold;
`;

const HoverContent = styled(motion.div)`
  font-size: 1rem;
  color: #7f8c8d;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  padding:0px 20px;
  height: fit-content
`;


const AccountSummary = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const balanceVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -20 }
};

const hoverVariants = {
  visible: { opacity: 1, y: 155 },
  hidden: { opacity: 0, y: 175 }
};
  
const widthVariants = {
    initial: { width: '400px' }, 
    expanded: { width: '600px' } 
};
  
const toggleExpand = () => {
  setIsExpanded(!isExpanded);
};


  return (
    <AccountCard
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      isHovered={isHovered}
      isExpanded={isExpanded}
      variants={widthVariants}
      initial="initial"
      animate={isExpanded ? "expanded" : "initial"}
      transition={{ duration: 0.5 }}
    >
      <IconLayer>
        <AiOutlineArrowUp size="1.5em" />
      </IconLayer>

      <InfoLayer>
        <AccountName>BUSINESS ACCOUNT</AccountName>
        <ChangePercentage>
          <AiOutlineArrowUp color="#27ae60" />
          12.3%
        </ChangePercentage>
      </InfoLayer>

      <BalanceLayer
        variants={balanceVariants}
        initial="visible"
        animate={isHovered ? "hidden" : "visible"}
        transition={{ duration: 0.3 }}
      >
        $33,842
      </BalanceLayer>

      <HoverContent
        variants={hoverVariants}
        initial="hidden"
        animate={isHovered ? "visible" : "hidden"}
        transition={{ duration: 0.3, delay: 0.1 }} 
      >
        <HoverContentDetails onIconClick={toggleExpand}/>
      </HoverContent>

    </AccountCard>
  );
};

export default AccountSummary;
