import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { AiOutlineArrowUp } from 'react-icons/ai';
import HoverContentDetails from './HoverContentDetails';
import { IoIosArrowBack } from "react-icons/io";
import MyLineChart from './MyLineCharts';
import { BiSolidRightTopArrowCircle } from 'react-icons/bi';
interface AccountCardProps {
  isHovered: boolean;
  isExpanded: boolean;
  borderColor?: string; 
}


const IconContainer = styled.span`
  margin-right: 5px;
    svg {
    display: block;
    color: #A4F500; 
    border: none;
    width: 20px; 
    height: 20px; 
  }
`;
 

const AccountCard = styled(motion.div)<AccountCardProps>`
  background-color: #FFFFFF;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: auto;
  margin: 20px;
  position: relative;
  cursor: pointer;
   display: flex; 
  justify-content: space-between; 
  align-items: center; 
 
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: ${props => props.isExpanded ? '0' : '20px'};
    right: ${props => props.isExpanded ? '0' : '20px'};
    height: 4px;
    background: ${props => (props.isExpanded && props.isHovered) ? 'purple' : 'transparent'};

    transition: background 0.3s;
  }
  &:hover:before {
    background: ${props => (props.isHovered && !props.isExpanded) ? '#DFE5EF' : '#B9ABF4'};
  }
`;
const LeftColumn = styled.div`
  flex: 1; 
`;

const RightColumn = styled.div<{ isExpanded: boolean }>`
  display: ${({ isExpanded }) => (isExpanded ? 'flex' : 'none')};
  flex-basis: 265px; 
  flex-shrink: 0; 
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
  color: #27ae60; 
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BalanceLayer = styled(motion.div)`
  font-size: 2.5rem;
  font-weight: 100;
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

const RightArrowContainer = styled.div<{ isExpanded: boolean; onClick: () => void }>`
  display: ${({ isExpanded }) => (isExpanded ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  right: 0; 
  transform: translateY(-50%);
  background-color: #F7F8FC;
  height: 110px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  svg {
    color: #A7ADBA;
  }
`;
interface AccountSummaryProps {
  type: string;
  amount: string;
  change: number;
}

const AccountSummary: React.FC<AccountSummaryProps> = ({ type, amount, change }) => {
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
    expanded: { width: '800px' } 
};
  
  const toggleExpand = () => {
    setIsExpanded(prev => {
        return !prev;
    });
};

  return (
      <AccountCard
      onMouseEnter={() => {
      setIsHovered(true);
      }}
        onMouseLeave={() => {
        setIsHovered(false);
  }}
        isHovered={isHovered}
        isExpanded={isExpanded}
        variants={widthVariants}
        initial="initial"
        animate={isExpanded ? "expanded" : "initial"}
        transition={{ duration: 0.5 }}
      >
       <LeftColumn>
            <IconLayer>
              <AiOutlineArrowUp size="1.5em" />
            </IconLayer>

            <InfoLayer>
              <AccountName>{type}</AccountName>
              <ChangePercentage>
                <IconContainer>
                    <BiSolidRightTopArrowCircle />
              </IconContainer> 
                {change}%
              </ChangePercentage>
            </InfoLayer>

            <BalanceLayer
              variants={balanceVariants}
              initial="visible"
              animate={isHovered ? "hidden" : "visible"}
              transition={{ duration: 0.3 }}
            >
              {amount}
            </BalanceLayer>

            <HoverContent
              variants={hoverVariants}
              initial="hidden"
              animate={isHovered ? "visible" : "hidden"}
              transition={{ duration: 0.3, delay: 0.1 }} 
            >
              <HoverContentDetails onIconClick={toggleExpand} isExpanded={isExpanded} />
          </HoverContent>
        </LeftColumn>
        <RightColumn isExpanded={isExpanded}>
        {isExpanded && <MyLineChart />}
        <RightArrowContainer isExpanded={isExpanded} onClick={toggleExpand}>
            <IoIosArrowBack size="1.3em" /> 
        </RightArrowContainer>
        </RightColumn>
      </AccountCard>
    

  );
};

export default AccountSummary;
