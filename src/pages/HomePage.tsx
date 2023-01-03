import {Cards} from "../components/card";
import {dataCard} from "../data/dataCard";
import {useDispatch, useSelector} from "react-redux";
import {addItem} from "../redux/slices/cartSlice";
import {ICard} from "../models";
import Sort from "../components/Sort";
import Search from "../components/Search";
import {useEffect, useState} from "react";
import Filter from "../components/Filter";
import {RootState} from "../redux/store";
import {
    setSortByDefault,
    setSortByBrandAsc,
    setSortByBrandDesc,
    setSortByPriceAsc,
    setSortByPriceDesc,
} from "../redux/slices/filterSlice";
import GridIcon from "./../assets/icons/grid.png";
import ListIcon from "./../assets/icons/list.png";
import NoFound from './../assets/image/no-found.png'

const HomePage = () => {
    const dispatch = useDispatch();
    const [currentSort, setCurrentSort] = useState("");

    if (currentSort === "") dispatch(setSortByDefault(dataCard));
    if (currentSort === "price") dispatch(setSortByPriceAsc(dataCard));
    if (currentSort === "-price") dispatch(setSortByPriceDesc(dataCard));
    if (currentSort === "brand") dispatch(setSortByBrandAsc(dataCard));
    if (currentSort === "-brand") dispatch(setSortByBrandDesc(dataCard));

    const [searchData, setSearchData] = useState("");
    const sort = useSelector((state: RootState) => state.filter.sort);
    const items = useSelector((state: RootState) => state.filter.items);

    const [filteredItems, setFilteredItems] = useState(items)

    useEffect(() => {
        setTimeout(() => {
            setCurrentSort(sort.sortProperty);
        }, 0);
    }, [sort]);

    const handleAddItem = (card: ICard) => {
        const item = {
            id: card.id,
            price: card.price,
            brand: card.brand,
            productName: card.productName,
            category: card.category,
            photos: card.photos,
            stock: card.stock,
        };

        dispatch(addItem(item));
    };

    const handleSearchChange = (value: string) => {
        setSearchData(value);
    };

    type KEYS =
        | "brand"
        | "category"
        | "productName"
        | "description"
        | "price"
        | "stock";
    const keysSearch: KEYS[] = [
        "brand",
        "category",
        "productName",
        "description",
        "price",
        "stock",
    ];

    const [view, setView] = useState(false);
    useEffect(() => {
        const newItems = items
            .filter((item: ICard) => {
                return keysSearch.some((key: KEYS) =>
                    item[key]
                        .toString()
                        .toLowerCase()
                        .includes(searchData.toLowerCase())
                );
            })
        setFilteredItems(newItems)
    }, [items, searchData])

    const changeView = () => {
        setView(!view);
    };

    return (
        <div className="main-wrapper">
            <div className="filter-wrap">
                <Filter/>
            </div>
            <div className="card-wrap">
                <div className="sort-bar-wrapper">
                    <Sort/>
                    <Search onChangeEvent={handleSearchChange}/>
                    <div className="toggle-wrap">
                        <img
                            onClick={changeView}
                            className={`toggle ${!view ? "toggle__active" : ""} `}
                            src={GridIcon}
                            alt="grid"
                        />
                        <img
                            onClick={changeView}
                            className={`toggle ${view ? "toggle__active" : ""} `}
                            src={ListIcon}
                            alt="list"
                        />
                    </div>
                </div>
                <div className="card">
                    {filteredItems.length ? filteredItems
                            .map((item) => (
                                <Cards
                                    big={view}
                                    onClickAddItem={handleAddItem}
                                    key={item.id}
                                    card={item}
                                />
                            )) :
                        <div className='no-found-wrap'>
                            <div>
                                <h2 className='no-found__title'>No Result Found</h2>
                                <p className='no-found__subtitle'>Please try again</p>
                            </div>
                            <img src={NoFound} className='no-found__image' alt='no found data'/>
                        </div>}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
