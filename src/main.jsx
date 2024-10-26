import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import {store} from '../src/store.js'
import { Toaster } from 'react-hot-toast';
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
        <div className="min-h-screen w-screen overflow-hidden">
          <App />
        </div>        
        <Toaster position="top-right"/>
      </Provider> 
  </StrictMode>,
)
