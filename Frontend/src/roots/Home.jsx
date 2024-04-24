import React from 'react'
import Hero from '../comps/Hero'
import ProList from '../comps/ProList'
import About from '../comps/About'

export default function Home({proList, setRoot, setPro}) {
  return (
    <>
      <Hero />
      <ProList
        proList={proList}
        setRoot={setRoot}
        setPro={setPro}
      />
      <About/>
    </>
  )
}
