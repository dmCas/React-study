import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import axios from 'axios'
import GlobalStats from './component/useEffect/demo'
import CountriesChart from './component/useEffect/CountriesChart'
import SelectDataKey from './component/useEffect/SelectDataKey'
const BASE_URL = "https://corona.lmao.ninja";
function App() {
  const [globalStats, setGlobalStats] = useState({});
  const [countries, setCountries] = useState([])
  const [key, setKey] = useState('cases')
  // useEffect(() => {
  //   axios.get(`${BASE_URL}/v2/all`).then((res) => {
  //     console.log(res)
  //     setGlobalStats(res.data)
  //   })
  // }, [])
  useEffect(() => {
    const fetchGlobalStats = async () => {
      const response = await fetch(`${BASE_URL}/v2/all`);
      const data = await response.json();
      console.log(data)
      setGlobalStats(data);
    };

    fetchGlobalStats();
    const intervalId = setInterval(fetchGlobalStats, 10000);

    return () => clearInterval(intervalId);
  }, [])

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch(`${BASE_URL}/v2/countries?sort=${key}`);
      const data = await response.json();
      console.log(data)
      setCountries(data.slice(0, 10));
    };
    fetchCountries()
  }, [key])

  return (
    <div>
      <h1>新型冠状病毒</h1>
      <GlobalStats stats={globalStats} />
      <SelectDataKey onChange={(e) => setKey(e.target.value)} />
      <CountriesChart data={countries} dataKey={key} />
    </div>
  )
}

export default App;
