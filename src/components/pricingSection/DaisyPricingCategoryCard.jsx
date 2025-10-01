import React from 'react';

const DaisyPricingCategoryCard = ({prices}) => {
    const {name, price, description, features, popular} = prices;

    return (
    <div className="card bg-base-100 shadow-lg">
        <div className="card-body ">
            {popular && 
                <div className='flex justify-end'>
                    <span className="badge badge-xs badge-warning">Most Popular</span>
                </div>
            }
            <div className="flex justify-between">
                <h2 className="text-3xl font-bold">{name}</h2>
                <span className="text-xl">{price}</span>
            </div>
            <div className="mt-3 flex-1 gap-2 text-xs ">
                {
                    features.map(feature => {
                        return(
                            <div className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>{feature}</span>
                            </div>
                        );
                    })
                }
            </div>
            <div className="mt-3">
                <p>{description}</p>
                <button className="btn btn-primary btn-block mt-3">Subscribe</button>
            </div>
        </div>
    </div>
    );
};

export default DaisyPricingCategoryCard;