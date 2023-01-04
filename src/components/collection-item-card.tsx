import React, { useState } from 'react';
import { Card } from 'reactstrap';
import { Link } from 'react-router-dom';

interface CollectionItemCardProps {
    key: any;
    product: {
        id?: number;
        rank?: string;
        rank_val?: number;
        views?: number;
        last_views?: number;
        image?: string;
    };
}

function CollectionItemCard({ key, product }: CollectionItemCardProps) {
    return (
        <div key={key} className="collection-item-card">
            <div
                className="image"
                style={{
                    backgroundImage: `url(${product.image})`,
                }}
            />
            <div className="meta flex flex-col">
                <div className="rank flex aic">
                    <div className="lbl">{product.rank}</div>
                    <div className="rank-num">{`(${product.rank_val})`}</div>
                </div>
                <div className="statics flex aic">
                    <div className="views flex aic">
                        <i className="ico mdi mdi-eye" />
                        <div className="views-val wordwrap">
                            {product.views}
                        </div>
                    </div>
                    <div className="views flex aic">
                        <div className="lbl">Last</div>
                        <i className="ico mdi mdi-eye" />
                        <div className="views-val wordwrap">
                            {product.last_views}
                        </div>
                    </div>
                </div>
                <div className="links flex aic">
                    <div className="link flex aic">
                        <i className="ico mdi mdi-link" />
                        <div className="txt font s15 anim">opensea.io</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CollectionItemCard;
