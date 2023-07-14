import { FunctionComponent, ReactNode } from 'react';

export interface IProps {
  main: ReactNode;
}

const Layout: FunctionComponent<IProps> = ({ main }) => {
  return <div>{main}</div>;
};

export default Layout;
