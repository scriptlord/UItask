import styled from 'styled-components';
import { AiOutlineLineChart } from "react-icons/ai";
import MyLineChart from './MyLineCharts';

const ViewDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  &:hover {
  }
`;
const ButtonText = styled.span`
  font-size: 1rem; 
  color: #333;
  background-color: #ffffff;
  border: 1px solid #E4E5EB;
  padding: 10px 15px;
  cursor: pointer;
  max-width: 250px; 
  &:hover {
    background: #DFE5EF;
  }
`;
const IconCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #5F2EF4; 
  border-radius: 50%;
  width: 40px; 
  height: 40px; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  svg {
    color: #fff;
  }
`;

const ArrowIcon = styled(AiOutlineLineChart)`
  font-size: 1.5rem; 
  color: #fff;
`;

interface HoverContentDetailsProps {
    onIconClick: () => void;  
     isExpanded: boolean;
}

const HoverContentDetails: React.FC<HoverContentDetailsProps> = ({ onIconClick, isExpanded }) => {
  return (
     <ViewDetailsContainer>
          <ButtonText>View Account Details {!isExpanded }</ButtonText>
          {!isExpanded && (
            <IconCircle onClick={onIconClick}>
                  <AiOutlineLineChart size="1.5rem" />
            </IconCircle>
          )}
      </ViewDetailsContainer>
  );
};

export default HoverContentDetails;
