import React, { use } from 'react';
import PricingCategoryCard from './PricingCategoryCard';
import DaisyPricingCategoryCard from './DaisyPricingCategoryCard';

const PricingContainer = ({pricingPromise}) => {
    const pricing = use(pricingPromise);
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='font-bold text-5xl text-center my-10'>Get Our Membership</h1>
            <div className='grid md:grid-cols-3 gap-8'>
                {
                    pricing.map(prices => <PricingCategoryCard prices={prices}/>)
                }
            </div>
            <div className='grid md:grid-cols-3 gap-8 my-10'>
                {
                    pricing.map(prices => <DaisyPricingCategoryCard prices={prices}/>)
                }
            </div>
            
        </div>
    );
};

export default PricingContainer;