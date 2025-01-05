import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header';
// import Navbar from './components/nav/Navbar';
import Footer from './components/footer/Footer';
import Main from './components/main/Main'
import Articles from './components/articles/Articles'
import ArticlePage from './components/articles/ArticlePage'
import Topics from "./components/topics/Topics";
import UserComments from './components/comments/UserComments';
import Login from "./components/users/Login"
import Dashboard from './Dashboard/Dashboard';
import Layout from "./Dashboard/Layout";
import UserProfile from "./Dashboard/UserProfile"
import UserSettings from "./Dashboard/UserSettings"
import { UserProvider } from './context/UserContext'

import './App.css'

function App() {

  return (
    <>
      
        <UserProvider>
          <Header />
        {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:article_id" element={<ArticlePage />} />
            <Route path="/topics" element={<Topics />}/>
            <Route path="/user-comments" element={<UserComments />}></Route>
            <Route path="/login" element={<Login />}></Route>

            
            <Route path="/dashboard" element={<Layout />}>
              <Route index element={<Dashboard/>} />
              <Route path="profile" element={<UserProfile />} />
              <Route path="comments" element={<UserComments />} />
              <Route path="settings" element={<UserSettings />} />
            </Route>
            <Route path='*' element={<Error error={{ status: 404, statusText: 'Page not found'}} />} />
          </Routes>
          </UserProvider>
        <Footer />
    </>
  )
}

export default App
