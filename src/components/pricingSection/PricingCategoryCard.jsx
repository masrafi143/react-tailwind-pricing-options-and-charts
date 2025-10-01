import React from 'react';

const PricingCategoryCard = ({prices}) => {
    const {name, price, description, features} = prices;
    return (
        <div className='rounded-2xl p-4 bg-amber-200 flex flex-col'>
            <div className="flex justify-between">
                <h1 className="text-4xl font-bold">{name}</h1>
                <h3>{price}</h3>
            </div>
            <div className='flex-1 bg-amber-100 p-4 rounded-2xl mt-5'>
            {
                features.map(feature => {
                    return(
                        <div className='flex items-center'>
                            <i class="fa-regular fa-circle-check mr-3 text-black"></i>
                            <p>{feature}</p>
                        </div>
                    );
                })
            }
            </div>
            <p className='p-3 rounded-2xl'>{description}</p>
            <button className='btn btn-primary w-full'>Subscribe</button>
        </div>
    );
};

export default PricingCategoryCard;