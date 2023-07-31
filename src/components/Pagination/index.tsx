import { styPaginationContainer } from './styles';

interface ButtonProps {
  currentPage: number;
  hasNextPage?: boolean;
  handlePageChange: (pageNumber: number) => void;
}

const Pagination = (props: ButtonProps) => {
  const handlePrev = () => {
    if (props.currentPage !== 1) {
      props.handlePageChange(props.currentPage - 1);
    }
  };
  const handleNext = () => {
    if (props.hasNextPage) {
      props.handlePageChange(props.currentPage + 1);
    }
  };
  return (
    <div className={styPaginationContainer}>
      <button disabled={props.currentPage === 1} onClick={handlePrev}>
        ❮
      </button>
      <button disabled={!props.hasNextPage} onClick={handleNext}>
        ❯
      </button>
    </div>
  );
};

export default Pagination;
