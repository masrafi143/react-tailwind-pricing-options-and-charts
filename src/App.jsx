import './App.css'
import Navbar from './components/Navbar'
import DaisyPricingCard from './components/pricingSection/DaisyPricingCategoryCard';
import PricingContainer from './components/pricingSection/PricingContainer';
import PricingCard from './components/pricingSection/PricingContainer'

const pricingPromise = fetch('pricingData.json').then(res => res.json());

function App() {

  return (
    <>
      <Navbar/>
      <PricingContainer pricingPromise={pricingPromise}/>
    </>
  )
}

export default App
