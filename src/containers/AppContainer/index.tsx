import { ReactNode } from 'react';
import styled from 'styled-components';

interface AppContainerProps {
  children: ReactNode;
}

const StyledAppContainer = styled.div`
  height: 100vh;
`;

const AppContainer = (props: AppContainerProps) => {
  return <StyledAppContainer>{props.children}</StyledAppContainer>;
};

export default AppContainer;
