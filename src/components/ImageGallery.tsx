import './../styles/ImageGallery.css'
import {useState} from "react";
import LeftArrowIcon from './../assets/icons/left.png'
import RightArrowIcon from './../assets/icons/right.png'

export interface ImageGalleryProps {
    items: Array<string>
}

const ImageGallery = ({items}: ImageGalleryProps) => {

    const slides = items.map(item => ({url: item}))

    const [currentIndex, setCurrentIndex] = useState(0)

    const previousSlide = () => {
        const checkFirstSlide = currentIndex === 0
        const newIndex = checkFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const checkLastSlide = currentIndex === slides.length - 1
        const newIndex = checkLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const selectSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <div className='gallery-wrap'>
            <div className='gallery__image-wrap'>
                <img
                    className='gallery__arrow-left gallery__arrow'
                    src={LeftArrowIcon}
                    alt='arrow left'
                    onClick={previousSlide}
                />
                <div className='image-wrap'>
                    <img
                        className='image'
                        src={slides[currentIndex]?.url}
                        alt='gallery slide'
                    />
                </div>
                <img
                    className='gallery__arrow-right gallery__arrow'
                    src={RightArrowIcon}
                    alt='arrow right'
                    onClick={nextSlide}
                />
            </div>
            <div className='gallery__image-preview-wrap'>{slides.map((slide, slideIndex) => (
                <img
                    key={slideIndex}
                    className='gallery__image-preview'
                    src={slide?.url}
                    alt='gallery slide'
                    onClick={() => selectSlide(slideIndex)}
                />
            ))}</div>
        </div>
    );
};

export default ImageGallery;