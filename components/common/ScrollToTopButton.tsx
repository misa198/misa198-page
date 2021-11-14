import { FC } from 'react';
import Button from './Button';
import { ChevronUp } from 'react-feather';

const ScrollToTopButton: FC = () => {
  return (
    <Button
      variant="outlined"
      className="bg-white absolute left-auto right-0 bottom-0 p-2"
    >
      <ChevronUp />
    </Button>
  );
};

export default ScrollToTopButton;
