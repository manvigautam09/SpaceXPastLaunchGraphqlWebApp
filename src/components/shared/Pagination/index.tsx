import styled from 'styled-components';

import * as Icons from '../../../assets/icons/index';
import { tableLimitValues } from '../../../utils/appConstants';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
`;

const PageNumberDetails = styled.div`
  margin-left: 16px;
`;

interface PaginationProps {}

const Pagination = (props: PaginationProps) => {
  return (
    <PaginationContainer>
      Rows per page:
      <select
        name="Limit"
        id="limit"
        className="ml-4"
        // value={limit}
        // onChange={(e) => setLimit(Number(e.target.value))}
      >
        {tableLimitValues.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <PageNumberDetails className="ml-4">
        {/* {currentPageLimits.lowerLimit}-{currentPageLimits.upperLimit} of{' '} */}
        {/* {totalItems} */}
      </PageNumberDetails>
      <Icons.LeftArrow
      // onClick={goToPreviousPage}
      // className={previousIconClass}
      />
      <Icons.RightArrow
      //  onClick={goToNextPage} className={nextIconClass}
      />
    </PaginationContainer>
  );
};

export default Pagination;
