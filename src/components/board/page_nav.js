import { useSelector } from 'react-redux';

const PageNavigation = ({ getBoardList }) => {
  const pv = useSelector((state) =>
    state.board.pv ? state.board.pv : { currentPaage: 1 }
  );

  const pageNumbers = [];
  for (let i = pv.startPage; i <= pv.endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav arial-label='...'>
      <ul className='pagination'>
        <li className={pv.startPage <= 1 ? 'page-item disabled' : 'page-item'}>
          <span
            className='page-link'
            onClick={() => getBoardList(pv.startPage - pv.blockPage)}
          >
            &laquo;
          </span>
        </li>

        {pageNumbers.map((pnum, idx) => (
          <li
            key={pnum}
            className={pv.currentPage === pnum ? 'page-item active' : null}
            aria-current={pv.currentPage === pnum ? 'page' : null}
          >
            <span className='page-link' onClick={() => getBoardList(pnum)}>
              {pnum}
            </span>
          </li>
        ))}

        <li
          className={
            pv.endPage >= pv.totalPage ? 'page-item disalbed' : 'page-item'
          }
        >
          <span
            className='page-link'
            onClick={() => getBoardList(pv.startPage + pv.blockPage)}
          >
            &raquo;
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default PageNavigation;
