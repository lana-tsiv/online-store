import '../styles/Pagination.css'
import {PaginationProps} from "../pages/Cart";
import classNames from "classnames";

const range = (start: number, end: number): number[] => {
    return Array.from({length: end}, (_, item) => item + start);
}

const PaginationItem = ({page, currentPage, onPageChange}: PaginationProps) => {
    const liClasses = classNames({
        'page-item': true,
        active: page === currentPage
    })
    return (
        <li className={liClasses} onClick={() => onPageChange(page)}>
            <span className='page-link'>{page}</span>
        </li>
    )
}

const Pagination = ({currentPage, limit=0, total=0, onPageChange}: PaginationProps) => {

    const numOfPages = Math.ceil(total / limit);
    const pages = range(1, numOfPages)

    return (
        <ul className='pagination'>
            {pages.map((page) => (
                <PaginationItem
                    page={page}
                    key={page}
                    currentPage={currentPage}
                    onPageChange={onPageChange}
                />
            ))}
        </ul>
    );
};

export default Pagination;