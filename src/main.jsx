import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import { UserProvider } from '../src/context/UserContext.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <UserProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserProvider>
)
