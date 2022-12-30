import './../styles/Filter.css'
import DoubleRangeSlider from "./DoubleRangeSlider";
import {useDispatch} from "react-redux";
import {setFilterByCategory, setSortByPriceAsc, setSortByStock} from "../redux/slices/filterSlice";
import {dataCard} from "../data/dataCard";
import {Fragment, useState} from "react";

const Filter = () => {

    const dispatch = useDispatch();

    const sortDataPrice = dispatch(setSortByPriceAsc(dataCard))
    const minValuePrice = Math.floor(sortDataPrice.payload[0].price);
    const maxValuePrice = Math.ceil(sortDataPrice.payload[sortDataPrice.payload.length - 1].price);


    const sortDataStock = dispatch(setSortByStock(dataCard))
    const minValueStock = sortDataStock.payload[0].stock;
    const maxValueStock = sortDataStock.payload[sortDataStock.payload.length - 1].stock;


    const findCategory: Array<string> = dataCard.reduce((acc: string[], item) => {
        if (!acc.find(accItems => item.category === accItems)) {
            acc.push(item.category)
        }
        return acc;
    }, []);

    const findBrand: Array<string> = dataCard.reduce((acc: string[], item) => {
        if (!acc.find(accItems => item.brand === accItems)) {
            acc.push(item.brand)
            acc.sort((a, b) => a.localeCompare(b))
        }
        return acc;
    }, []);


    const [key, setKey] = useState(0)
    const resetClick = () => setKey((key) => key + 1)

    return (
        <div className='filter'>
            <div className='filter__buttons-wrap'>
                <button className='filter__button' onClick={resetClick}>Reset</button>
                <button className='filter__button'>Copy link</button>
            </div>
            <p className='filter-type__title'>Category</p>
            <div className='filter-type checkbox-container category'>
                <Fragment key={key}>
                    {findCategory.map((item) => {
                        return (
                            <div key={item} className='checkbox-item'>
                                <div className='checkbox-item__input-wrap'>
                                    <input
                                        className='checkbox-item__input'
                                        type='checkbox'
                                        id={item}
                                        name={item}
                                        defaultChecked={false}
                                        onClick={() => dispatch(setFilterByCategory(item))}
                                    />
                                    <label className='checkbox-item__label' htmlFor='lipstic'>{item}</label>
                                </div>
                                <p className='checkbox-item__quantity'>4/4</p>
                            </div>)
                    })}
                </Fragment>
            </div>
            <p className='filter-type__title'>Brand name</p>
            <div className='filter-type checkbox-container brand-name'>
                <Fragment key={key}>
                    {findBrand.map((item: string) => {
                        return (<div key={item} className='checkbox-item'>
                            <div className='checkbox-item__input-wrap'>
                                <input
                                    className='checkbox-item__input'
                                    type='checkbox'
                                    id={item}
                                    name={item}
                                    defaultChecked={false}
                                />
                                <label className='checkbox-item__label' htmlFor='lipstic'>{item}</label>
                            </div>
                            <p className='checkbox-item__quantity'>4/4</p>
                        </div>)
                    })}
                </Fragment>
            </div>
            <div className='filter-type slider-container price'>
                <p className='filter-type__title'>Price</p>
                <DoubleRangeSlider
                    min={minValuePrice}
                    max={maxValuePrice}
                    onChange={({min, max}: { min: number; max: number }) =>
                        console.log(`min = ${min}, max = ${max}`)
                    }
                />
            </div>
            <div className='filter-type slider-container stock'>
                <p className='filter-type__title'>Stock</p>
                <DoubleRangeSlider
                    min={minValueStock}
                    max={maxValueStock}
                    onChange={({min, max}: { min: number; max: number }) =>
                        console.log(`min = ${min}, max = ${max}`)
                    }
                />
            </div>
        </div>
    );
};

export default Filter;