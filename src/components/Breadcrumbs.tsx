import './../styles/Breadcrumbs.css'
import ArrowIcon from './../assets/icons/right-arrow.png'
import {Link} from "react-router-dom";

export interface BreadcrumbsProps {
    id: number,
    title: string,
    category: string
    productName: string,
}

const Breadcrumbs = ({productName, title, category}: BreadcrumbsProps) => {

    return (
        <nav>
            <Link
                to="/"
                className="breadcrumb-not-active breadcrumb__home"
            >
                Home
            </Link>
            <img className="breadcrumb__arrow" src={ArrowIcon} alt='arrow'/>
            <Link
                to=''
                className='breadcrumb-not-active'
            >
                {category}
            </Link>
            <img className="breadcrumb__arrow" src={ArrowIcon} alt='arrow'/>
            <Link
                to=''
                className='breadcrumb-not-active'
            >
                {title}
            </Link>
            <img className="breadcrumb__arrow" src={ArrowIcon} alt='arrow'/>
            <Link
                to=''
                className='breadcrumb-not-active breadcrumb__last'
            >
                {productName}
            </Link>
        </nav>

    );
};

export default Breadcrumbs;