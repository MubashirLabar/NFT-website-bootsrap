import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Header from '../components/header';
import ArtItemCard from '../components/art-item-card';
import CollectionCard from '../components/collection-card';

// Import Slider CSS files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Container } from 'reactstrap';

function HomeView() {
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
            collection_name: 'Lorem Ipsum is simply dummy text',
            price: 0.085,
            rank: 123,
            favorites: 3,
            image: require('../assets/images/product-6.jpeg').default,
        },
        {
            id: 7,
            collection_name: 'Lorem Ipsum is simply dummy text',
            price: 0.085,
            rank: 123,
            favorites: 3,
            image: require('../assets/images/product-3.jpeg').default,
        },
        {
            id: 8,
            collection_name: 'Lorem Ipsum is simply dummy text',
            price: 0.085,
            rank: 123,
            favorites: 3,
            image: require('../assets/images/product-2.jpeg').default,
        },
        {
            id: 9,
            collection_name: 'Lorem Ipsum is simply dummy text',
            price: 0.085,
            rank: 123,
            favorites: 3,
            image: require('../assets/images/product-4.jpeg').default,
        },
        {
            id: 10,
            collection_name: 'Lorem Ipsum is simply dummy text',
            price: 0.085,
            rank: 123,
            favorites: 3,
            image: require('../assets/images/product-5.jpeg').default,
        },
    ]);

    const [recentCollection, setRecentCollection] = useState([
        {
            id: 1,
            collection_name: 'Lorem Ipsum',
            no_of_items: '9,999',
            favorites: 3,
            image: require('../assets/images/product-1.jpeg').default,
            slug: 'loram',
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
            slug: 'loram',
        },
        {
            id: 4,
            collection_name: 'Lorem Ipsum is simply dummy text',
            no_of_items: '9,999',
            favorites: 3,
            image: require('../assets/images/product-4.jpeg').default,
            slug: 'loram',
        },
        {
            id: 5,
            collection_name: 'Lorem Ipsum is simply dummy text of the printing',
            no_of_items: '9,999',
            favorites: 3,
            image: require('../assets/images/product-5.jpeg').default,
            slug: 'loram',
        },
        {
            id: 6,
            collection_name: 'Lorem Ipsum is ',
            no_of_items: '9,999',
            favorites: 3,
            image: require('../assets/images/product-6.jpeg').default,
            slug: 'loram',
        },
        {
            id: 8,
            collection_name: 'Lorem Ipsum is simply dummy text of the printing',
            no_of_items: '9,999',
            favorites: 3,
            image: require('../assets/images/product-1.jpeg').default,
            slug: 'loram',
        },
        {
            id: 9,
            collection_name: 'Lorem Ipsum is simply',
            no_of_items: '9,999',
            favorites: 3,
            image: require('../assets/images/product-2.jpeg').default,
            slug: 'loram',
        },
        {
            id: 10,
            collection_name: 'Lorem Ipsum is simply dummy text of the printing',
            no_of_items: '9,999',
            favorites: 3,
            image: require('../assets/images/product-1.jpeg').default,
            slug: 'loram',
        },
        {
            id: 11,
            collection_name: 'Lorem Ipsum is simply',
            no_of_items: '9,999',
            favorites: 3,
            image: require('../assets/images/product-2.jpeg').default,
            slug: 'loram',
        },
    ]);

    var favoriteSlider = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 786,
                settings: {
                    slidesToShow: 3.1,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2.1,
                    slidesToScroll: 2,
                },
            },
        ],
    };

    return (
        <React.Fragment>
            <Header />
            <div className="home-view page-content">
                <Container className="app-container">
                    <div className="hdr">
                        <div className="lef">
                            <h3 className="tital font">Favorites</h3>
                        </div>
                        <div className="rit">
                            <Link to="/favorites" className="btn view-all font">
                                <div className="lbl font">View All</div>
                                <i className="ico bx bx-cookie" />
                            </Link>
                        </div>
                    </div>

                    {/* On Large Screen Favorites Items */}
                    <div className="favorite-blk flex aic large-screen">
                        {favoritProducts.map((item, index) => (
                            <div>
                                <ArtItemCard product={item} key={index} />
                            </div>
                        ))}
                    </div>

                    {/* On small Screen Favorites Items in Slider Form */}
                    <div className="favorite-blk flex aic small-screen">
                        <Slider {...favoriteSlider}>
                            {favoritProducts.map((item, index) => (
                                <div>
                                    <ArtItemCard product={item} key={index} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </Container>
                <Container className="app-container">
                    <div className="hdr">
                        <div className="lef">
                            <h3 className="tital font">Recent Collections</h3>
                        </div>
                    </div>
                    <div className="products-wrapper">
                        {recentCollection.map((item, index) => (
                            <CollectionCard product={item} key={index} />
                        ))}
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default HomeView;
