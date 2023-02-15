import Pagination from 'react-bootstrap/Pagination';
import React from 'react';

const RPagination: React.FC<{total: number, limit: number, currentPage: number, change: (data: any) => void}> = (props) => {
    const { total, limit, currentPage } = props;
    const pages = Math.ceil(total / limit);
    const lastPageNumber = pages;
    const pageChanged = (number: number) => {
      if (number === currentPage) return;
      props.change({
        page: number,
        skip: limit * (number - 1)
      });
    }

    // Pagination
    const items = [];
    for (let number = 1; number <= pages; number++) {
        items.push(
          <Pagination.Item onClick={() => pageChanged(number)} key={number} active={number === currentPage}>
            {number}
          </Pagination.Item>,
        );
    }

    return <React.Fragment>
        <Pagination>
            <Pagination.First onClick={() => pageChanged(1)}/>
            <Pagination.Prev onClick={() => pageChanged(currentPage === 1 ? 1 : currentPage - 1)}/>
                {items}
            <Pagination.Next onClick={() => pageChanged(currentPage + 1)}/>
            <Pagination.Last onClick={() => pageChanged(lastPageNumber)}/>
        </Pagination>
    </React.Fragment>
}
export default RPagination;