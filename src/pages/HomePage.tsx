import {Cards} from "../components/card";
import {dataCard} from "../data/dataCard";
import {useDispatch} from "react-redux";
import {addItem} from "../redux/slices/cartSlice";
import {ICard} from "../models";


const HomePage = () => {
    const dispatch = useDispatch();

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
    return (
        <div className="main-wrapper">
            <div className="filter">Filter</div>
            <div className="card">
                {dataCard.map((item) => (
                    <Cards onClickAddItem={handleAddItem} key={item.id} card={item}/>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
