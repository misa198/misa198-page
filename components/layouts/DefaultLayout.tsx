import ScrollToTopButton from '@components/common/ScrollToTopButton';
import { FC } from 'react';
import ScrollToTop from 'react-scroll-up';
import { ToastContainer } from 'react-toastify';
import Footer from './Footer';
import Header from './Header';

const DefaultLayout: FC = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex flex-col">
      <Header />
      <div className="w-full flex-grow">{children}</div>
      <Footer />
      <ScrollToTop showUnder={100} duration={600}>
        <ScrollToTopButton />
      </ScrollToTop>
      <ToastContainer position="top-right" className="left-auto" />
    </div>
  );
};

export default DefaultLayout;
