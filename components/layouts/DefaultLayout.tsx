import { FC } from 'react';
import { ToastContainer } from 'react-toastify';
import Header from './Header';

const DefaultLayout: FC = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <Header />
      <div>{children}</div>
      <ToastContainer position="top-right" className="left-auto" />
    </div>
  );
};

export default DefaultLayout;
