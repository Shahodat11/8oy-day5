import React, { lazy, Suspense} from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
const App = lazy (() => import ("./App"))
import './index.css'
// redux toolkit
import { store } from './context/strore.js'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import "number-brm"
import Loading from './components/loading/Loading.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<><Loading/></>}>
          <App />
        </Suspense>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
