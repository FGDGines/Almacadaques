import "./App.css";
import "./fonts.css";
import HandlerLayout from "./components/HandlerLayout/HandlerLayout";
import { GlobalContextProvider } from "./contexts/GlobalContext";

function App() {
  
  return (
    <GlobalContextProvider>
      <div className='App'>
        <HandlerLayout />
      </div>
    </GlobalContextProvider>
  )
}

export default App;
