import './../styles/Filter.css'
import DoubleRangeSlider from "./DoubleRangeSlider";

const Filter = () => {
    return (
        <div className='filter'>
            <div className='filter__buttons-wrap'>
                <button className='filter__button'>Reset</button>
                <button className='filter__button'>Copy link</button>
            </div>
            <div className='filter-type checkbox-container category'>
                <p className='filter-type__title'>Category</p>
                <div className='checkbox-item'>
                    <div className='checkbox-item__input-wrap'>
                        <input className='checkbox-item__input' type='checkbox' id='lipstic' name='lipstic'/>
                        <label className='checkbox-item__label' htmlFor='lipstic'>Lipstic</label>
                    </div>
                    <p className='checkbox-item__quantity'>4/4</p>
                </div>
            </div>
            <div className='filter-type checkbox-container brand-name'>
                <p className='filter-type__title'>Brand name</p>
                <div className='checkbox-item'>
                    <div className='checkbox-item__input-wrap'>
                        <input className='checkbox-item__input' type='checkbox' id='lipstic' name='lipstic'/>
                        <label className='checkbox-item__label' htmlFor='lipstic'>Lipstic</label>
                    </div>
                    <p className='checkbox-item__quantity'>4/4</p>
                </div>
            </div>
            <div className='filter-type slider-container price'>
                <p className='filter-type__title'>Price</p>
                <DoubleRangeSlider
                    min={0}
                    max={10}
                    onChange={({min, max}: { min: number; max: number }) =>
                        console.log(`min = ${min}, max = ${max}`)
                    }
                />
            </div>
            <div className='filter-type slider-container stock'>
                <p className='filter-type__title'>Stock</p>
                <DoubleRangeSlider
                    min={0}
                    max={10}
                    onChange={({min, max}: { min: number; max: number }) =>
                        console.log(`min = ${min}, max = ${max}`)
                    }
                />
            </div>
        </div>
    );
};

export default Filter;