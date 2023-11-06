import "./App.css";
import "./fonts.css";
import "./global.css"
import HandlerLayout from "./components/HandlerLayout/HandlerLayout";
import { GlobalContext } from "./contexts/GlobalContext";
import './Dashboard/components/HandlerLayoutAdmin/HandlerLayoutAdmin'
import { SyntheticEvent, useContext, useState } from "react";

function App() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const {setUpOrDown , upOrDown} = useContext(GlobalContext)

  const handlerScroll = (event: SyntheticEvent) => {
    
    const currentScrollPos = (event.target as Element).scrollTop;
    if (currentScrollPos > prevScrollPos) {
      setUpOrDown(false);
      // console.log('Scroll hacia abajo');
    } else if (currentScrollPos < prevScrollPos) {
      setUpOrDown(true);
      // console.log('Scroll hacia arriba');
    }
    setPrevScrollPos(currentScrollPos);
  }

  return (
      <div className={`App ${upOrDown?'':'down'}`} onScroll={(arg) => handlerScroll(arg)}>
        <HandlerLayout />
      </div>
  )
}

export default App;
