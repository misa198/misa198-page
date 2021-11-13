import { FC } from 'react';
import { ToastContainer } from 'react-toastify';
import Header from './Header';
import Footer from './Footer';

const DefaultLayout: FC = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <Header />
      <div>{children}</div>
      <Footer />
      <ToastContainer position="top-right" className="left-auto" />
    </div>
  );
};

export default DefaultLayout;
