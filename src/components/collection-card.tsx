import React, { useState } from 'react';
import { Card } from 'reactstrap';
import { Link } from 'react-router-dom';

interface ProductCardProps {
    key?: number;
    product: {
        id?: number;
        collection_name?: string;
        no_of_items?: string;
        favorites?: number;
        image?: string;
        slug?: string;
    };
}

function CollectionCard({ key, product }: ProductCardProps) {
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <Card className="product-card collection-card">
            <Link
                to={`/collections/${product.slug}`}
                className="product-img"
                style={{
                    backgroundImage: `url(${product.image})`,
                }}
            />
            <div className="product-card-content flex flex-col">
                <Link to={`/collections/${product.slug}`} className="meta flex">
                    <div className="lef flex flex-col">
                        <h5 className="meta-txt font wordwrap-2">
                            {product.collection_name}
                        </h5>
                    </div>
                    {product.no_of_items && (
                        <div className="rit flex flex-col">
                            <div className="meta-label text-muted font">
                                {product.no_of_items} items
                            </div>
                        </div>
                    )}
                </Link>
                <div className="dropdown-divider" />
                <div className="ftr flex aic">
                    <button
                        className={`cleanbtn favorite-btn flex aic ${
                            isFavorite ? 'on' : ''
                        }`}
                        onClick={() => setIsFavorite(!isFavorite)}
                    >
                        <i
                            className={`ico mdi text-muted ${
                                isFavorite ? 'mdi-heart' : 'mdi-heart-outline'
                            }`}
                        />
                        <div className="fav-number text-muted  font">
                            {product.favorites}
                        </div>
                    </button>
                </div>
            </div>
        </Card>
    );
}

export default CollectionCard;
