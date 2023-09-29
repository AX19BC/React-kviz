import { useEfferct, useState } from 'react'
import './App.css'
import FirstScreen from './firstScreen'
import KvizScreen from './kvizScreen'

function App() {
  const [screen, setScreen] = useState(true)

  function switchScreen(){
    setScreen(prevScreen => !prevScreen)
  }

  return (
      <div>
        {screen === true 
        ? <FirstScreen 
          switchScreen={switchScreen}
          /> 
        : <KvizScreen />}
      </div>
  )
}

export default App
