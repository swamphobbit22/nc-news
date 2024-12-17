//import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header';
import Navbar from './components/nav/Navbar';
import Footer from './components/footer/Footer';
import Main from './components/main/Main'
import Articles from './components/articles/Articles'
import ArticlePage from './components/articles/ArticlePage'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Header />
        <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:article_id" element={<ArticlePage />} />
          </Routes>
        <Footer />
    </>
  )
}

export default App
