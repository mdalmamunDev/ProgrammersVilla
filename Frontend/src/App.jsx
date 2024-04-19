import './App.css'
import Footer from './comps/Footer'
import Header from './comps/Header'
import Hero from './comps/Hero'
import Pro from './comps/Pro'
import ProList from './comps/ProList'
import { useEffect, useState } from 'react'
import axios from 'axios';

function App() {

  const [proInfo, setProInfo] = useState([]);
  const [proList, setProList] = useState();

  useEffect(() => {
    const getProList = async () => {
      try {
        const res = await axios.get("http://localhost:3000/programmer");
        console.log(res.data);
        setProList(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProList();
  }, []);

  return (
    <>
      <Header />
      {
        !proInfo ? (
          <>
            <Hero />
            <ProList
              proList={proList}
              setProInfo={setProInfo}
            />
          </>
        ) :
          <Pro pro={proInfo} setProInfo={setProInfo} />
      }
      <Footer />
    </>
  )
}

export default App
