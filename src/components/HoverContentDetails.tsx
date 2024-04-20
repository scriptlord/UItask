import styled from 'styled-components';
import { AiOutlineLineChart } from "react-icons/ai";

const ViewDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
//   background-color: #ffffff;
//   border: 1px solid #E4E5EB;
//   padding: 10px 15px;
//   cursor: pointer;
//   transition: all 0.3s;
//   max-width: 250px; 

  &:hover {
    // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    // background: #DFE5EF
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
  background-color: #5F2EF4; // or any color you want for the circle
  border-radius: 50%;
  width: 40px; // Circle size
  height: 40px; // Circle size
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Optional: if you want a shadow for the circle
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
}

const HoverContentDetails: React.FC<HoverContentDetailsProps> = ({ onIconClick }) => {
  return (
     <ViewDetailsContainer>
          <ButtonText>View Account Details</ButtonText>
          <IconCircle onClick={onIconClick}>
                <AiOutlineLineChart size="1.5rem" />
          </IconCircle>
      </ViewDetailsContainer>
  );
};

export default HoverContentDetails;