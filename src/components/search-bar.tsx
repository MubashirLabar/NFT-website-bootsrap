import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

type ISearchBarProps = {
    width?: number;
    useSearchButton?: boolean;
    searchButtonText?: string;
};

function SearchBar(props: ISearchBarProps) {
    const [searchText, setSearchText] = useState('');
    const history = useHistory();

    const onSearchButtonClick = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {};

    return (
        // <div>
        //     <input
        //         value={searchText}
        //         onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        //             setSearchText(e.target.value);
        //         }}
        //         style={{
        //             width: props.width || 100,
        //         }}
        //     />
        //     {props.useSearchButton && (
        //         <button onClick={onSearchButtonClick}>
        //             {props.searchButtonText ? props.searchButtonText : 'Search'}
        //         </button>
        //     )}
        // </div>
        <div className="position-relative">
            <input
                type="text"
                className="form-control"
                placeholder="Search..."
                value={searchText}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setSearchText(e.target.value);
                    history.push('/search');
                }}
            />
            <span className="bx bx-search-alt" />
        </div>
    );
}

export default SearchBar;
