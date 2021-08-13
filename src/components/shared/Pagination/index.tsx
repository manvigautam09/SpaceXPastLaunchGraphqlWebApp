import { useCallback, useMemo } from 'react';
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

const DropDown = styled.select`
  margin-left: 16px;
`;

interface PaginationProps {
  limit: number;
  offset: number;
  totalItems: number;
  totalPages: number;
  currentPage: number;
  setLimit: (val: number) => void;
  setOffset: (val: number) => void;
}

const Pagination = (props: PaginationProps) => {
  const {
    limit,
    offset,
    totalItems,
    totalPages,
    currentPage,
    setLimit,
    setOffset
  } = props;

  const currentPageLimits = useMemo(
    () => ({
      lowerLimit: (currentPage - 1) * limit + 1,
      upperLimit:
        currentPage * limit <= totalItems ? currentPage * limit : totalItems
    }),

    [currentPage, limit, totalItems]
  );

  const goToPreviousPage = useCallback(() => {
    if (currentPage > 1) {
      setOffset(offset - limit);
    }
  }, [currentPage, offset, setOffset, limit]);

  const goToNextPage = useCallback(() => {
    if (currentPage < totalPages) {
      setOffset(offset + limit);
    }
  }, [currentPage, totalPages, offset, setOffset, limit]);

  return (
    <PaginationContainer>
      Rows per page:
      <DropDown
        name="Limit"
        id="limit"
        value={limit}
        onChange={(e) => setLimit(Number(e.target.value))}
      >
        {tableLimitValues.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </DropDown>
      <PageNumberDetails>
        {currentPageLimits.lowerLimit}-{currentPageLimits.upperLimit} of{' '}
        {totalItems}
      </PageNumberDetails>
      <Icons.LeftArrow
        onClick={goToPreviousPage}
        style={{
          marginLeft: 16,
          opacity: currentPage <= 1 ? 0.2 : 1,
          cursor: currentPage <= 1 ? 'default' : 'pointer'
        }}
      />
      <Icons.RightArrow
        onClick={goToNextPage}
        style={{
          marginLeft: 32,
          marginRight: 16,
          opacity: currentPage >= totalPages ? 0.2 : 1,
          cursor: currentPage >= totalPages ? 'default' : 'pointer'
        }}
      />
    </PaginationContainer>
  );
};

export default Pagination;
