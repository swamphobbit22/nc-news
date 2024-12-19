import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header';
import Navbar from './components/nav/Navbar';
import Footer from './components/footer/Footer';
import Main from './components/main/Main'
import Articles from './components/articles/Articles'
import ArticlePage from './components/articles/ArticlePage'
import Topics from "./components/topics/Topics";
import './App.css'

function App() {

  return (
    <>
      <Header />
        <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:article_id" element={<ArticlePage />} />
            <Route path="/topics" element={<Topics />}/>
            {/* <Route path="/comments" element={<Comments />}></Route> */}
            <Route path='*' element={<Error error={{ status: 404, statusText: 'Page not found'}} />} />
          </Routes>
        <Footer />
    </>
  )
}

export default App
