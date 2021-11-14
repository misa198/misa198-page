import { FC } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import Button from './Button';

interface Props {
  totalPages: number;
  currentPage: number;
  onChangePage: (page: number) => void;
}

const Pagination: FC<Props> = ({ totalPages, currentPage, onChangePage }) => {
  function onPrevious() {
    if (currentPage > 1) {
      onChangePage(currentPage - 1);
    }
  }

  function onNext() {
    if (currentPage < totalPages) {
      onChangePage(currentPage + 1);
    }
  }

  return (
    <div className="flex">
      <Button
        color={currentPage === 1 ? 'secondary' : 'primary'}
        variant="outlined"
        className="p-0 w-10 h-10 flex justify-center items-center"
        onClick={onPrevious}
      >
        <ChevronLeft />
      </Button>
      <Button
        disabled
        variant="outlined"
        className="p-0 w-10 h-10 flex justify-center items-center mx-1"
      >
        {currentPage}
      </Button>
      <Button
        color={currentPage >= totalPages ? 'secondary' : 'primary'}
        variant="outlined"
        className="p-0 w-10 h-10 flex justify-center items-center"
        onClick={onNext}
      >
        <ChevronRight />
      </Button>
    </div>
  );
};

export default Pagination;
