import './App.css'

import HandlerLayout from './components/HandlerLayout/HandlerLayout'
import { GlobalContextProvider } from './contexts/GlobalConext'

function App() {
  
  return (
    <GlobalContextProvider>
      <div className='App'>
        <HandlerLayout />
      </div>
    </GlobalContextProvider>
  )
}

export default App
