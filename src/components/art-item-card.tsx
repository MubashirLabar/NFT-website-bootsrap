import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Modal } from 'reactstrap';

interface ProductCardProps {
    key?: number;
    product: {
        id?: number;
        collection_name?: string;
        price?: number;
        rank?: number;
        favorites?: number;
        image?: string;
    };
}

function ArtItemCard({ key, product }: ProductCardProps) {
    const [isFavorite, setIsFavorite] = useState(false);
    const [openDetail, setOpenDetail] = useState(false);

    const [traits, setTraits] = useState([
        { name: 'Trait Name', status: 'Rare' },
        { name: 'Trait Name', status: 'Uncommon' },
        { name: 'Trait Name', status: 'Common' },
        { name: 'Trait Name', status: 'Common' },
    ]);

    useEffect(() => {
        if (openDetail) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [openDetail]);

    return (
        <>
            <Card className="product-card">
                <div
                    className="product-img"
                    style={{
                        backgroundImage: `url(${product.image})`,
                    }}
                    onClick={() => setOpenDetail(true)}
                />
                <div className="product-card-content flex flex-col">
                    <div
                        className="meta flex"
                        onClick={() => setOpenDetail(true)}
                    >
                        <div className="lef flex flex-col">
                            <div className="meta-label font text-muted">
                                Name
                            </div>
                            <h5 className="meta-txt font wordwrap-2">
                                {product.collection_name}
                            </h5>
                        </div>
                        <div className="rit flex flex-col">
                            <div className="meta-label text-muted font">
                                Price
                            </div>
                            <h5 className="meta-txt font">{product.price}</h5>
                        </div>
                    </div>
                    <div className="dropdown-divider" />
                    <div className="ftr flex aic">
                        <div className="rank-label text-muted font wordwrap">{`Rank #${product.rank}`}</div>
                        <button
                            className={`cleanbtn favorite-btn flex aic ${
                                isFavorite ? 'on' : ''
                            }`}
                            onClick={() => setIsFavorite(!isFavorite)}
                        >
                            <i
                                className={`ico mdi text-muted ${
                                    isFavorite
                                        ? 'mdi-heart'
                                        : 'mdi-heart-outline'
                                }`}
                            />
                            <div className="fav-number text-muted  font">
                                {product.favorites}
                            </div>
                        </button>
                    </div>
                </div>
            </Card>

            {/* Art Item Detail Modal */}
            <Modal
                isOpen={openDetail}
                role="dialog"
                size="lg"
                className="product-detail-dialog"
                autoFocus={true}
                centered={true}
                toggle={() => {
                    setOpenDetail(!openDetail);
                }}
            >
                <div className="dialog-content">
                    <div
                        className="close-btn"
                        onClick={() => setOpenDetail(false)}
                    >
                        &times;
                    </div>
                    <div className="block flex">
                        <div
                            className="product-img"
                            style={{
                                backgroundImage: `url(${product.image})`,
                            }}
                        />
                        <div className="meta flex">
                            <div className="lit flex flex-col">
                                <div className="collection-name font s18">
                                    Collection Name
                                </div>
                                <div className="item-name font">
                                    {product.collection_name}
                                </div>
                                <div className="item-price font">
                                    {product.price}
                                </div>
                            </div>
                            <div className="rit flex flex-col">
                                <div className="item-rank font">{`Rank #${product.rank}`}</div>
                                <div className="item-score font">Score</div>
                            </div>
                        </div>
                    </div>
                    <div className="traits-blk flex flex-col">
                        <div className="title font s18 b6">Traits</div>
                        <div className="traits-wrap">
                            {traits.map((trait, idx) => (
                                <div
                                    key={idx}
                                    className={`trait-item flex aic `}
                                >
                                    <div className="lbl font s15 b6">
                                        {trait.name}
                                    </div>
                                    <div
                                        className={`status font s15 b6 ${trait.status}`}
                                    >
                                        {trait.status}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default ArtItemCard;
