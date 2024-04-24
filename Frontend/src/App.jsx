import './App.css'
import Footer from './comps/Footer'
import Header from './comps/Header'
import Pro from './roots/Pro'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Home from './roots/Home'
import AddPro from './roots/AddPro'
import { Toaster } from 'react-hot-toast'

function App() {

  const [root, setRoot] = useState('Home');
  const [proList, setProList] = useState([]);
  const [pro, setPro] = useState();

  useEffect(() => {
    const getProList = async () => {
      try {
        const res = await axios.get("http://localhost:3000/programmer");
        setProList(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProList();
  }, []);

  return (
    <>
      <Header setRoot={setRoot} />
      {(() => {
        switch (root) {
          case 'Pro':
            return <Pro setRoot={setRoot} proList={proList} setProList={setProList} pro={pro} setPro={setPro} />;
          case 'AddPro':
            return <AddPro proList={proList} setProList={setProList} setRoot={setRoot} setPro={setPro} />;
          case 'EditPro':
            return <AddPro proList={proList} setProList={setProList} setRoot={setRoot} setPro={setPro} pro={pro} />;
          default:
            return <Home proList={proList} setRoot={setRoot} setPro={setPro} />;
        }
      })()}
      <Footer />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </>
  )
}

export default App
