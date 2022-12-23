import './../styles/Sort.css'
import IconDown from './../assets/icons/down-arrow.png'
import {useState} from "react";

const Sort = () => {

    const [dropDown, setDropDown] = useState(false)

    const openDropDown = () => {
        const sortIcon = document.querySelector('.sort__icon')

        if (dropDown) {
            setDropDown(false)
            sortIcon?.classList.remove('open')

        } else {
            sortIcon?.classList.add('open')
            setDropDown(true)
        }

    }

    const [sortSelect, setSortSelect] = useState(0)
    const selectList = ['No selected', 'Price: high to low', 'Price: low to high', 'Brand name']

    const onClickSortSelect = (index: number) => {
        const sortIcon = document.querySelector('.sort__icon')
        sortIcon?.classList.remove('open')
        setSortSelect(index)
        setDropDown(false)
    }

    return (
        <div className='sort-wrap'>
            <div onClick={openDropDown} className='sort-dropdown-button'>
                <img className='sort__icon' src={IconDown} alt='arrow down'/>
                <p className='sort__title'>Sort by</p>
                <span className='sort__selected'>{selectList[sortSelect]}</span>
            </div>
            {dropDown && (<div className='sort__drop-down'>
                <ul>
                    {
                        selectList.map((item, index) => (
                            <li key={item} onClick={() => onClickSortSelect(index)}
                                className={`drop-down__item ${sortSelect === index ? 'select' : ''}`}>{item}</li>
                        ))
                    }
                </ul>
            </div>)}
        </div>
    );
};

export default Sort;
