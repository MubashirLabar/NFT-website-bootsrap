import React, { useState } from 'react';
import Header from '../components/header';
import ArtItemCard from '../components/art-item-card';
import CollectionCard from '../components/collection-card';

import {
    Container,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

function SearchView() {
    const [filterMenu, setFilterMenu] = useState(false);
    const [filterValue, setFilterValue] = useState('Popular');
    const [filterOptions, setFilterOptions] = useState([
        { id: 1, label: 'Popular' },
        { id: 1, label: 'Sort by Rank' },
        { id: 1, label: 'Low to High Price' },
    ]);
    const [searchResults, setSearchResults] = useState([
        {
            id: 1,
            collection_name: 'Lorem Ipsum',
            no_of_items: '9,999',
            favorites: 3,
            image: require('../assets/images/product-1.jpeg').default,
        },
        {
            id: 2,
            collection_name: 'Lorem Ipsum is simply dummy text of the printing',
            no_of_items: '9,999',
            favorites: 3,
            image: require('../assets/images/product-2.jpeg').default,
        },
        {
            id: 3,
            collection_name: 'Lorem Ipsum is simply dummy text',
            no_of_items: '9,999',
            favorites: 3,
            image: require('../assets/images/product-3.jpeg').default,
        },
        {
            id: 4,
            collection_name: 'Lorem Ipsum is simply dummy text',
            no_of_items: '9,999',
            favorites: 3,
            image: require('../assets/images/product-4.jpeg').default,
        },
        {
            id: 5,
            collection_name: 'Lorem Ipsum is simply dummy text of the printing',
            no_of_items: '9,999',
            favorites: 3,
            image: require('../assets/images/product-5.jpeg').default,
        },
        {
            id: 6,
            collection_name: 'Lorem Ipsum is ',
            no_of_items: '9,999',
            favorites: 3,
            image: require('../assets/images/product-6.jpeg').default,
        },
        {
            id: 8,
            collection_name: 'Lorem Ipsum is simply dummy text of the printing',
            no_of_items: '9,999',
            favorites: 3,
            image: require('../assets/images/product-1.jpeg').default,
        },
        {
            id: 9,
            collection_name: 'Lorem Ipsum is simply',
            no_of_items: '9,999',
            favorites: 3,
            image: require('../assets/images/product-2.jpeg').default,
        },
        {
            id: 10,
            collection_name: 'Lorem Ipsum is simply dummy text of the printing',
            no_of_items: '9,999',
            favorites: 3,
            image: require('../assets/images/product-1.jpeg').default,
        },
        {
            id: 11,
            collection_name: 'Lorem Ipsum is simply',
            no_of_items: '9,999',
            favorites: 3,
            image: require('../assets/images/product-2.jpeg').default,
        },
    ]);

    return (
        <React.Fragment>
            <Header />
            <div className="home-view search-view page-content">
                <Container className="app-container">
                    <div className="hdr">
                        <div className="lef">
                            <h3 className="tital font">Search Results</h3>
                        </div>
                        <div className="right flex aic">
                            <Dropdown
                                isOpen={filterMenu}
                                toggle={() => {
                                    setFilterMenu(!filterMenu);
                                }}
                                className="btn-group mb-2 mb-sm-0 search-filter"
                            >
                                <DropdownToggle className="dropdown-toggle">
                                    <div className="flex aic">
                                        <div className="font selected">
                                            {filterValue}
                                        </div>
                                        <i className="mdi mdi-chevron-down ms-1 ico" />
                                    </div>
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-end">
                                    {filterOptions.map((option, idx) => (
                                        <DropdownItem key={idx}>
                                            <div
                                                onClick={(e) =>
                                                    setFilterValue(option.label)
                                                }
                                            >
                                                {option.label}
                                            </div>
                                        </DropdownItem>
                                    ))}
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="products-wrapper">
                        {searchResults.map((item, index) => (
                            <CollectionCard product={item} key={index} />
                        ))}
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default SearchView;
