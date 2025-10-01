import { Suspense } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import PricingContainer from './components/pricingSection/PricingContainer';
import Recharts from './components/Result-Chart/recharts';
import axios from 'axios';
import Axios from './components/Result-Chart/Axios';
import AwsomeReactComponents from './components/AwsomeReactComponents';

const pricingPromise = fetch('pricingData.json').then(res => res.json());
const resultPromise = axios.get('marksData.json');
function App() {

  return (
    <>
      <Navbar/>
      <Suspense fallback={<p>pricing loading.....</p>}>
        <PricingContainer pricingPromise={pricingPromise}/>
      </Suspense>
      <Suspense fallback={<p>result loading.....</p>}>
        <Axios resultPromise={resultPromise}/>
      </Suspense>
      <Recharts/>
      <AwsomeReactComponents/>
    </>
  )
}

export default App
