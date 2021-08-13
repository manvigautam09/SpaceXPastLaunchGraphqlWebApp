import React from 'react';
import styled from 'styled-components';

import Pagination from '../Pagination';

interface GenericTableProps {
  tableRowHeadingOptions: {
    label: string;
    value: string;
  }[];
  rowHeadingOptions: {
    id: string;
    launchDate: string;
    rocketName: string;
    missionName: string;
    link: string;
  }[];
  tablePaginationDetails?: {
    limit: number;
    offset: number;
    totalPages: number;
    totalItems: number;
    currentPage: number;
    setLimit: (val: number) => void;
    setOffset: (val: number) => void;
  };
}

const StyledTable = styled.table`
  border: solid 1px lightgrey;
  border-collapse: collapse;
  width: 100%;

  td,
  th {
    border: none;
    padding: 15px 20px;
    text-align: left;
  }

  td {
    padding: 15px 20px;
  }

  tbody tr {
    cursor: pointer;
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background-color: #eff6ff;
    }
  }
  thead > tr {
    background-color: #c2c2c2;
    position: sticky;
    top: 0;
  }
`;

const TableContainer = styled.div`
  overflow-y: auto;
  max-height: 60vh;
  position: relative;
`;

const GenericTable = (props: GenericTableProps) => {
  const { tableRowHeadingOptions, rowHeadingOptions, tablePaginationDetails } =
    props;

  return (
    <React.Fragment>
      <TableContainer>
        <StyledTable>
          <thead>
            <tr>
              {tableRowHeadingOptions.map((item) => {
                return <th key={item.value}>{item.label}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {rowHeadingOptions.map((rowDetail) => (
              <tr
                key={rowDetail.id}
                onClick={() => window.open(rowDetail.link)}
              >
                {tableRowHeadingOptions.map((item) => (
                  <td key={item.label}>{rowDetail[item.value]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </TableContainer>
      {tablePaginationDetails && (
        <Pagination
          limit={tablePaginationDetails.limit}
          offset={tablePaginationDetails.offset}
          totalItems={tablePaginationDetails.totalItems}
          totalPages={tablePaginationDetails.totalPages}
          currentPage={tablePaginationDetails.currentPage}
          setLimit={tablePaginationDetails.setLimit}
          setOffset={tablePaginationDetails.setOffset}
        />
      )}
    </React.Fragment>
  );
};

export default GenericTable;
