import React, { useState } from 'react';
import { Input, Label } from 'reactstrap';

interface Type {
    label: string;
    value: number;
    qty: number;
}

interface multiOptionsFiltersProps {
    key: any;
    data: {
        id?: number;
        title?: string;
        totalFilterOptions?: number;
        filterOptions?: Array<Type>;
    };
}

const MultiOptionsFilter = ({ key, data }: multiOptionsFiltersProps) => {
    const [openFilterOption, setOpenFilterOption] = useState(false);
    const discountData = [
        { label: '10% or more', value: 10, qty: 877 },
        { label: '20% or more', value: 20, qty: 212 },
        { label: '30% or more', value: 30, qty: 302 },
        { label: '40% or more', value: 40, qty: 500 },
        { label: '50% or more', value: 50, qty: 780 },
    ];

    const onSelectDiscount = () => {
        console.log('checked');
    };

    return (
        <div className="multi-options-filter">
            <div
                className="filter-item flex aic"
                onClick={() => setOpenFilterOption(!openFilterOption)}
            >
                <div className="meta flex aic">
                    <i className="mdi mdi-format-list-bulleted ico" />
                    <div className="font s14 b6">{data.title}</div>
                </div>
                <div className="actions flex aic">
                    <div className="font filter-qty">
                        {data.totalFilterOptions}
                    </div>
                    <i className="mdi mdi-chevron-down ico" />
                </div>
            </div>
            {openFilterOption && (
                <div className="filter-content flex flex-col">
                    <div className="filter-search-field form-control flex aic">
                        <i className="bx bx-search ico" />
                        <input
                            type="text"
                            className="iput"
                            placeholder="Filter"
                        />
                    </div>
                    <div className="filter-options">
                        <div className="option flex aic">
                            <div className="left flex aic">
                                <Input
                                    type="checkbox"
                                    value="10"
                                    className="form-check-input"
                                    onChange={onSelectDiscount}
                                />
                                <Label className="form-check-label">
                                    10% or more
                                </Label>
                            </div>
                            <div className="right flex aic">
                                <Label className="form-check-label">202</Label>
                            </div>
                        </div>
                        <div className="option flex aic">
                            <div className="left flex aic">
                                <Input
                                    type="checkbox"
                                    value="10"
                                    className="form-check-input"
                                    onChange={onSelectDiscount}
                                />
                                <Label className="form-check-label">
                                    20% or more
                                </Label>
                            </div>
                            <div className="right flex aic">
                                <Label className="form-check-label">300</Label>
                            </div>
                        </div>
                        <div className="option flex aic">
                            <div className="left flex aic">
                                <Input
                                    type="checkbox"
                                    value="10"
                                    className="form-check-input"
                                    onChange={onSelectDiscount}
                                />
                                <Label className="form-check-label">
                                    30% or more
                                </Label>
                            </div>
                            <div className="right flex aic">
                                <Label className="form-check-label">180</Label>
                            </div>
                        </div>
                        <div className="option flex aic">
                            <div className="left flex aic">
                                <Input
                                    type="checkbox"
                                    value="10"
                                    className="form-check-input"
                                    onChange={onSelectDiscount}
                                />
                                <Label className="form-check-label">
                                    40% or more
                                </Label>
                            </div>
                            <div className="right flex aic">
                                <Label className="form-check-label">22</Label>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MultiOptionsFilter;
