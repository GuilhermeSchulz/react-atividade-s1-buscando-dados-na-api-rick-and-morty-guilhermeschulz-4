import { useState } from "react";
import "./App.css";
import { RenderHome } from "./components/RenderHome";
import { MainLanding } from "./components/RenderLanding";

function App() {
  const [userState, setUserState] = useState(false);

  const changePage = () => {
    setUserState(true)
  }

  return   (
    userState?
    <RenderHome>
      
    </RenderHome> :
    <MainLanding changePage={changePage}>
  
    </MainLanding>
    )

  
  
  
}

export default App;
