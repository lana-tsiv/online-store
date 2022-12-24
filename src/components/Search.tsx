import './../styles/Search.css'
import SearchImage from './../assets/icons/search-interface-symbol.png'
import SearchClose from './../assets/icons/close.png'
import {ChangeEvent, useState} from "react";

type SearchProps = {
    onChangeEvent: (value: string) => void
}

const Search = ({onChangeEvent}: SearchProps) => {
    const [searchData, setSearchData] = useState('')

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchData(event.currentTarget.value)
        onChangeEvent(event.currentTarget.value)
    }

    const handleClear = () =>{
        setSearchData('')
        onChangeEvent('')
    }

    return (
        <div className='search-wrap'>
            <img className='search__icon' src={SearchImage} alt='search'/>
            <input className='search'
                   placeholder='Search'
                   value={searchData}
                   onChange={handleChange}
            />
            {searchData && (
                <img className='search__icon-close'
                     src={SearchClose}
                     alt='close'
                     onClick={handleClear}
                />
            )}
        </div>
    );
};

export default Search;