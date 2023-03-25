import { useState } from 'react'
import  Header  from './components/Header'
import  Selecteurs  from './components/Selecteurs'
import './App.css'


function App() {
  const [lang, setLang] = useState("fr")
  const updateLang = (langage: string):void => {
    setLang(langage)
}
console.log("la langue est : " + lang + "")
  return (
    <div className="App">
      <Header lang={lang} />
      <Selecteurs lang={lang} updateLang={updateLang} />
    </div>
  )
  
}


export default App
