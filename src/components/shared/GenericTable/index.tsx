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
  }

  td {
    padding: 15px 20px;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background-color: #eff6ff;
    }
  }
  thead > tr {
    background-color: #c2c2c2;
  }
`;

const GenericTable = (props: GenericTableProps) => {
  const { tableRowHeadingOptions, rowHeadingOptions } = props;

  return (
    <React.Fragment>
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
            <tr key={rowDetail.id}>
              {tableRowHeadingOptions.map((item) => (
                <td key={item.label}>{rowDetail[item.value]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </StyledTable>
      <Pagination />
    </React.Fragment>
  );
};

export default GenericTable;
