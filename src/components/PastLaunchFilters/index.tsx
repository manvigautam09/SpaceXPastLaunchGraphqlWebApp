import { useCallback, useMemo, useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

import {
  MissionsFilters,
  PastLaunchDetails
} from '../../store/reducer/pastLaunchesReducer/type';
import ModalContent from '../ModalContent';

interface PastLaunchFilterProps {
  filterDetails: MissionsFilters;
  itemsToCompareList: PastLaunchDetails[];
  onSubmitFilters: (filterDetails: MissionsFilters) => void;
}

const FilterContainer = styled.div`
  display: flex;
  padding: 5px 10px;
  align-items: flex-start;
  justify-content: space-between;
`;

const FiltersDetail = styled.div`
  display: flex;
`;

const FilterDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubmitResetFilters = styled.div`
  padding: 10px 0px;
  display: flex;
`;

const SpaceDiv = styled.div`
  width: 10px;
`;

const StyledLabel = styled.label`
  font-weight: bold;
`;

const StyledInput = styled.input`
  padding: 10px;
  font-size: 15px;
  width: 300px;
  border-radius: 5px;
  border: solid 1px lightgrey;
  outline: none;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: solid 1px lightgrey;
  cursor: ${(props) => (props.disabled ? 'no-drop' : 'pointer')};
`;

const FilterArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

const PastLaunchFilters = (props: PastLaunchFilterProps) => {
  const { filterDetails, itemsToCompareList, onSubmitFilters } = props;

  const [missionName, setMissionName] = useState(filterDetails.missionName);
  const [rocketName, setRocketName] = useState(filterDetails.rocketName);

  const isSubmitResetDisabled = useMemo(
    () =>
      filterDetails.missionName === missionName &&
      filterDetails.rocketName === rocketName,
    [missionName, rocketName, filterDetails]
  );

  const [modalIsOpen, setIsOpen] = useState(false);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <FilterContainer>
      <StyledButton
        disabled={itemsToCompareList.length < 2}
        onClick={() => {
          if (itemsToCompareList.length === 2) {
            setIsOpen(true);
          }
        }}
      >
        Compare
      </StyledButton>
      <FilterArea>
        <FiltersDetail>
          <FilterDetail>
            <StyledLabel>Mission Name</StyledLabel>
            <StyledInput
              value={missionName}
              placeholder="Enter Mission Name"
              onChange={(e) => setMissionName(e.target.value)}
            />
          </FilterDetail>
          <SpaceDiv />
          <FilterDetail>
            <StyledLabel>Rocket Name</StyledLabel>
            <StyledInput
              value={rocketName}
              placeholder="Enter  Rocket Name"
              onChange={(e) => setRocketName(e.target.value)}
            />
          </FilterDetail>
        </FiltersDetail>

        <SubmitResetFilters>
          <StyledButton
            disabled={isSubmitResetDisabled}
            onClick={() => onSubmitFilters({ missionName, rocketName })}
          >
            Submit
          </StyledButton>
          <SpaceDiv />
          <StyledButton
            disabled={isSubmitResetDisabled}
            onClick={() => onSubmitFilters({ missionName: '', rocketName: '' })}
          >
            Reset
          </StyledButton>
        </SubmitResetFilters>
      </FilterArea>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <ModalContent itemsToCompareList={itemsToCompareList} />
      </Modal>
    </FilterContainer>
  );
};

export default PastLaunchFilters;
