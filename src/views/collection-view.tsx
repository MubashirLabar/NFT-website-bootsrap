import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import CollectionItemCard from '../components/collection-item-card';
import MultiOptionsFilter from '../components/multi-options-filter';
import {
    Container,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

// users
import user2 from '../assets/images/users/avatar-2.jpg';

function CollectionView() {
    const [collectionFilter, setCollectioFilter] = useState(false);
    const [openFilterSidebar, setOpenFilterSidebar] = useState(false);
    const [collectionFilterValue, setCollectionFilterValue] =
        useState('Sort by Rank');
    const [filterOptions, setFilterOptions] = useState([
        { id: 1, label: 'Sort by Rank' },
        { id: 2, label: 'Popular' },
        { id: 3, label: 'Low to High Price' },
    ]);

    const [collectionItems, setCollectionItems] = useState([
        {
            id: 1,
            rank: 'Rank 1',
            rank_val: 29867.11,
            views: 0,
            last_views: 110.0,
            image: require('../assets/images/product-1.jpeg').default,
        },
        {
            id: 2,
            rank: 'Rank 2',
            rank_val: 29867.11,
            views: 500.0,
            last_views: 110.0,
            image: require('../assets/images/product-2.jpeg').default,
        },
        {
            id: 3,
            rank: 'Rank 3',
            rank_val: 29867.11,
            views: 500.0,
            last_views: 110.0,
            image: require('../assets/images/product-3.jpeg').default,
        },
        {
            id: 4,
            rank: 'Rank 4',
            rank_val: 29867.11,
            views: 500.0,
            last_views: 110.0,
            image: require('../assets/images/product-4.jpeg').default,
        },
        {
            id: 5,
            rank: 'Rank 5',
            rank_val: 29867.11,
            views: 500.0,
            last_views: 110.0,
            image: require('../assets/images/product-5.jpeg').default,
        },
        {
            id: 6,
            rank: 'Rank 6',
            rank_val: 29867.11,
            views: 500.0,
            last_views: 110.0,
            image: require('../assets/images/product-6.jpeg').default,
        },
        {
            id: 7,
            rank: 'Rank 7',
            rank_val: 29867.11,
            views: 500.0,
            last_views: 110.0,
            image: require('../assets/images/product-4.jpeg').default,
        },
        {
            id: 8,
            rank: 'Rank 8',
            rank_val: 29867.11,
            views: 500.0,
            last_views: 110.0,
            image: require('../assets/images/product-3.jpeg').default,
        },
        {
            id: 9,
            rank: 'Rank 9',
            rank_val: 29867.11,
            views: 500.0,
            last_views: 110.0,
            image: require('../assets/images/product-2.jpeg').default,
        },
        {
            id: 10,
            rank: 'Rank 10',
            rank_val: 29867.11,
            views: 500.0,
            last_views: 110.0,
            image: require('../assets/images/product-1.jpeg').default,
        },
        {
            id: 11,
            rank: 'Rank 11',
            rank_val: 29867.11,
            views: 500.0,
            last_views: 110.0,
            image: require('../assets/images/product-5.jpeg').default,
        },
        {
            id: 12,
            rank: 'Rank 12',
            rank_val: 29867.11,
            views: 500.0,
            last_views: 110.0,
            image: require('../assets/images/product-5.jpeg').default,
        },
        {
            id: 13,
            rank: 'Rank 13',
            rank_val: 29867.11,
            views: 500.0,
            last_views: 110.0,
            image: require('../assets/images/product-6.jpeg').default,
        },
        {
            id: 14,
            rank: 'Rank 14',
            rank_val: 29867.11,
            views: 500.0,
            last_views: 110.0,
            image: require('../assets/images/product-2.jpeg').default,
        },
        {
            id: 15,
            rank: 'Rank 15',
            rank_val: 29867.11,
            views: 500.0,
            last_views: 110.0,
            image: require('../assets/images/product-3.jpeg').default,
        },
    ]);

    const multiOptionsFilters = [
        {
            id: 1,
            title: 'Discount',
            totalFilterOptions: 20,
            filterOptions: [
                { label: '10% or more', value: 10, qty: 877 },
                { label: '20% or more', value: 20, qty: 212 },
                { label: '30% or more', value: 30, qty: 302 },
                { label: '40% or more', value: 40, qty: 500 },
                { label: '50% or more', value: 50, qty: 780 },
            ],
        },
        {
            id: 2,
            title: 'Pricing',
            totalFilterOptions: 8,
            filterOptions: [
                { label: '', value: 10, qty: 877 },
                { label: '1-100 usd', value: 20, qty: 212 },
                { label: '100-150 usd', value: 30, qty: 302 },
                { label: '150-200 usd', value: 40, qty: 500 },
                { label: '200-500 usd', value: 50, qty: 780 },
            ],
        },
        {
            id: 2,
            title: 'Pricing',
            totalFilterOptions: 8,
            filterOptions: [
                { label: '', value: 10, qty: 877 },
                { label: '1-100 usd', value: 20, qty: 212 },
                { label: '100-150 usd', value: 30, qty: 302 },
                { label: '150-200 usd', value: 40, qty: 500 },
                { label: '200-500 usd', value: 50, qty: 780 },
            ],
        },
        {
            id: 3,
            title: 'Tier',
            totalFilterOptions: 8,
            filterOptions: [
                { label: '', value: 10, qty: 877 },
                { label: '1-100 usd', value: 20, qty: 212 },
                { label: '100-150 usd', value: 30, qty: 302 },
                { label: '150-200 usd', value: 40, qty: 500 },
                { label: '200-500 usd', value: 50, qty: 780 },
            ],
        },
        {
            id: 4,
            title: 'Hats',
            totalFilterOptions: 8,
            filterOptions: [
                { label: '', value: 10, qty: 877 },
                { label: '1-100 usd', value: 20, qty: 212 },
                { label: '100-150 usd', value: 30, qty: 302 },
                { label: '150-200 usd', value: 40, qty: 500 },
                { label: '200-500 usd', value: 50, qty: 780 },
            ],
        },
        {
            id: 5,
            title: 'Trait Count',
            totalFilterOptions: 8,
            filterOptions: [
                { label: '', value: 10, qty: 877 },
                { label: '1-100 usd', value: 20, qty: 212 },
                { label: '100-150 usd', value: 30, qty: 302 },
                { label: '150-200 usd', value: 40, qty: 500 },
                { label: '200-500 usd', value: 50, qty: 780 },
            ],
        },
    ];

    useEffect(() => {
        if (openFilterSidebar) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [openFilterSidebar]);

    const handleDoneFilters = () => {
        setOpenFilterSidebar(false);
    };

    const handleClearAllFilters = () => {
        setOpenFilterSidebar(false);
    };

    return (
        <React.Fragment>
            <Header />
            <div className="collection-view page-content">
                {collectionItems.length ? (
                    <Container className="app-container">
                        <div className="collection-info flex aic">
                            <div className="blk">
                                <div className="item">
                                    <div
                                        className="dp"
                                        style={{
                                            backgroundImage: `url(${user2})`,
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="blk">
                                <div className="item">
                                    <div className="lbl">Floor</div>
                                    <div className="meta flex aic">
                                        <i className="ico mdi mdi-eye" />
                                        <div className="total">6.00</div>
                                    </div>
                                </div>
                            </div>
                            <div className="blk">
                                <div className="item">
                                    <div className="lbl">Total Volume</div>
                                    <div className="meta flex aic">
                                        <i className="ico mdi mdi-eye" />
                                        <div className="total">52926.23</div>
                                    </div>
                                </div>
                            </div>
                            <div className="blk">
                                <div className="item">
                                    <div className="lbl">7 Day Volume</div>
                                    <div className="meta flex aic">
                                        <i className="ico mdi mdi-eye" />
                                        <div className="total">1017.25</div>
                                        <div className="discount">45.43%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="blk">
                                <div className="item">
                                    <div className="lbl">Owners</div>
                                    <div className="meta flex aic">
                                        <i className="ico mdi mdi-eye" />
                                        <div className="total">4951</div>
                                    </div>
                                </div>
                            </div>
                            <div className="blk">
                                <div className="item">
                                    <div className="lbl">Items</div>
                                    <div className="meta flex aic">
                                        <i className="ico mdi mdi-eye" />
                                        <div className="total">9933</div>
                                    </div>
                                </div>
                            </div>
                            <div className="blk">
                                <div className="item">
                                    <div className="link flex aic">
                                        <i className="ico mdi mdi-link s19 anim" />
                                        <div className="txt font s15 anim">
                                            opensea.io
                                        </div>
                                    </div>
                                    <div className="link flex aic">
                                        <i className="ico mdi mdi-link s19 anim" />
                                        <div className="txt font s15 anim">
                                            opensea.io
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="collection-wrapper flex">
                            <div
                                className={`collection-sidebar ${
                                    openFilterSidebar
                                        ? 'open-sidebar'
                                        : 'close-sidebar'
                                }`}
                            >
                                <div className="filter-actions flex aic">
                                    <div className="left flex aic">
                                        <div
                                            className="action-btn"
                                            onClick={handleClearAllFilters}
                                        >
                                            Clear All
                                        </div>
                                    </div>
                                    <div className="right flex aic">
                                        <div
                                            className="action-btn"
                                            onClick={handleDoneFilters}
                                        >
                                            Done
                                        </div>
                                    </div>
                                </div>
                                <div className="collection-filter-blk flex flex-col">
                                    <div className="hdr flex aic">
                                        <div className="title font s14 b6">
                                            Collection Filters
                                        </div>
                                        <div className="tag font s14">
                                            Filter
                                        </div>
                                    </div>
                                    <div className="wrap">
                                        <div className="field flex aic">
                                            <div className="lit">
                                                <div className="font lbl">
                                                    Mink Rank
                                                </div>
                                            </div>
                                            <div className="rit">
                                                <input
                                                    type="number"
                                                    className="cleanbtn iput font s14"
                                                    placeholder="1.9933"
                                                />
                                            </div>
                                        </div>
                                        <div className="field flex aic">
                                            <div className="lit">
                                                <div className="font lbl">
                                                    Max Rank
                                                </div>
                                            </div>
                                            <div className="rit">
                                                <input
                                                    type="number"
                                                    className="cleanbtn iput font s14"
                                                    placeholder="1.9933"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="trait-filter-blk flex flex-col">
                                    <div className="hdr flex aic">
                                        <div className="title font s14 b6">
                                            Trait Filters
                                        </div>
                                    </div>
                                    <div className="wrap flex flex-col">
                                        {multiOptionsFilters.map(
                                            (item, idx) => (
                                                <MultiOptionsFilter
                                                    key={idx}
                                                    data={item}
                                                />
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="collection-content flex flex-col">
                                <div className="content-hdr flex aic">
                                    <div className="title font s16 b6">
                                        148 Results
                                    </div>
                                    <div className="pagination-blk">
                                        <button className="cleanbtn pag-btn prev font s14">
                                            Prev
                                        </button>
                                        <div className="num font s15 67">1</div>
                                        <button className="cleanbtn pag-btn next font s14">
                                            Next
                                        </button>
                                    </div>
                                    <Dropdown
                                        isOpen={collectionFilter}
                                        toggle={() => {
                                            setCollectioFilter(
                                                !collectionFilter
                                            );
                                        }}
                                        className="btn-group mb-sm-0 search-filter"
                                    >
                                        <DropdownToggle className="dropdown-toggle">
                                            <div className="flex aic">
                                                <div className="lbl font selected">
                                                    {collectionFilterValue}
                                                </div>
                                                <i className="mdi mdi-chevron-down ms-1 ico" />
                                            </div>
                                        </DropdownToggle>
                                        <DropdownMenu className="dropdown-menu-end">
                                            {filterOptions.map(
                                                (option, idx) => (
                                                    <DropdownItem key={idx}>
                                                        <div
                                                            onClick={(e) =>
                                                                setCollectionFilterValue(
                                                                    option.label
                                                                )
                                                            }
                                                        >
                                                            {option.label}
                                                        </div>
                                                    </DropdownItem>
                                                )
                                            )}
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                                <div className="collection-items">
                                    {collectionItems.map((item, idx) => (
                                        <CollectionItemCard
                                            product={item}
                                            key={idx}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Container>
                ) : (
                    <Container className="app-container">
                        <div className="empty-collections flex flex-col">
                            <div className="empty-content">
                                <div className="title font s28 b6">
                                    No Collection Data
                                </div>
                                <div className="txt font">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's.
                                </div>
                                <button className="empty-btn cleanbtn font s15 b5">
                                    Queue Info
                                </button>
                            </div>
                        </div>
                    </Container>
                )}
                <div
                    className="filters-btn-blk"
                    onClick={() => setOpenFilterSidebar(true)}
                >
                    <div className="filters-button flex aic">
                        <div className="lbl">Filter</div>
                        <div className="qty">1</div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CollectionView;
