import styled from 'styled-components';

import LaunchCard from './LaunchCard';
import { PastLaunchDetails } from '../../store/reducer/pastLaunchesReducer/type';

interface ModalContentProps {
  itemsToCompareList: PastLaunchDetails[];
}

const ModalContainer = styled.div`
  height: 80vh;
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardsDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const ModalContent = (props: ModalContentProps) => {
  const { itemsToCompareList } = props;

  return (
    <ModalContainer>
      <h1>SpaceX</h1>
      <CardsDiv>
        {itemsToCompareList.map((pastLaunch) => (
          <LaunchCard key={pastLaunch.id} pastLaunch={pastLaunch} />
        ))}
      </CardsDiv>
    </ModalContainer>
  );
};

export default ModalContent;
