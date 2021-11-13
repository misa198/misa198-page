import { FC } from 'react';
import Header from './Header';

const DefaultLayout: FC = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default DefaultLayout;
