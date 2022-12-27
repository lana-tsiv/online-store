import './../styles/Sort.css'
import IconDown from './../assets/icons/down-arrow.png'
import {useState} from "react";
import {setSort} from "../redux/slices/filterSlice";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";

const Sort = () => {
    const dispatch = useDispatch()

    const sort = useSelector((state: RootState) => state.filter.sort)

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

    const selectList = [
        { name: 'No selected', sortProperty: ''},
        { name: 'Price: low to high', sortProperty: 'price'},
        { name: 'Price: high to low', sortProperty: '-price'},
        { name: 'Brand name (ASC)', sortProperty: 'brand'},
        { name: 'Brand name (DESC)', sortProperty: '-brand'},
    ]

    const onClickSortSelect = (index: number) => {
        dispatch(setSort(selectList[index]))
        setSortSelect(index)
        const sortIcon = document.querySelector('.sort__icon')
        sortIcon?.classList.remove('open')
        setDropDown(false)
    }

    return (
        <div className='sort-wrap'>
            <div onClick={openDropDown} className='sort-dropdown-button'>
                <img className='sort__icon' src={IconDown} alt='arrow down'/>
                <p className='sort__title'>Sort by</p>
                <span className='sort__selected'>{sort.name}</span>
            </div>
            {dropDown && (<div className='sort__drop-down'>
                <ul>
                    {
                        selectList.map((item, index) => (
                            <li key={item.name} onClick={() => onClickSortSelect(index)}
                                className={`drop-down__item ${sortSelect === index ? 'select' : ''}`}>{item.name}</li>
                        ))
                    }
                </ul>
            </div>)}
        </div>
    );
};

export default Sort;
