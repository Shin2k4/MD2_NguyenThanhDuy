import React from 'react'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import './home.scss'
import Content from './components/contents/content'
import Carousels from './components/carousel/Carousels'
export default function Home() {
  return (
    <div className='body'>
        <Header/>
        <Carousels/>
        <Content/>
        <Footer/>
    </div>
  )
}
