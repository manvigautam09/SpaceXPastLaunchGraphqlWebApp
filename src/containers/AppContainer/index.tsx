import { ReactNode } from "react";

interface AppContainerProps {
  children: ReactNode;
}

const AppContainer = (props: AppContainerProps) => {
  return <div>{props.children}</div>;
};

export default AppContainer;
