import React, { useState } from 'react';
import Header from '../components/header';
import ArtItemCard from '../components/art-item-card';
import {
    Col,
    Container,
    Pagination,
    PaginationItem,
    PaginationLink,
    Row,
} from 'reactstrap';

function FavoritesView() {
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(5);

    const [favoritProducts, setFavoritProducts] = useState([
        {
            id: 1,
            collection_name: 'Lorem Ipsum',
            price: 0.085,
            rank: 123,
            favorites: 3,
            image: require('../assets/images/product-1.jpeg').default,
        },
        {
            id: 2,
            collection_name: 'Lorem Ipsum is simply',
            price: 0.085,
            rank: 123,
            favorites: 3,
            image: require('../assets/images/product-2.jpeg').default,
        },
        {
            id: 3,
            collection_name: 'Lorem Ipsum is simply dummy text',
            price: 0.085,
            rank: 123,
            favorites: 3,
            image: require('../assets/images/product-3.jpeg').default,
        },
        {
            id: 4,
            collection_name: 'Lorem Ipsum is simply dummy text',
            price: 0.085,
            rank: 123,
            favorites: 3,
            image: require('../assets/images/product-4.jpeg').default,
        },
        {
            id: 5,
            collection_name: 'Lorem Ipsum is simply dummy text',
            price: 0.085,
            rank: 123,
            favorites: 3,
            image: require('../assets/images/product-5.jpeg').default,
        },
        {
            id: 6,
            collection_name: 'Lorem Ipsum',
            price: 0.085,
            rank: 123,
            favorites: 3,
            image: require('../assets/images/product-6.jpeg').default,
        },
        {
            id: 7,
            collection_name: 'Lorem Ipsum is simply',
            price: 0.085,
            rank: 123,
            favorites: 3,
            image: require('../assets/images/product-5.jpeg').default,
        },
        {
            id: 8,
            collection_name: 'Lorem Ipsum is simply dummy text',
            price: 0.085,
            rank: 123,
            favorites: 3,
            image: require('../assets/images/product-3.jpeg').default,
        },
        {
            id: 9,
            collection_name: 'Lorem Ipsum is simply dummy text',
            price: 0.085,
            rank: 123,
            favorites: 3,
            image: require('../assets/images/product-1.jpeg').default,
        },
        {
            id: 10,
            collection_name: 'Lorem Ipsum is simply dummy text',
            price: 0.085,
            rank: 123,
            favorites: 3,
            image: require('../assets/images/product-4.jpeg').default,
        },
    ]);

    const handlePageClick = (page) => {
        setPage(page);
    };

    return (
        <React.Fragment>
            <Header />
            <div className="home-view search-view page-content">
                <Container className="app-container">
                    <div className="hdr">
                        <div className="lef">
                            <h3 className="tital font">Favorites</h3>
                        </div>
                    </div>
                    <div className="products-wrapper">
                        {favoritProducts.map((item, index) => (
                            <ArtItemCard product={item} key={index} />
                        ))}
                    </div>
                    <div className="pagination-bottom-page">
                        <Pagination className="pagination pagination-rounded justify-content-end mb-2">
                            <PaginationItem disabled={page === 1}>
                                <PaginationLink
                                    previous
                                    href="#"
                                    onClick={() => handlePageClick(page - 1)}
                                />
                            </PaginationItem>
                            {favoritProducts.map((item, i) => (
                                <PaginationItem active={i + 1 === page} key={i}>
                                    <PaginationLink
                                        onClick={() => handlePageClick(i + 1)}
                                        href="#"
                                    >
                                        {i + 1}
                                    </PaginationLink>
                                </PaginationItem>
                            ))}
                            <PaginationItem disabled={page === totalPage}>
                                <PaginationLink
                                    next
                                    href="#"
                                    onClick={() => handlePageClick(page + 1)}
                                />
                            </PaginationItem>
                        </Pagination>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default FavoritesView;
