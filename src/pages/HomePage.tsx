import {Cards} from "../components/card";
import {dataCard} from "../data/dataCard";
import {useDispatch} from "react-redux";
import {addItem} from "../redux/slices/cartSlice";
import {ICard} from "../models";
import Sort from "../components/Sort";
import Search from "../components/Search";
import {useState} from "react";
import Filter from "../components/Filter";

const HomePage = () => {
    const dispatch = useDispatch();

    const [searchData, setSearchData] = useState('')

    const handleAddItem = (card: ICard) => {
        const item = {
            id: card.id,
            price: card.price,
            brand: card.brand,
            productName: card.productName,
            category: card.category,
            photos: card.photos,
            stock: card.stock
        };

        dispatch(addItem(item));
    }

    const handleSearchChange = (value: string) => {
        setSearchData(value)
    }

    type KEYS = 'brand' | 'category' | 'productName' | 'description' | 'price' | 'stock'
    const keysSearch: KEYS[] = ['brand', 'category', 'productName', 'description', 'price', 'stock']

    return (
        <div className="main-wrapper">
            <div className="filter-wrap">
                <Filter/>
            </div>
            <div className='card-wrap'>
                <div className='sort-bar-wrapper'>
                    <Sort/>
                    <Search onChangeEvent={handleSearchChange}/>
                    <div>Sort ...</div>
                </div>
                <div className="card">
                    {dataCard.filter((item:ICard) => {
                         return keysSearch.some((key: KEYS) => item[key].toString().toLowerCase().includes(searchData.toLowerCase()))
                    }).map((item) => (
                        <Cards onClickAddItem={handleAddItem} key={item.id} card={item}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
