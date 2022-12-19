import './../styles/Not-found-page.css';
import Image404 from './../assets/image/404.png'
import {Link} from 'react-router-dom';


const NotFoundPage = () => {
    return (
        <div className='not-found-wrap'>
            <img className='not-found__image' src={Image404} alt='illustration' />
            <p className='not-found__text'>Page Not Found</p>
            <Link className='not-found__button' to="/">Go back home</Link>
        </div>
    );
};

export default NotFoundPage;