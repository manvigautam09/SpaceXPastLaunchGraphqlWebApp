import { useMemo, useState } from 'react';
import styled from 'styled-components';

import { MissionsFilters } from '../../store/reducer/pastLaunchesReducer/type';

interface PastLaunchFilterProps {
  filterDetails: MissionsFilters;
}

const FilterContainer = styled.div`
  display: flex;
  padding: 20px 10px;
  flex-direction: column;
  align-items: flex-end;
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

const PastLaunchFilters = (props: PastLaunchFilterProps) => {
  const { filterDetails } = props;

  const [missionName, setMissionName] = useState('');
  const [rocketName, setRocketName] = useState('');

  const isSubmitResetDisabled = useMemo(
    () =>
      filterDetails.missionName === missionName &&
      filterDetails.rocketName === rocketName,
    [missionName, rocketName, filterDetails]
  );

  return (
    <FilterContainer>
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
        <StyledButton disabled={isSubmitResetDisabled}>Submit</StyledButton>
        <SpaceDiv />
        <StyledButton disabled={isSubmitResetDisabled}>Reset</StyledButton>
      </SubmitResetFilters>
    </FilterContainer>
  );
};

export default PastLaunchFilters;
